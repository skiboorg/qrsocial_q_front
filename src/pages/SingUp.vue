<template>
  <q-page >
    <div class="window">
	<div class="left">
		<img class="logo q-mb-xl" src="~assets/lw.png" alt="logo">
		<div class="text-h4 q-mb-md">Meet, chat, make friends, <br>
      Watch the live stream and enjoy!</div>
		<div class="text-h3 text-bold">No language barriers!</div>
	</div>
	<div class="right">
		<div class="data">
			<div class="h1 q-mb-lg">Sign up now</div>
     <q-form autocomplete="off" @submit="completeRegistration" class="q-gutter-sd q-mb-lg" >
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.email"
            label="Email *"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || 'This is a required field',
              val => email_re.test(String(val)) || 'You entered the wrong Email'
              ]"/><!--    email      -->
       <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.wechatid"
            label="Wechatid *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'This is a required field']"
          />
       <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.fio"
            label="Name *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'This is a required field']"
          />
         <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.nickname"
            label="Phone number *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'This is a required field']"
          />
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            :type="isPwd ? 'password' : 'text'"
            v-model="userRegister.password1"
            label="Password *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'This is a required field']"
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
            :rules="[val => val !== null && val !== '' || 'This is a required field', val => val===userRegister.password1 || 'Passwords do not match' ]"
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
           <p class="q-mb-lg text-caption text-grey-6">Visiting the site is paid! After registration, you must select the appropriate tariff and pay the fee. Then you will have access to the portal and you can communicate and meet girls.</p>
          <q-checkbox dense v-model="agree" >
            <p class="no-margin text-caption text-grey-6">I agree: <span class="text-info">Portal Rules, Open Offer, User Agreement</span></p>
          </q-checkbox>
         </div>
      <div class="flex items-center justify-between q-mt-md">
         <q-btn unelevated :loading="is_loading" label="Register"  no-caps type="submit" rounded color="primary" class="q-mb-lg q-px-xl q-py-sm text-bold"/>
       <p class="no-margin already">Already have an account? <router-link :to="{name:'signin-page'}">Enter the site</router-link> </p>
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
