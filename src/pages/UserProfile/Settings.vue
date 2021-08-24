<template>
  <div class="settings backblock">
    <div class="h1">我的设置</div>
    <div class="infoblock">
      <div class="settings-l">
        <div class="progress">
          <q-avatar class="user-avatar"  size="120px">
            <img :src="$auth.user.avatar">
          </q-avatar>
          <div class="title">
            <div class="h2 q-mb-md">改变我的头像</div>
            <label class="btn cursor-pointer user-avatar__btn shadow-2" for="avatar_img">
              选择照片
              <input id="avatar_img" ref="avatar_img" @change="avatarChange($event)" style="display: none" type="file">
            </label>
          </div>
        </div>
        <div class="category">
          <div class="h2">设置类型</div>
          <div class="variant cursor-pointer personal "
               v-for="(tab,index) in tabs"
               :key="index"
               @click="selectedTab=index"
               :class="{'active':selectedTab===index}">
            <div class="h3 ">{{tab.name}}</div>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-4.63341e-07 1.4L4.6 6L-6.11959e-08 10.6L1.4 12L7.4 6L1.4 -6.11959e-08L-4.63341e-07 1.4Z" fill="#8994A2"></path>
            </svg>
          </div>

        </div>
      </div>

      <div  class="settings-r">
        <div v-if="selectedTab===0" class="personal" >
          <div class="h2">{{tabs[selectedTab].name}}</div>
          <q-input filled bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.fio" label="姓名" />

          <q-input filled bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.nickname" label="昵称" />
          <q-input filled bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.birthday" label="出生日期" />
          <q-input filled bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.city" label="居住地" />



        </div>
        <div v-if="selectedTab===1 || $q.screen.lt.md" class="about " >
          <div class="h2">{{tabs[selectedTab].name}}</div>

          <q-input filled bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.education" label="学习和教育" />
          <q-input filled bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.work_place" label="专业" />
          <q-input filled type="textarea" bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.about" label="关于我" />


        </div>
        <div v-if="selectedTab===2 || $q.screen.lt.md" class="hobbies ">

          <div class="h2">{{tabs[selectedTab].name}}</div>


          <q-select
            filled
            bg-color="white"
            class="q-mb-sm"
            v-model="userData.tags"
            :options="tags"
            label="兴趣标签"
            multiple
            emit-value
            map-options
          >
            <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
              <q-item v-bind="itemProps" class="text-dark">
                <q-item-section>
                  <q-item-label v-html="opt.label" ></q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                </q-item-section>
              </q-item>
            </template>
          </q-select>



          <q-input filled type="textarea" bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.interests" label="我的爱好" />
          <q-input filled type="textarea" bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.interests_additional" label="最喜欢的艺术" />

        </div>
        <div v-if="selectedTab===3 || $q.screen.lt.md" class="security ">
          <div class="h2">{{tabs[selectedTab].name}}</div>
          <q-input filled bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.password1" label="密码" />
          <q-input filled bg-color="white" class="q-mb-sm rounded-borders" v-model="userData.password2" label="重复" />

        </div>
        <p class="q-pt-lg q-px-md text-body2 text-grey-6">
          这些设置对于使用我们的平台不是必需的，但它们可以帮助女孩更多地了解您并对您感兴趣！
        </p>
        <div class="text-center ">
          <q-btn  :loading="is_loading" @click="updateUser" label="保存更改"  no-caps type="submit" rounded color="primary" class="q-px-xl q-py-sm text-bold"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


import {mapActions} from "vuex";

export default {

  data () {
    return {
      is_loading:false,
      tabs:[
        {name:'个人设置'},
        {name:'关于我'},
        {name:'兴趣爱好'},
        {name:'安全'},
      ],
      tags:[],
      selectedTab:0,
      avatar:null,
      userData:{
        fio:this.$auth.user.fio,
        nickname:this.$auth.user.nickname,
        birthday:this.$auth.user.birthday,
        years:this.$auth.user.years,
        password1:null,
        password2:null,
        interests:this.$auth.user.interests,
        interests_additional:this.$auth.user.interests_additional,
        work_place:this.$auth.user.work_place,
        education:this.$auth.user.education,
        city:this.$auth.user.city,
        about:this.$auth.user.about,
        tags:this.$auth.user.tags,
      },

    }
  },
  async mounted(){
    const user_tags = await this.$api.get(`/api/v1/user/get_user_tags`)
    this.tags = user_tags.data
  },
  methods:{
    ... mapActions('auth',['getUser']),
    async avatarChange(evt){
      this.avatar = evt.target.files[0]
      await this.updateUser()
    },
    async updateUser(){
      this.is_loading = true
      // if (this.userData.password1 !== this.userData.password2){
      //   this.$notify({
      //     title: 'Ошибка',
      //     message: 'Пароли не совпадают',
      //     type: 'danger'
      //   });
      //   return
      // }
      let formData = new FormData()
      formData.set('userData', JSON.stringify(this.userData))
      if (this.avatar){
        formData.set('avatar',this.avatar)
      }

      try {
        await this.$api({
          method: 'post',
          headers:{
            'content-type': 'multipart/form-data'
          },
          url: '/api/v1/user/update/',
          data: formData
        })
        await this.getUser()
      }catch (e) {
        console.log(e)
      }

      //this.notify('设置更新！','应用了新设置','success')

      this.is_loading = false
    },
  }
}
</script>
<style lang="sass" scoped>
.user-avatar
  position: relative

  border: 7px solid $info
  box-sizing: content-box
  &__btn
    display: inline-block
    background: $grey-6
    padding: 5px 15px
    border-radius: 16px
</style>
