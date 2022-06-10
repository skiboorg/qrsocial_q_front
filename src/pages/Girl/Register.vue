<template>
  <q-page >
    <div class="window">
	<div class="left">
		<img class="logo q-mb-xl" src="~assets/lw.png" alt="logo">
				<div class="text-h4 q-mb-md">Meet, chat, make friends,<br>
watch live streams and have fun!
</div>
		<div class="text-h3 text-bold">No language barrier!</div>
	</div>
	<div class="right">
		<div class="data">
			<div class="h1 q-mb-lg">Register</div>
     <q-form autocomplete="off" @submit="completeRegistration" class="q-gutter-sd q-mb-lg" >
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.email"
            label="Email *"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || 'Not be empty',
              val => email_re.test(String(val)) || 'Bad email'
              ]"/><!--    email      -->
       <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.wechatid"
            label="Phone *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Not be empty']"
          />
       <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.fio"
            label="Name *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Not be empty']"
          />
         <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.nickname"
            label="Nickname *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Not be empty']"
          />
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            :type="isPwd ? 'password' : 'text'"
            v-model="userRegister.password1"
            label="Password *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Not be empty']"
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
            label="Repeat password *"

            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Not be empty', val => val===userRegister.password1 || 'Passwords not match' ]"
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

          <q-checkbox dense v-model="agree" >
            <p class="no-margin text-caption text-grey-6">I agree to: Portal Rules, Public Offer, User Agreement</p>
          </q-checkbox>
         </div>
      <div class="flex items-center justify-between q-mt-md">
         <q-btn  :loading="is_loading" label="Register"  no-caps type="submit" rounded color="primary" class="q-px-xl q-py-sm text-bold q-mb-sm"/>
       <p class=" already">Already have an account?  <router-link :to="{name:'girl-auth'}">Enter the site</router-link> </p>
       <p class="no-margin already">After your registration, we will activate your profile within 24 hours.</p>
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
