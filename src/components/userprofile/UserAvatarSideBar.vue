<template>
 <div class="wall-avatar">
			<div class="avatar-block backblock">
        <div class="user-avatar-cover" style="background: url(http://placehold.it/300)">
           <q-avatar size="185px" >
              	<img  :src="$auth.user.avatar" alt="avatar">
            </q-avatar>
        </div>


				<div class="edit cursor-pointer " @click="$router.push({name:'user-profile-settings'})">我的设置</div>
				<div class="edit cursor-pointer text-primary" @click="logout">注销</div>
				<div v-if="!$auth.user.is_vip" class="key cursor-pointer" @click="$router.push({name:'faq-guidevip'})"><img src="~assets/key.svg" alt="key">排行榜 VIP</div>
			</div>
			<div v-if="$auth.user.own_friend_list[0].friend_list.length > 0" class="favorite-block backblock">
				<div class="favorite">收藏夹</div>
				<div class="favorite-grid">
          <div
            class="cursor-pointer"
            @click="$router.push({name:'girl-profile-main',params:{nickname:friend.nickname}})"
            v-for="(friend,index) in $auth.user.own_friend_list[0].friend_list"
                    :key="friend.id">
            <div v-if="index <= 2" class="flex items-center">
              <q-avatar  class="q-mr-sm">
              	<img  :src="friend.avatar" alt="avatar">
              </q-avatar>
              <div class="">
                <p class="no-margin text-caption text-bold text-dark">{{friend.fio}}</p>
              <p class="no-margin text-caption  text-dark">@{{friend.nickname}}</p>
              </div>

            </div>
          </div>


				</div>
				<div class="showall cursor-pointer" @click="$router.push({name:'user-profile-friends'})">显示全部</div>
			</div>
		</div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
export default {

  data () {
    return {

    }
  },
  methods:{
    ... mapActions('auth',['logoutUser']),
    logout(){
      this.logoutUser()
      this.$router.push('/')
    }
  }


}
</script>
<style lang="sass">
.avatar-block
  overflow: hidden
.user-avatar-cover
  margin: -28px
  background-size: cover !important
  background-repeat: no-repeat !important

  display: flex
  align-items: center
  justify-content: center
  padding: 28px
  margin-bottom: 20px
</style>
