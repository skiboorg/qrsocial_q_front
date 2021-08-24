<template>

<div class="settings-block backblock q-pa-lg text-dark">

  <q-card class="q-mb-md">
    <q-card-section>
      <p class="text-h6">Опубликованные посты</p>
      <q-list  >
      <q-expansion-item
        expand-separator
        group="somegroup"
        v-for="post in posts"
        :key="post.id"
        :class="[post.is_vip ? 'bg-yellow-1' : '']"
        :label="`Дата публикации ${new Date(post.created_at).toLocaleString()}`"
        :caption="`Комментариев: ${post.comments_count} | Лайков: ${post.likes.length}`">
        <q-card>
          <q-card-section>
            <p class="text-bold">Обложка:</p>
            <img class="q-mb-md" :src="post.image">

            <p class="text-bold">Содержание:</p>
            <div class="q-mb-md" v-html="post.text"></div>

            <p class="text-bold">Комментарии:</p>
            <div class="user-profile-post--preview" v-for="(comment,index) in post.comments" :key="comment.id">
              <div class="flex items-center justify-start q-mb-sm">
                <p class="q-mb-none q-mr-md">{{index+1}}</p>
                <q-avatar class="q-mr-md">
                   <img :src="comment.owner.avatar" alt="">
                </q-avatar>

              <p class="q-mb-none q-mr-md">{{comment.owner.fio}}</p>
              <p class="q-mb-none">{{comment.owner.nickname}}</p>
              </div>
              <p class="q-mb-none">{{comment.text}}</p>
              <q-separator class="q-mb-sm"/>
            </div>
            <q-btn @click="deletePost(post.id)" label="Удалить пост" no-caps color="negative"/>

          </q-card-section>
        </q-card>
      </q-expansion-item>


    </q-list>
    </q-card-section>
  </q-card>
  <q-card>
    <q-card-section>
      <p class="text-h6">Добавить пост</p>
      <p>Обложка</p>
      <q-avatar style="border: 1px dashed #cecece;" square  class="relative-position" size="200px">
            <img style="max-width: 95%;height: 95%;object-fit: cover" ref="imgPr" src="http://placehold.it/300" >
            <label class="absolute-bottom-right cursor-pointer" for="post_img">
          <q-icon size="lg" color="white" class="bg-primary" name="add"></q-icon>
            <input id="post_img" ref="post_img" @change="avatarChange($event)" style="display: none" type="file">
          </label>
          </q-avatar>
       <q-checkbox v-model="newPost.is_vip" label="Приватный (только для VIP)" />
      <p class="text-h6 q-mt-md full-width">Содержание поста</p>
            <div style="overflow-y: auto" class="q-mb-md">
              <q-editor
                v-model="newPost.text"

                :dense="$q.screen.lt.md"
                class="q-mb-md"
                :toolbar="[

        ['bold', 'italic', 'strike','hr', 'underline', 'subscript', 'superscript'],


        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],


      ]"
                :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
              />
            </div>
      <q-btn @click="addNewPost" label="Добавить пост" no-caps color="positive"/>

    </q-card-section>
  </q-card>
</div>
</template>

<script>


export default {

  data () {
    return {
      posts:[],
      imagePreview:null,
      newPost:{
          text:'',
          image:'',
          is_vip:false
        },

    }
  },
  async beforeMount() {
    await this.getPosts()
  },
  methods: {

      async deletePost(id){
        await this.$api.post(`/api/v1/post/delete_post`,{id:id})
        await this.getPosts()
      },
      async getPosts(){
        const response = await this.$api.get(`/api/v1/post/get_posts_by_user_nickname?nickname=${this.$auth.user.nickname}`)
        this.posts = response.data
      },
      async addNewPost(){
        let formData = new FormData()
        formData.set('text', JSON.stringify(this.newPost.text))
        formData.set('image',this.newPost.image)
        formData.set('is_vip',this.newPost.is_vip)
        await this.$api({
          method: 'post',
          headers:{
            'content-type': 'multipart/form-data'
          },
          url: '/api/v1/post/add_post',
          data: formData
        }).then((response) => {
          this.$q.notify({
          message: 'Пост создан',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })

          this.getPosts()
          this.newPost.image = ''
          this.newPost.text = ''
          this.newPost.is_vip = false
          this.$refs['imgPr'].src = 'http://placehold.it/300'
        })
          .catch(function (error) {
            // handle error
          })
          .then(function () {
            // always executed
          });
      },
      avatarChange(evt){
        this.newPost.image = evt.target.files[0]
        this.$refs['imgPr'].src = URL.createObjectURL(evt.target.files[0])


      },
    }
}
</script>
 <style lang="sass">

 </style>
