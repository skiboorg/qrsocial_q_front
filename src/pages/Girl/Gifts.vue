<template>
 <div class="subscribe backblock settings-block">
   <div class="q-px-md text-dark">
          <p class="text-h6 text-dark q-mb-sm q-pt-md">Инструкции по донатам (подаркам):</p>
         <p class="text-caption text-dark">
- клиенты (зрители) дарят вам подарки в любое время или во время стрима<br>
- во время стрима все новые подарки будут помечены тут как новые, вы должны на них сразу ответить<br>
- если подарок был подарен не во время стрима - то ответьте на него в течении 24 часов<br>
- на подарок нужно кликнуть, откроется окно для ответа на подарок<br>
- вы можете написать ответный благодарный текст или прикрепить картинку<br>
- если это подарок-запрос - то у вас соответствующая пометка об этом<br>
- на подарки-запросы вы должны ответить в развернутой форме и прикрепить что требуется от подарка:<br>
фотографию на заказ, короткое видео на заказ, ссылку на приватный стрим, рисунок

         </p>
        <q-separator/>
    </div>
			<div class="h1">История подарков</div>
			<div class="subblock">
				<div class="sub q-px-md cursor-pointer" :class="{'bg-green-1':  gift.answer_text}" @click="cur_gift=index,giftModalActive=true" v-for="(gift,index) in gifts" :key="gift.id">
					<div class="sub-l gift ">
            <q-avatar>
              <img class="" :src="gift.from_user.avatar" alt="avatar">
            </q-avatar>

						<div class="info">
							<div class="name">{{gift.from_user.fio}}</div>
							<div class="type">
								<img src="~assets/hender.svg" alt="hender">
								<div class="fire"><img src="~assets/fire.svg" alt="fire">51</div>
								<div class="people"><img src="~assets/people.svg" alt="people">17</div>
							</div>
						</div>
					</div>
					<div class="sub-r">
						<div class="date">
							<div>{{new Date(gift.created_at).toLocaleTimeString()}}</div>
							<div>{{new Date(gift.created_at).toLocaleDateString()}}</div>
						</div>
						<q-avatar>
              <img :src="gift.gift.image" alt="">
            </q-avatar>
						<div class="diamond">
							<img src="~assets/diamond.svg" alt="diamond">
							<div class="num">{{gift.gift.price}}</div>
						</div>
					</div>
				</div>

			</div>
		</div>
  <q-dialog v-model="giftModalActive">
    <q-card class="cursor-pointer text-dark" style="border-radius: 24px;width: 660px; max-width: 90vw;">
      <q-card-section class="row items-center q-pb-none text-dark">
        <div class="text-h6">礼品详情</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-separator spaced="md"/>
      <q-card-section>
        <q-card flat class="flex items-center justify-between sended-gift">
          <q-avatar class="q-mr-lg">
            <img :src="gifts[cur_gift].gift.image" alt="">
          </q-avatar>
          <div class="sended-gift__text">
            <p class="q-mb-sm text-grey-6 text-caption">
              {{ new Date (gifts[cur_gift].created_at).toLocaleTimeString().split(':')[0]}}:{{ new Date (gifts[cur_gift].created_at).toLocaleTimeString().split(':')[1]}},
            {{ new Date (gifts[cur_gift].created_at).toLocaleDateString()}}
            </p>
            <p class="q-mb-sm text-caption">{{gifts[cur_gift].description}}</p>
            <p class="q-mb-sm text-caption">{{gifts[cur_gift].message}}</p>
          </div>
          <div class="">
            <div class="flex items-center gift-price">
              <img src="~assets/diamond.svg" alt="">
            <p class="no-margin text-caption">{{gifts[cur_gift].gift.price}}</p>
            </div>

          </div>

        </q-card>
        <q-card v-if="gifts[cur_gift].answer_text"  class="sended-gift q-mt-md">

          <div class="">{{gifts[cur_gift].answer_text}}</div>
          <div v-if="gifts[cur_gift].filename">
            <q-separator spaced="md"/>
            <a class="file-link" :href="gifts[cur_gift].answer_file">{{gifts[cur_gift].filename}}</a>
          </div>

        </q-card>
        <q-card v-else  class="sended-gift q-mt-md">
          <p class="q-mb-sm">Ответ</p>
          <q-input class="q-mb-sm" filled v-model="answer_text" type="textarea"/>
          <div class="flex justify-between items-end">
           <q-file dense v-model="answer_file" label="Файл" />
            <q-btn @click="answer" :disable="!answer_text" label="отправить" color="positive"/>
          </div>
        </q-card>

      </q-card-section>

    </q-card>
  </q-dialog>

</template>

<script>


export default {

  data () {
    return {
      answer_text:null,
      answer_file:null,
      gifts:[],
      giftModalActive:false,
      cur_gift:0
    }
  },
  async beforeMount(){
    const gifts = await this.$api.get(`/api/v1/gift/get_user_gifts?nickname=${this.$auth.user.nickname}`)
    this.gifts = gifts.data
  },
  methods:{
    async answer(){
          let formData = new FormData()
    formData.set('id',this.gifts[this.cur_gift].id)
    formData.set('text',this.answer_text)
    formData.set('file',this.answer_file)
      await this.$api({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: '/api/v1/gift/gift_answer',
        data: formData
      }).then((response) => {

        this.$q.notify({
          message: 'Успешно',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })

    })
      this.answer_file = null
        this.answer_text = null
        this.giftModalActive = false
        const gifts = await this.$api.get(`/api/v1/gift/get_user_gifts?nickname=${this.$auth.user.nickname}`)
        this.gifts = gifts.data
  }
}
}

</script>
 <style lang="sass" scoped>
.sended-gift
  border: 2px solid #F3F3F3
  box-sizing: border-box
  box-shadow: 0px 4px 55px rgba(0, 0, 0, 0.02)
  border-radius: 16px
  padding: 30px 25px
  &__text
    flex-grow: 1
.gift-price
  border: 1px solid #F3F3F3
  box-sizing: border-box
  border-radius: 55px
  padding: 10px 15px
.file-link
  background: #4D94FF
  border-radius: 5px
  color: #FFFFFF
  font-size: 10px !important
  padding: 5px 10px
 </style>
