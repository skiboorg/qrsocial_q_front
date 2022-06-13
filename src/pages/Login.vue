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
			<div class="h1 q-mb-lg">사이트를 입력</div>
			 <q-form @submit="userLoginAction" class="q-gutter-sd q-mb-lg">
          <q-input
            filled
            :dense="!$q.screen.gt.md"
            v-model="userLogin.wechatid"
            label="전화 번호 *"

            lazy-rules
            :rules="[ val => val && val.length > 0 || '필수 필드입니다']"
          />
          <q-input
            :dense="!$q.screen.gt.md"
            filled
            :type="isPwd ? 'password' : 'text'"
            v-model="userLogin.password"
            label="너의 비밀번호 *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || '필수 필드입니다' ]"
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
           <p class="no-margin text-caption text-grey-6">비밀번호 분실? 이메일 <span class="text-info">SUPPORT@QRSPICY.CN</span></p>
         </div>
          <div class="flex items-center justify-between q-mt-md">
         <q-btn unelevated :loading="is_loading" label="올"  no-caps type="submit" rounded color="primary" class="q-px-xl q-py-sm text-bold"/>
       <p class="no-margin already">계정이 없으신가요? <router-link :to="{name:'signup-page'}">지금 등록하세요</router-link> </p>
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
