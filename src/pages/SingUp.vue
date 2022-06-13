<template>
  <q-page >
    <div class="window">
	<div class="left">
		<img class="logo q-mb-xl" src="~assets/lw.png" alt="logo">
		<div class="text-h4 q-mb-md">만나고, 채팅하고, 친구를 사귀고,<br>
라이브 스트림을 시청하고 즐기십시오!</div>
		<div class="text-h3 text-bold">언어 장벽이 없습니다!</div>
	</div>
	<div class="right">
		<div class="data">
			<div class="h1 q-mb-lg">立即注册</div>
     <q-form autocomplete="off" @submit="completeRegistration" class="q-gutter-sd q-mb-lg" >
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.email"
            label="이메일 *"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || '필수 필드입니다',
              val => email_re.test(String(val)) || '잘못된 이메일을 입력했습니다'
              ]"/><!--    email      -->
       <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userRegister.wechatid"
            label="이메일 *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || '필수 필드입니다']"
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
            label="전화 번호 *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || '필수 필드입니다']"
          />
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            :type="isPwd ? 'password' : 'text'"
            v-model="userRegister.password1"
            label="이름 *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || '필드입니다']"
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
            label="닉네임 *"

            lazy-rules
            :rules="[val => val !== null && val !== '' || '필드입니다', val => val===userRegister.password1 || '비밀번호가 일치하지 않습니다' ]"
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
           <p class="q-mb-lg text-caption text-grey-6">사이트 방문은 유료입니다! 등록 후 적절한 관세를 선택하고 요금을 지불해야 합니다. 그러면 포털에 액세스할 수 있고 소녀들과 소통하고 만날 수 있습니다.</p>
          <q-checkbox dense v-model="agree" >
            <p class="no-margin text-caption text-grey-6">동의합니다:  <span class="text-info">포털 규칙, 공개 제안, 사용자 계약</span></p>
          </q-checkbox>
         </div>
      <div class="flex items-center justify-between q-mt-md">
         <q-btn unelevated :loading="is_loading" label="계정 만들기"  no-caps type="submit" rounded color="primary" class="q-mb-lg q-px-xl q-py-sm text-bold"/>
       <p class="no-margin already">이미 계정이 있습니까? <router-link :to="{name:'signin-page'}">사이트를 입력</router-link> </p>
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
