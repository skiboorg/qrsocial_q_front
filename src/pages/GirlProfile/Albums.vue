<template>
  <div class="album backblock">
				<div v-if="!galleryShow" class="h1">简要信息 113</div>

				<div v-if="!galleryShow" class="photoblock">

					<div class="block "
               v-for="(gallery,index) in galleries"
               :class="[gallery.is_vip && !$auth.user.is_vip ? 'blur' : 'cursor-pointer']"
               @click="showGallery(gallery.is_vip, gallery.images,gallery.title)"
               :key="gallery.id">
						<div class="photo">
							<img class="image" :src="gallery.image" alt="photo">
							<div class="blur">
								<div class="text">通兴VIP</div>
								<div class="btn cursor-pointer">补充</div>
								<div class="num">{{gallery.images.length}}</div>
							</div>
						</div>
						<div class="text1">{{gallery.title}}</div>
						<div class="text2">{{gallery.subtitle}}</div>
					</div>

				</div>
    <div v-else class="">
      <div @click="galleryShow=false" class="q-mb-lg text-bold text-dark cursor-pointer flex items-center"><q-icon name="arrow_back_ios" size="sm"/> 后退</div>
      <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      v-model:fullscreen="fullscreen"
      infinite
    >
      <q-carousel-slide
        v-for="(image,index) in imgList"
        :key="index"
        :name="index"
        :img-src="image" />


        <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
    </div>
			</div>
</template>

<script>


export default {

  data () {
    return {
      galleries:[],
      slide:0,
      fullscreen:false,
      galleryTitle: null,
        imgList: [],
        galleryShow: false,
    }
  },
  async beforeMount() {
    const response = await this.$api.get(`/api/v1/gallery/get_galleries_by_user_nickname?nickname=${this.$route.params.nickname}`)
    this.galleries = response.data
  },
   methods: {
       showGallery(is_vip,images,title){
        if (is_vip && !this.$auth.user.is_vip){
          return
        }
        //показать все изображения в галерее из переданного массива images
        this.imgList =[]
        this.galleryTitle = title
        for (let i of images){
          this.imgList.push(i.image)
        }
        this.galleryShow = true
      }
    },

}
</script>
 <style lang="sass">

 </style>
