<template>
  <div class="wall-info backblock">
    <!--			<div class="search-chat">按帖子搜索<img src="~assets/search.svg" alt="search"></div>-->
    <div class="chats-block q-py-md">


      <div v-for="chat in chats" :key="chat.id" >

        <div v-if="$auth.user.nickname === chat.starter.nickname" @click="openChat(chat.id,chat.opponent.nickname)" class="chat cursor-pointer">
          <div class="chats-l">
            <q-avatar class="q-mr-sm ">
              <img  :src="chat.opponent.avatar" alt="avatar">
            </q-avatar>
            <div class="chats-info">
              <div class=" text-bold text-dark">{{chat.opponent.fio}}</div>
              <div class=" text-caption text-dark">@{{chat.opponent.nickname}}</div>
<!--              <div class="preview">你： 好吧，第三个？ 关于关于....</div>-->
            </div>
          </div>
          <div class="chats-r">
            <q-badge v-if="chat.opponent.is_online"  color="green-13">Online</q-badge>

          </div>
        </div>
        <div v-else @click="openChat(chat.id,chat.opponent.nickname)" class="chat cursor-pointer">
          <div class="chats-l">
            <q-avatar class="q-mr-sm">
              <img  :src="chat.starter.avatar" alt="avatar">
            </q-avatar>
            <div class="chats-info">
              <div class="name">{{chat.starter.fio}}</div>
<!--              <div class="preview">你： 好吧，第三个？ 关于关于....</div>-->
            </div>
          </div>
          <div class="chats-r">
            <div class="status"><div>28.05</div></div>
<!--            <div class="chats-num">7235</div>-->
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
      this.$router.push({name:'user-profile-chat',params:{nickname}})
    }
  }

}
</script>
<style lang="sass">

</style>
