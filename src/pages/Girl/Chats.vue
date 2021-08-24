<template>
  <div class="settings-block backblock">
    <!--			<div class="search-chat">按帖子搜索<img src="~assets/search.svg" alt="search"></div>-->
    <div class="chats-block">
      <div class="q-px-md text-dark">
       <p class="text-h6 q-mb-sm q-pt-md">Инструкции по чатам:</p>
         <p class="text-caption">
     - VIP пользователи помечены специальной *иконкой, им вы обязаны отвечать в любом случае в максимально ближайшее время<br>
- обычным пользователям отвечать не обязательно, но крайне желательно<br>
- вы можете прикреплять фото к любому сообщению, но рекомендуем это делать только если это VIP клиент или донатер!<br>
- запрещается брань, оскорбления, политика, вопросы про полицию или страны, общественные вопросы, национализм<br>
- рекомендуется: доброе человеческое общение, вопросы про работу и хобби, духовное состояния и желания, мечты и планы
         </p>
        <q-separator/>
      </div>

      <div v-for="chat in chats" :key="chat.id" >
        <div v-if="$auth.user.nickname === chat.starter.nickname" @click="openChat(chat.id,chat.starter.nickname)" class="chat cursor-pointer">
          <div class="chats-l">
            <q-avatar class="q-mr-sm">
              <img  :src="chat.opponent.avatar" alt="avatar">
            </q-avatar>
            <div class="chats-info">
              <div class="name">{{chat.opponent.fio}}</div>

            </div>
          </div>

        </div>
        <div v-else @click="openChat(chat.id,chat.starter.nickname)" class="chat cursor-pointer">
          <div class="chats-l">
            <q-avatar class="q-mr-sm">
              <img  :src="chat.starter.avatar" alt="avatar">
            </q-avatar>
            <div class="chats-info">
              <div class="name">{{chat.starter.fio}}</div>

            </div>
          </div>
          <div class="chats-r">

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {

  data () {
    return {
      chats:[],

    }
  },
  async mounted() {
    const user_chats = await this.$api.get(`/api/v1/chat/all`)
    this.chats=user_chats.data
  },
  methods:{
    ...mapActions('data',['setCurrentChat']),
    openChat(id,nickname){
      this.setCurrentChat(id)
       this.$router.push({name:'girl-chat',params:{nickname}})
    }
  }

}
</script>
<style lang="sass">

</style>
