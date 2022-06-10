<template>
  <div class="settings-block backblock catalogchats openchat relative-position">
    <q-inner-loading :showing="currentChat===0">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    <div class="top">
      <img class="arrow cursor-pointer" @click="$router.back()" src="~assets/arrow.svg" alt="arrow">
      <div v-if="currentChat!==0" class="right">
        <div v-if="chatData.is_online" class="time "> <q-badge  color="green-13">在线</q-badge></div>
        <div class="account">
          <div class="title flex items-center">
            <q-avatar class="q-mr-sm">
            <img :src="chatData.avatar" alt="avatar">
          </q-avatar>
            <div class="">
               <p class="q-mb-none text-dark text-bold">{{chatData.fio}}</p>
            <p class="q-mb-none text-dark text-caption">@{{chatData.nickname}}</p>
            </div>


          </div>


        </div>
      </div>
    </div>
    <div ref="messagesContainer" class="windowchat">
      <!--				<div class="date">Yesterday</div>-->
      <div class="me"
           :class="[message.user.id === $auth.user.id ? 'me':'you']"
           v-for="message in messages"
           :key="message.id" >
        <div class="message "
             :class="[message.user.id === $auth.user.id ? 'mesme':'mesyou']"
        >
          <div class="text">
            <p class="q-mb-none" v-if="message.user.id === $auth.user.id" v-html="message.message"></p>
            <p class="q-mb-none" v-else v-html="message.message_translate"></p>
            <img style="width: 100%;max-width: 100%;height: auto"  v-if="message.image" :src="message.image" alt="">
            <img style="width: 100%;max-width: 100%;height: auto" v-if="message.stiker" :src="message.is_socket ? base_url+message.stiker.image : message.stiker.image" alt="">
          </div>
          <div class="time">{{new Date(message.createdAt).toLocaleString()}}</div>
        </div>
      </div>



    </div>
    <div class="bottom">
      <div class="chat-send-block">

        <q-input  :loading="is_loading" :disable="is_loading" filled @keydown="keyDown" v-model="message" label="写短信" class="col-grow q-mr-md"   />
        <q-btn text-color="primary" :disable="!message" :loading="is_loading" class="q-mr-md" @click="sendChatMessage(null)" round icon="send"/>
        <q-btn text-color="primary" :loading="is_loading" class="q-mr-md" round icon="card_giftcard">

          <q-menu
            v-model="stikerMenuActive"
            :offset="[0, -150]"
          >
            <q-tabs
              v-model="stiker_tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator >
              <q-tab
                v-for="(group,index) in stikers"
                :label="group.name" :key="group.id" :name="`tab_${index}`" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="stiker_tab" animated>
              <q-tab-panel v-for="(group,index) in stikers" :key="group.id" :name="`tab_${index}`">
                <div class="stiker-wrapper block-custom-scrollbar">
                  <div class="stiker-item" v-for="stiker in group.stikers" :key="stiker.id">
                    <img @click="sendChatMessage(stiker.id)" :src="stiker.image" alt="">
                  </div>
                </div>
              </q-tab-panel>


            </q-tab-panels>
          </q-menu>
        </q-btn>
        <q-btn :disable="!$auth.user.is_vip" text-color="primary" :loading="is_loading" round icon="photo">
          <q-file :disable="!$auth.user.is_vip" style="position: absolute; width: 42px; opacity: 0;" v-model="file" />
        </q-btn>
      </div>

    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {

  data () {
    return {
      stikerMenuActive:false,
      stiker_tab:'tab_0',
      socket:null,
      messages:[],
      base_url:process.env.API,
      message:null,
      chatData:{},
      is_loading:false,
      stikers:[],
      file:null,
      currentChat:0,

    }
  },

  async beforeMount() {

    //this.currentChat > 0 ? this.openChat(this.currentChat) : this.$router.push({name:'user-profile-chat'})

    const chat_data = await this.$api.get(`/api/v1/chat/get_chat_by_users?opponent=${this.$route.params.nickname}`)
    console.log(chat_data.data)
    this.currentChat = chat_data.data.id
    await this.openChat(this.currentChat)
    const stikers_data = await this.$api.get(`/api/v1/chat/get_stikers`)

    this.stikers = stikers_data.data
  },
  updated() {
    this.$nextTick(() => this.scrollToEnd());
  },
  beforeUnmount() {
    console.log('beforeDestroy')
    try{
      this.socket.close()
    }catch (e) {
      console.log('not connected')
    }
  },
  methods:{
    async keyDown(e){
      if (e.keyCode===13) {
        console.log('13')
        if (this.message) {
          await this.sendChatMessage(null)
        }
      }
    },
    async sendChatMessage(stiker_id){//
      // if (this.newMessage){
      //   const rex = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/ug;
      //   const updated = this.newMessage.replace(rex, match => `<span class="chat-emoji">&#x${match.codePointAt(0).toString(16)};</span>`);
      // }


      //await this.$axios.post(`/api/v1/chat/add/${this.current_chat_id}`,{message:updated})
      this.stikerMenuActive = false
      this.is_loading = true
      let formData = new FormData()
      formData.set('message', JSON.stringify(this.message))
      formData.set('image',this.file)
      formData.set('message_lang',"ko")
      formData.set('stiker',stiker_id)//
      console.log(formData)
      await this.$api({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: `/api/v1/chat/add/${this.currentChat}`,
        data: formData
      }).then((response) => {
        console.log('chat message response',response)
        this.message = null
        this.is_loading = false
      })
        .catch(function (error) {
          // handle error
        })
        .then(function () {
          // always executed
        });


      //console.log(this.messages)
      // this.messages.push(
      //   {
      //     message: this.newMessage,
      //     user:{
      //       id:this.$auth.user.id,
      //       avatar:this.$auth.user.avatar,
      //     }
      //   }
      // )

      // this.chatImgPreview = null
      // this.chatImg = null
    },
    scrollToEnd: function () {
      let content = this.$refs.messagesContainer;
      content.scrollTop = content.scrollHeight
    },
    async openChat(chat_id){
      this.socket = new WebSocket(`${process.env.WS}/ws/chat/${chat_id}`)
      const opened_chat = await this.$api.get(`/api/v1/chat/get_chat?chat_id=${chat_id}`)
      console.log(opened_chat.data)
      console.log(this.$auth.user.id)
      if (opened_chat.data.starter.id !== this.$auth.user.id){
        this.chatData= opened_chat.data.starter
      } else {
        this.chatData= opened_chat.data.opponent
      }
      await this.$api.post(`/api/v1/chat/set_chat_read/${chat_id}`)
      this.socket.onmessage = (res) =>{
        console.log('message in chat',JSON.parse(res.data))
        let updated = null
        let data = JSON.parse(res.data)['message']
        console.log('DATA',data)
        if(data.chat === this.currentChat){
          if (data.message){
            const rex = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/ug;
            updated = data.message.replace(rex, match => `<span class="chat-emoji">&#x${match.codePointAt(0).toString(16)};</span>`);
            console.log(updated)
          }

          this.messages.push(
            {
              id:data.id,
              is_socket:true,
              message: updated ? updated : null,//data.message,
              message_translate: data.message_translate,//data.message,
              stiker: data.stiker ? data.stiker : null,//data.message,
              image: data.image ? process.env.API+data.image : null,//data.message,
              createdAt: Date.now(),
              user:{
                id:data.user.id,
                avatar: data.user.avatar ? process.env.API+data.user.avatar : '/no-avatar.svg',
              }
            }
          )
        }

      }
      const response = await this.$api.get(`/api/v1/chat/get_chat_messages?chat_id=${chat_id}`)
      console.log(response.data)
      this.messages = response.data
    },
  },
  // computed:{
  //   ...mapGetters('data',['currentChat'])
  // }
}
</script>
<style lang="sass" >


</style>
