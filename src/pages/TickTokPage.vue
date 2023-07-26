<template>
<div class="catalog catalogstream catalogtt backblock">
  <div class="top">
    <img class="fire" src="~assets/tiktok.svg" alt="tv">
    <div class="text">Shorts</div>
  </div>
			<div class="grid">
				<TickTokCard v-for="(video,index) in videos" :key="video.id" :video="video" :index="index"/>

			</div>
		</div>
</template>

<script>


import TickTokCard from "components/cards/TickTokCard";
export default {
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    if (!store.state.auth.loggedIn ) {
        redirect({ path: '/signin' })
       }
    // if (!store.state.auth.user.is_verified) {
    //     redirect({ path: '/' })
    //    }
  },
  components: {TickTokCard},
  data () {
    return {
      videos:[]
    }
  },
  async  beforeMount() {
    const response = await this.$api.get(`/api/v1/gallery/get_videos?type=all`)
    this.videos = response.data
  }
}
</script>
 <style lang="sass">

 </style>
