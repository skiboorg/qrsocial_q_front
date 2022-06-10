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
			<div class="h1 q-mb-lg">立即注册</div>
     <q-form autocomplete="off" @submit="completeRegistration" class="q-gutter-sd q-mb-lg" >
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.email"
            label="电子邮件 *"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || '电子邮件',
              val => email_re.test(String(val)) || '电子邮件'
              ]"/><!--    email      -->
       <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.wechatid"
            label="微信ID *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || '微信ID']"
          />
       <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.fio"
            label="姓名 *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || '姓名']"
          />
         <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.nickname"
            label="昵称 *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || '昵称']"
          />
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            :type="isPwd ? 'password' : 'text'"
            v-model="userRegister.password1"
            label="密码 *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || '密码']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            :type="isPwd ? 'password' : 'text'"
            v-model="userRegister.password2"
            label="密码重复ь *"

            lazy-rules
            :rules="[val => val !== null && val !== '' || '密码', val => val===userRegister.password1 || '密码重复' ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        <div class="q-mb-lg">
           <p class="q-mb-lg text-caption text-grey-6">访问该网站是付费的！ 注册后，您需要选择合适的资费并支付费用，之后您将可以访问门户并能够与女孩进行交流和会面。</p>
          <q-checkbox dense v-model="agree" >
            <p class="no-margin text-caption text-grey-6">我同意： <span class="text-info">门户规则、公开报价、用户协议</span></p>
          </q-checkbox>
         </div>
      <div class="flex items-center justify-between q-mt-md">
         <q-btn  :loading="is_loading" label="创建一个帐户"  no-caps type="submit" rounded color="primary" class="q-px-xl q-py-sm text-bold"/>
       <p class="no-margin already">已经有账户？ <router-link :to="{name:'signin-page'}">进入站点</router-link> </p>
      </div>

        </q-form>

		</div>
	</div>
</div>
  </q-page>
</template>

<script>


export default {

  data () {
    return {
       email_re:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        is_loading:false,
        isPwd:true,
        agree:false,
      userRegister:{
        nickname:null,
        fio:null,
        email:null,
        wechatid:null,
        password1:null,
        password2:null,
      },

    }
  },
  methods:{
    async completeRegistration(){
      this.is_loading = true
      console.log('api.defaults',this.$api.baseURL)
      try{
        await this.$api.post('/auth/users/', {
          wechatid:this.userRegister.wechatid,
          email:this.userRegister.email,
          nickname:this.userRegister.nickname,
          password:this.userRegister.password2,
        })
        this.$q.notify({
          message: 'Аккаунт создан',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })
        this.is_loading=false
      }catch (e) {
        this.$q.notify({
          message: 'Проверьте введеные данные',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
           color:'red',
          icon: 'announcement'
        })
      }
      this.is_loading = false
    },
  }
}
</script>
 <style lang="sass">

 </style>
