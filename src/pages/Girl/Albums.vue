<template>
  <div class="settings-block backblock q-pa-lg text-dark">
    <q-card class="q-mb-md">
      <q-card-section>
        <p class="text-h6 q-mb-sm">Инструкции по альбомам:</p>
         <p class="text-caption">
           - добавляете альбомы, для каждого альбома - выбираете красивое фото на превью<br>
- далее добавляете фотографии в альбом<br>
- пометка VIP означает, что только VIP клиенты смогут его просматривать<br>
- для VIP клиентов лучше всего ставить самые горячие и интересные фото на превью<br>
- запрещается обнаженка, неприличные жесты, фотографии с эротическим подтекстом
         </p>
        <q-separator/>
        <p class="text-h6">Опубликованные альбомы</p>
       <q-list  >
          <q-expansion-item
            expand-separator
            group="somegroup"
            v-for="album in albums"
            :key="album.id"
            :class="[album.is_vip ? 'bg-yellow-1' : '']"
            :label="album.title"
            :caption="album.subtitle">
            <q-card>
              <q-card-section>
                <p class="text-h6">Обложка</p>
                 <img class="q-mb-md" :src="album.image">
                <div class="flex">
                  <q-avatar style="border: 1px dashed #cecece;" square  class="relative-position" size="200px">
                    <img style="max-width: 95%;height: 95%;object-fit: cover" ref="imgPr" src="http://placehold.it/300" >
                    <label class="absolute-bottom-right cursor-pointer" >
                      <q-icon size="lg" color="white" class="bg-primary" name="add"></q-icon>
                      <input  ref="album_img" @change="handleUploadNewAlbumImage(album.id)" style="display: none" type="file">
                    </label>
                  </q-avatar>
                  <div class="flex" v-for="image in album.images" :key="image.id">

                    <q-avatar size="150px" class="relative-position">
                      <q-btn round color="primary" class="absolute-top-right" icon="delete" v-if="album.id" @click="deleteAlbumImage(album.id,image.id)"/>
                      <img  :src="image.image" >
                    </q-avatar>

                  </div>
                </div>

              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section>
        <p class="text-h6">Добавить альбом</p>
        <p>Обложка</p>
        <q-avatar style="border: 1px dashed #cecece;" square  class="relative-position" size="200px">
          <img style="max-width: 95%;height: 95%;object-fit: cover" ref="imgPr" src="http://placehold.it/300" >
          <label class="absolute-bottom-right cursor-pointer" for="album_cover_img">
            <q-icon size="lg" color="white" class="bg-primary" name="add"></q-icon>
            <input id="album_cover_img" ref="album_cover_img" @change="avatarChange($event)" style="display: none" type="file">
          </label>
        </q-avatar>

        <div class="q-mb-md">
          <q-checkbox v-model="newAlbum.is_vip" label="Приватный (только для VIP)" />
          <q-input class="q-mb-md" filled v-model="newAlbum.title" label="Название альбома" />
          <q-input class="q-mb-md" filled v-model="newAlbum.subtitle" label="Краткое описание" />
          <q-uploader
            label="Изображения"
            ref="album_images"
            accept=".jpg,.png, image/*"
            multiple
            batch
            hide-upload-btn
            :factory="uploadFiles"
            class="full-width q-mb-md"
            @added="checkImages"
            @removed="checkImages"
          />
        </div>


        <q-btn @click="addAlbum" label="Добавить " no-caps color="positive"/>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>


export default {

  data () {
    return {
      newAlbum:{
        title:null,
        subtitle:null,
        is_vip:false,
        image:null
      },
      albums:[],
      is_images_selected:false,
      files:null

    }
  },

  async beforeMount() {
    await this.getAlbums()
  },

  methods: {
    uploadFiles(files){
    this.files = files
       console.log(files)

  },
    checkImages(file){
      console.log(this.files)
      this.files = file
      console.log( this.$refs['album_images'])

      //this.$refs.images.files.length>0 ? this.is_images_selected=true : this.is_images_selected=false
    },

    async handleUploadNewAlbumImage(album_id){
      console.log(album_id)
      let images = this.albums.find(x => x.id === album_id).images
      let file = this.$refs['album_img'].files[0]

      let formData = new FormData()
      formData.set('gallery_id',album_id)
      formData.set('image',file)
      let response = await this.$api({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: '/api/v1/gallery/add_img_in_gallery_by_id',
        data: formData
      })
      images.push({id:response.data['new_id'],image:URL.createObjectURL(file)})
      this.$q.notify({
        message: 'Операция успешно выполнена',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        icon: 'announcement'
      })

    },
    async deleteAlbumImage(album_id,image_id){
      let item_to_delete = this.albums.find(x => x.id === album_id).images.findIndex(x => x.id === image_id)
      this.albums.find(x => x.id === album_id).images.splice(item_to_delete,1)
      await this.$api.delete(`/api/v1/gallery/delete_image_by_id/${image_id}`)

      this.$q.notify({
        message: 'Операция успешно выполнена',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        icon: 'announcement'
      })

    },
    async updateAlbum(album,action){
      await this.$api.post(`/api/v1/gallery/update_gallery`,{album:album,action:action})
      this.$q.notify({
        message: 'Операция успешно выполнена',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        icon: 'announcement'
      })
      await  this.getAlbums()
    },
    async getAlbums(){
      const response = await this.$api.get(`/api/v1/gallery/get_galleries_by_user_nickname?nickname=${this.$auth.user.nickname}`)
      this.albums = response.data
    },
    async addAlbum(){

      if (!this.newAlbum.title || !this.newAlbum.image || !this.files ){
        this.$q.notify({
          message: 'Название, обложка и как минимум 1 изображение обязательны',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'negative',
          icon: 'announcement'
        })
        return
      }
      let formData = new FormData()
      formData.set('data', JSON.stringify(this.newAlbum))
      //formData.set('description', JSON.stringify(this.newStreamData.description))
      formData.set('image',this.newAlbum.image)
      for(let i of this.files){
        formData.append("images", i)
      }

      await this.$api({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: '/api/v1/gallery/add_gallery',
        data: formData
      }).then((response) => {

        this.$q.notify({
          message: 'Альбом добавлен',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })
        this.newAlbum.title = null
        this.newAlbum.subtitle = null
        this.newAlbum.is_vip = false
        this.newAlbum.image = null
        this.$refs.images.files = null
        this.getAlbums()
      })
        .catch(function (error) {
          // handle error
        })
        .then(function () {
          // always executed
        });
    },
    avatarChange(evt){
      console.log(this.$refs['album_cover_img'])
      this.newAlbum.image = evt.target.files[0]
      this.$refs['album_cover_img'].src = URL.createObjectURL(evt.target.files[0])

    },
    handleAlbumImageRemove(file,i) {
      console.log(file.uid);
      console.log(this.$refs['imgUpload'].uploadFiles)
      let x=0
      for (let i of this.$refs['imgUpload'].uploadFiles){
        if (i.uid === file.uid){
          console.log(x)
          this.$refs['imgUpload'].uploadFiles.splice(x,1)
        }
        x+=1
      }
    },
    handleAlbumImagePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  }
}
</script>
<style lang="sass">

</style>
