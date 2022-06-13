<template>
 <div  class=" cursor-pointer username-wrapper">
   <router-link :to="{name:'girl-profile-main',params:{nickname:user.nickname}}">
     <img style="border-radius: 15px;  object-fit: cover" class="username-image" :src="user.avatar" alt="avatar">
        <div class="username-stats">
          <img src="~assets/ach.svg" alt="">
          <div class="username-stats__inner">
            <img src="~assets/g_ic.svg" alt="">
            <span>11</span>
          </div>
        </div>

					<div class="name text-dark text-bold">{{user.fio}}</div>
					<div class="username">@{{user.nickname}}</div>
   </router-link>

				</div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
  props:['user'],

  data () {
    return {

    }
  },
  methods:{
    ...mapActions('data',['getGirlInfo']),
    async openGirlProfile(nickname){
      console.log(nickname)
      await this.getGirlInfo(nickname)
      await this.$router.push({name:'girl-profile-main',params:{nickname}})

    }
  }
}
</script>
<style lang="sass">
.username

  background: #FFF4F3
  border-radius: 30px
  display: inline-block
  padding: 4px 8px
  color: #D19F9B
  font-weight: 300
  &-wrapper
    position: relative
  &-image
    border-radius: 20px
    width: 160px
    height: 200px
    object-fit: contain
  &-stats
    position: absolute
    top: 10px
    left: 10px
    display: flex
    align-items: center
    justify-content: center
    img
      margin-right: 5px
    &__inner
      display: flex
      align-items: center
      justify-content: center
      background: #FFFFFF
      border-radius: 30px
      padding: 2px 8px
      span
        color: #F64953
        font-weight: 700


</style>
