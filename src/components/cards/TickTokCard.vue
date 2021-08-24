<template>
<div class="block blur" @click="openVideo(index)">

					<div class="text-caption text-dark">
            {{ new Date (video.created_at).toLocaleTimeString().split(':')[0]}}:{{ new Date (video.created_at).toLocaleTimeString().split(':')[1]}},
            {{ new Date (video.created_at).toLocaleDateString()}}
          </div>
					<div class="photo">
						<img style="    width: 180px;    height: 240px;    object-fit: contain; " :src="video.image" alt="photo">
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
							<div class="text-dark text-h6">{{video.title}}</div>
							<div class="name">{{video.owner.fio}}</div>
							<div class="name">@{{video.owner.nickname}}</div>
<!--							<div class="params">-->
<!--								<img src="~assets/henders.svg" alt="hender">-->
<!--								<div class="fire"><img src="~assets/fire.svg" alt="fire">51</div>-->
<!--								<div class="people"><img src="~assets/people.svg" alt="people">17</div>-->
<!--							</div>-->
						</div>
<!--						<div class="data">{{ new Date (video.created_at).toLocaleDateString()}}</div>-->
					</div>
				</div>
   <q-dialog v-model="videoModal">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-dark">
          <div class="text-h6">{{video.title}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
        <video  controls>
              <source :src="video.file" type="video/mp4">

              Your browser does not support HTML video.
            </video>
        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script>


export default {
  props:['video','index'],
  data () {
    return {
      videoModal:false,
      videos:[],
      cur_video:0
    }
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
