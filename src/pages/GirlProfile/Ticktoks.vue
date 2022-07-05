<template>
  <div class="catalog catalogstream catalogtt backblock q-mt-lg">
			<div class="h1">女孩目录</div>

			<div class="grid">
        <TickTokCard v-for="(video,index) in videos" :key="video.id" :video="video" :index="index"/>
			</div>
		</div>

</template>

<script>

import TickTokCard from "components/cards/TickTokCard";
export default {
  components: {TickTokCard},
  data () {
    return {
      videoModal:false,
      videos:[],
      cur_video:0
    }
  },
  async beforeMount() {
    const response = await this.$api.get(`/api/v1/gallery/get_videos?nick=${this.$route.params.nickname}`)
    this.videos = response.data
  },
  methods:{
    openVideo(index){
      this.cur_video = index
      this.videoModal= true
    }
  }
}
</script>
 <style lang="sass">

 </style>
