<template>
  <q-page >
<div class="window">
	<div class="left">
		<img class="logo q-mb-xl" src="~assets/lw.png" alt="logo">
		<div class="text-h4 q-mb-md">见面、聊天、结交朋友、<br>观看直播，玩得开心！</div>
		<div class="text-h3 text-bold">没有语言障碍！</div>
	</div>
	<div class="right">
		<div class="data">
			<div class="h1 q-mb-lg">进入站点</div>
			 <q-form @submit="userLoginAction" class="q-gutter-sd q-mb-lg">
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userLogin.wechatid"
            label="微信ID *"

            lazy-rules
            :rules="[ val => val && val.length > 0 || '微信ID']"
          />
          <q-input
            :dense="!$q.screen.gt.md"
            filled
            :type="isPwd ? 'password' : 'text'"
            v-model="userLogin.password"
            label="密码 *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || '密码' ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
         <div class="">
           <p class="no-margin text-caption text-grey-6">忘记密码？ 给我们发电子邮件： <span class="text-info">SUPPORT@QRSPICY.CN</span></p>
         </div>
          <div class="flex items-center justify-between q-mt-md">
         <q-btn  :loading="is_loading" label="进来"  no-caps type="submit" rounded color="primary" class="q-px-xl q-py-sm text-bold"/>
       <p class="no-margin already">没有账户？ <router-link :to="{name:'signup-page'}">立即注册</router-link> </p>
      </div>
        </q-form>
		</div>
	</div>
</div>
  </q-page>
</template>

<script>

import { mapActions } from 'vuex'
export default {

  data () {
    return {
      is_loading:false,
      isPwd:true,
      userLogin:{
        wechatid:null,
        password:null,
      },

    }
  },
  methods:{
    ... mapActions('auth',['loginUser']),
    userLoginAction() {
      this.loginUser(this.userLogin)

    },
  }
}
</script>
 <style lang="sass">

 </style>
