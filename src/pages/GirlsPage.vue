<template>
<div class="catalog catalogstream backblock">
  <div class="top">
    <img class="fire" src="~assets/fire.svg" alt="fire">
    <div class="text">Our girls</div>
  </div>
			<div class="grid">
        <GirlCard v-for="girl in girls" :key="girl.id" :girl="girl"/>
			</div>
		</div>
</template>

<script>


import GirlCard from "components/cards/GirlCard";
export default {
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    if (!store.state.auth.loggedIn ) {
        redirect({ path: '/signin' })
       }
    // if (!store.state.auth.user.is_verified) {
    //     redirect({ path: '/' })
    //    }
  },
  components: {GirlCard},
  data () {
    return {
      girls:[]
    }
  },
  async  beforeMount() {
    const response = await this.$api.get(`/api/v1/user/get_streamers?at_home=false`)
    this.girls = response.data
  }
}
</script>
 <style lang="sass">

 </style>
