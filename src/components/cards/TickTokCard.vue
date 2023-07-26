<template>
<div class="block blur" @click="openVideo(index)">


					<div class="photo">
						<img class="image" :src="video.image" alt="photo">
<!--						<div class="date">-->
<!--							<img src="~assets/play.svg" alt="play">-->
<!--							<div class="num">142</div>-->
<!--						</div>-->
<!--						<div class="blur">-->
<!--							<div class="text1">Buy VIP</div>-->
<!--							<div class="btn">Replenish</div>-->
<!--						</div>-->
					</div>

              <div class="text ">{{video.title}}</div>
							<div class="info ">{{new Date(video.created_at).toLocaleString()}}</div>

<div class="profile">
                <q-avatar size="48px" class="q-mr-sm">
                  <img  :src="video.owner.avatar" alt="avatar">
                </q-avatar>

                <div class="">
                  	<div class="name text-dark text-bold ">{{video.owner.fio}}</div>
					        <div class="username">@{{video.owner.nickname}}</div>

                </div>


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
 <style lang="sass" scoped>
.image
  border-radius: 20px
  width: 100%
  height: 340px
  object-fit: cover
  display: block
  margin-bottom: 15px
.name
  font-size: 14px
.username
  font-size: 12px
  background: #FFF4F3
  border-radius: 30px
  display: inline-block
  padding: 4px 8px
  color: #D19F9B
  font-weight: 300
.profile
  display: flex
  align-items: center
  justify-content: flex-start
.text
  font-size: 14px
  color: #3E4042
.info
  font-size: 12px
  color: #8B919C
  margin-bottom: 10px
 </style>
