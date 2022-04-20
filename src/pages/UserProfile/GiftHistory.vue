<template>
  <div class="subscribe backblock">
    <div class="h1">선물 내역</div>
    <div class="subblock">
      <!--        :class="{'bg-green-1':  gift.answer_text}"-->
      <div class="cursor-pointer"  @click="cur_gift=index,giftModalActive=true" v-for="(gift,index) in sended_gift" :key="gift.id">

        <div class="gift-row q-mb-md">
          <div style="flex-wrap: nowrap" class="flex items-center">
            <q-avatar class="q-mr-sm">
              <img class="" :src="gift.user.avatar" alt="avatar">
            </q-avatar>
            <div class="info">
              <p class="no-margin text-dark text-body2 text-bold">{{gift.user.fio}}</p>
              <p class="no-margin text-grey-6 text-caption">@{{gift.user.nickname}}</p>
            </div>
          </div>
          <div style="flex-wrap: nowrap" class="flex items-center">
            <q-avatar size="62px" class="q-mr-md">
              <img :src="gift.gift.image" alt="kiss">
            </q-avatar>
            <div class="gift-row__price">
              <img src="~assets/diamond.svg" alt="diamond">
              <p class="no-margin text-dark text-caption">{{gift.gift.price}}</p>
            </div>
          </div>
          <div class="text-center">
            <svg v-if="gift.answer_text" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.72 8.79L10.43 13.09L8.78 11.44C8.69036 11.3353 8.58004 11.2503 8.45597 11.1903C8.33191 11.1303 8.19678 11.0965 8.05906 11.0912C7.92134 11.0859 7.78401 11.1091 7.65568 11.1594C7.52736 11.2096 7.41081 11.2859 7.31335 11.3833C7.2159 11.4808 7.13964 11.5974 7.08937 11.7257C7.03909 11.854 7.01589 11.9913 7.02121 12.1291C7.02653 12.2668 7.06026 12.4019 7.12028 12.526C7.1803 12.65 7.26532 12.7604 7.37 12.85L9.72 15.21C9.81344 15.3027 9.92426 15.376 10.0461 15.4258C10.1679 15.4755 10.2984 15.5008 10.43 15.5C10.6923 15.4989 10.9437 15.3947 11.13 15.21L16.13 10.21C16.2237 10.117 16.2981 10.0064 16.3489 9.88458C16.3997 9.76272 16.4258 9.63201 16.4258 9.5C16.4258 9.36799 16.3997 9.23728 16.3489 9.11542C16.2981 8.99356 16.2237 8.88296 16.13 8.79C15.9426 8.60375 15.6892 8.49921 15.425 8.49921C15.1608 8.49921 14.9074 8.60375 14.72 8.79ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#4D94FF"/>
            </svg>

            <p class="no-margin text-caption text-grey-6">
              {{ new Date (gift.created_at).toLocaleTimeString().split(':')[0]}}:{{ new Date (gift.created_at).toLocaleTimeString().split(':')[1]}}
              {{ new Date (gift.created_at).toLocaleDateString()}}</p>

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
          <q-avatar size="100px" class="q-mr-lg">
            <img :src="sended_gift[cur_gift].gift.image" alt="">
          </q-avatar>
          <div class="sended-gift__text">
            <p class="q-mb-sm text-grey-6 text-caption">
              {{ new Date (sended_gift[cur_gift].created_at).toLocaleTimeString().split(':')[0]}}:{{ new Date (sended_gift[cur_gift].created_at).toLocaleTimeString().split(':')[1]}},
              {{ new Date (sended_gift[cur_gift].created_at).toLocaleDateString()}}
            </p>
            <p class="q-mb-sm text-caption">{{sended_gift[cur_gift].description}}</p>
            <p class="q-mb-sm text-caption">{{sended_gift[cur_gift].message}}</p>
          </div>
          <div class="">
            <div class="flex items-center gift-price">
              <img src="~assets/diamond.svg" alt="">
              <p class="no-margin text-caption">{{sended_gift[cur_gift].gift.price}}</p>
            </div>

          </div>

        </q-card>
        <q-card v-if="sended_gift[cur_gift].answer_text"  class="sended-gift q-mt-md">
          <div class="flex items-center justify-between q-mb-md">
            <div class="flex items-center ">
              <q-avatar class="q-mr-sm">
                <img :src="sended_gift[cur_gift].user.avatar" alt="">
              </q-avatar>
              <div class="">
                <p class="no-margin text-caption text-bold">{{sended_gift[cur_gift].user.fio}}</p>
                <p class="no-margin text-caption ">@{{sended_gift[cur_gift].user.nickname}}</p>
              </div>
            </div>
            <p class="q-mb-sm text-grey-6 text-caption">
              {{ new Date (sended_gift[cur_gift].answer_date).toLocaleTimeString().split(':')[0]}}:{{ new Date (sended_gift[cur_gift].answer_date).toLocaleTimeString().split(':')[1]}},
              {{ new Date (sended_gift[cur_gift].answer_date).toLocaleDateString()}}
            </p>
          </div>
          <div class="">{{sended_gift[cur_gift].answer_text}}</div>
          <div v-if="sended_gift[cur_gift].filename">
            <q-separator spaced="md"/>
            <a class="file-link" :href="sended_gift[cur_gift].answer_file">{{sended_gift[cur_gift].filename}}</a>
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
      sended_gift:[],
      giftModalActive:false,
      cur_gift:0
    }
  },
  async mounted() {
    const user_sended_gift = await this.$api.get(`/api/v1/gift/get_user_sended_gifts?nickname=${this.$auth.user.nickname}`)
    this.sended_gift = user_sended_gift.data
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

.gift-row
  display: grid
  grid-template-columns: 3fr 2fr 2fr
  align-items: center
  padding: 5px 28px
  transition: background-color .2s linear
  &__price
    border: 1px solid #e2e2e2
    box-sizing: border-box
    border-radius: 55px
    padding: 5px 10px
    display: flex
    align-items: center
    justify-content: center
  &:hover
    background: #F2F2F2




</style>
