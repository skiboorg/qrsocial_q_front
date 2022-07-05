<template>
<div class="contacts">
			<div class="left backblock">
				<div class="top">
					<div class="point">
						<img src="~assets/map.svg" alt="icon">
						<div class="text">Guangzhou, Guangdong Province</div>
					</div>
					<div class="point">
						<img src="~assets/work.svg" alt="icon">
						<div class="text">8:00 am - 16:00 pm</div>
					</div>
					<div class="point">
						<img src="~assets/tel.svg" alt="icon">
						<div class="text">+7 937 337 05 51</div>
					</div>
					<div class="point">
						<img src="~assets/we.svg" alt="icon">
						<div class="text">+7 937 337 05 51</div>
					</div>
					<div class="point">
						<img src="~assets/mail.svg" alt="icon">
						<div class="text">qrspicy.info@mail.com</div>
					</div>
				</div>
				<div class="bottom">
          포털 작업에 대한 질문과 제안 사항이 있으면 메시지를 남길 수 있습니다!<br><br>
          댓글을 작성할 수도 있습니다. 우리는 나중에 고객의 평가 페이지를 구현할 것입니다.<br><br>
          24시간 이내에 회신드리겠습니다!
        </div>
			</div>
			<div class="right backblock">
				<div class="h1">피드백</div>

        <div style="height: 90%" class="flex column justify-between ">
          <div class="">
            <q-input
              outlined
              :dense="!$q.screen.gt.md"
              v-model="formData.email"
              label="E-mail"
              class="q-mb-md"
            />

            <q-select
              outlined
              :dense="!$q.screen.gt.md"
              v-model="formData.phone"
              label="정보를 원한다"
              class="q-mb-md"
            />


            <q-input
              outlined
              :dense="!$q.screen.gt.md"
              v-model="formData.text"
              type="textarea"
              label="합류 ..."
              class="q-mb-lg"
            />
          </div>
          <q-btn label="登录" rounded unelevated @click="send"  class="q-py-md full-width  text-bold" color="primary"/>
        </div>



			</div>
		</div>
</template>

<script>

import { Notify } from 'quasar'
export default {

  data () {
    return {
      formData:{
        email:null,
        text:null,
        phone:null
      }
    }
  },
  methods:{
    async send(){
      await this.$api.post('api/v1/feedback/add_feedback',{
        email:this.formData.email,
        text:this.formData.text,
        phone:this.formData.phone,
      })
      Notify.create({
        color:'positive',
        message:'Message sent'
      })
    }
  }
}
</script>
 <style lang="sass">

 </style>
