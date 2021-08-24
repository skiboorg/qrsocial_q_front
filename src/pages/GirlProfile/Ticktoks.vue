<template>
  <div class="catalog catalogstream catalogtt backblock q-mt-lg">
			<div class="h1">女孩目录</div>

			<div class="grid">

				<div class="block blur cursor-pointer" @click="openVideo(index)" v-for="(video,index) in videos" :key="index">

					<div class="photo">
            <div class="text-dark text-caption text-dark">{{ new Date (video.created_at).toLocaleDateString()}}</div>
						<img class="catalogtt" :src="video.image" alt="photo">
<!--						<div class="date">-->
<!--							<img src="~assets/play.svg" alt="play">-->
<!--							<div class="num">142</div>-->
<!--						</div>-->
						<div class="blur">
							<div class="text1">通兴VIP</div>
							<div class="btn">补充</div>
						</div>
					</div>
					<div class="info">
						<div class="title">
							<div class="text">{{video.title}}</div>


						</div>

					</div>
				</div>

			</div>
		</div>
   <q-dialog v-model="videoModal">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-dark">
          <div class="text-h6">{{videos[cur_video].title}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
        <video  controls>
              <source :src="videos[cur_video].file" type="video/mp4">

              Your browser does not support HTML video.
            </video>
        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script>


export default {

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
