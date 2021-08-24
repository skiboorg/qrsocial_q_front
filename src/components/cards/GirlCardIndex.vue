<template>
 <div  class=" cursor-pointer">
   <router-link :to="{name:'girl-profile-main',params:{nickname:user.nickname}}">
     <img style="border-radius: 15px;  object-fit: cover" class="image" :src="user.avatar" alt="avatar">
<!--					<div class="params">-->
<!--						<img src="~assets/henders.svg" alt="hender">-->
<!--						<div class="fire"><img src="~assets/fire.svg" alt="fire">51</div>-->
<!--						<div class="people"><img src="~assets/people.svg" alt="people">17</div>-->
<!--					</div>-->
					<div class="name text-dark">{{user.fio}}</div>
					<div class="name text-dark">@{{user.nickname}}</div>
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

</style>
