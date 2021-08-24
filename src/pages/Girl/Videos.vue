<template>
   <div class="settings-block backblock q-pa-md text-dark">
     <div class="q-px-md text-dark">
          <p class="text-h6 text-dark q-mb-sm q-pt-md">Инструкции по видео:</p>
         <p class="text-caption text-dark">
- добавлять только короткие видео в формате TikTok (не более 30 секунд)<br>
- запрещается обнаженка, неприличные жесты, плохие слова и брань<br>
- самые интересные видео - публикуйте для VIP пользователей<br>
- желательно добавлять не менее 4-5 видео в неделю для поддержания активности<br>
- превью видео должно соответствовать содержанию! лучше всего использовать скриншот видео
         </p>
        <q-separator/>
    </div>
      <div class="video-grid q-mb-lg">
        <div  class="video-item " v-for="(video,index) in videos" :key="index">
          <video controls :src="video.file" type="video/mp4"></video>
          <p class="q-mb-none text-caption"><span class="text-bold">Дата</span> : {{new Date(video.created_at).toLocaleString()}}</p>
          <p class="q-mb-none text-caption"><span class="text-bold">Название</span> : {{video.title}}</p>
          <p class="q-mb-none text-caption"><span class="text-bold">Просмотров</span> : {{video.views}}</p>
          <p class="q-mb-none text-caption"><span class="text-bold">Для VIP?</span> : {{video.is_vip ? 'Да' : 'Нет'}}</p>
          <q-btn size="sm" color="negative" text-color="white" label="Удалить"/>
        </div>
      </div>
     <p class="text-h6">Добавить видео-файл</p>
     <div class="">
       <p>Обложка</p>
        <q-avatar style="border: 1px dashed #cecece;" square  class="relative-position" size="200px">
          <img style="max-width: 95%;height: 95%;object-fit: cover" ref="imgPr" src="http://placehold.it/300" >
          <label class="absolute-bottom-right cursor-pointer" for="album_cover_img">
            <q-icon size="lg" color="white" class="bg-primary" name="add"></q-icon>
            <input id="album_cover_img" ref="album_cover_img" @change="avatarChange($event)" style="display: none" type="file">
          </label>
        </q-avatar>
      <q-file
        style="max-width: 300px"
        v-model="videoData.file"
        filled
        label="Выберите файл"
        accept=".mp4"
      />
        <q-checkbox v-model="videoData.is_vip" label="Приватный (только для VIP)" />
          <q-input class="q-mb-md" filled v-model="videoData.title" label="Название" />
       <q-btn label="Соханить" color="positive" @click="addVideo"/>
     </div>
   </div>
</template>

<script>


export default {

  data () {
    return {
      videos:[],
      videoData:{
        file:null,
        title:null,
        is_vip:false,
        image:null
      }
    }
  },
   async beforeMount() {
    await this.getAlbums()
  },
  methods:{
    async addVideo(){

      // if (!this.newAlbum.title || !this.newAlbum.image || !this.files ){
      //   this.$q.notify({
      //     message: 'Название, обложка и как минимум 1 изображение обязательны',
      //     position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
      //     color:'negative',
      //     icon: 'announcement'
      //   })
      //   return
      // }
      let formData = new FormData()
      formData.set('data', JSON.stringify(this.videoData))
      //formData.set('description', JSON.stringify(this.newStreamData.description))
      formData.set('image',this.videoData.image)
      formData.set('file',this.videoData.file)

      await this.$api({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: '/api/v1/gallery/add_video',
        data: formData
      }).then((response) => {

        this.$q.notify({
          message: 'Видео файл добавлен',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })
        this.videoData.title = null

        this.videoData.is_vip = false
        this.videoData.image = null
        this.videoData.file = null
        this.$refs['imgPr'].src = 'http://placehold.it/300'
        this.getAlbums()
      })
        .catch(function (error) {
          // handle error
        })
        .then(function () {
          // always executed
        });
    },
    async getAlbums(){
       const response = await this.$api.get(`/api/v1/gallery/get_videos_by_user_nickname?nickname=${this.$auth.user.nickname}`)
      this.videos = response.data
    },
    onRejected(){
    console.log('onRejected')
  },
  avatarChange(evt){
      console.log(this.$refs['album_cover_img'])
      this.videoData.image = evt.target.files[0]
      this.$refs['imgPr'].src = URL.createObjectURL(evt.target.files[0])

    },
  },

}
</script>
<style lang="sass" scoped>
.video
  &-grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 10px
  &-item
    position: relative
    video
      width: 100%

 </style>
