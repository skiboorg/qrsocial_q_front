<template>
  <q-dialog v-model="giftModalActive">
    <q-card class="cursor-pointer" style="border-radius: 24px;width: 800px; max-width: 80vw;">
      <q-card-section class="row items-center q-pb-none text-dark">
        <div class="text-h6">女孩目录</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
        <p class="text-body2 text-grey-6 q-my-sm">送女孩礼物，你关注她，写下你的留言或愿望！ 她一定会回答你的礼物。 如果您提出礼物请求，女孩会在聊天中向您发送回复。您将在礼物版块的个人账户中看到礼物的答案。</p>
      </q-card-section>
      <q-separator spaced="md"/>
      <div class="q-mx-md">
        <div class="q-gutter-sm q-py-md">
          <q-btn unelevated
                 @click="cur_gift_tab=index"
                 no-caps
                 :disable="cat.is_for_vip && !$auth.user.is_vip"
                 rounded
                 :color="cur_gift_tab===index ? 'info' : 'grey-2'"
                 :text-color="cur_gift_tab===index ? 'white' : 'grey-9'"
                 v-for="(cat,index) in gifts"
                 class="q-py-sm"
                 :key="index">
            <div class="row items-center no-wrap">
              <q-avatar square size="24px">
                <img style="object-fit: contain" draggable="false" class="q-mr-sm" :src="cat.icon" alt="">
              </q-avatar>
              <div class="text-center">
                {{cat.name}}
              </div>
            </div>
          </q-btn>
        </div>
      </div>
      <q-separator spaced="md"/>
      <q-card-section>
        <div class="q-mb-lg" :class="[gifts[cur_gift_tab].is_for_special ? 'gift-grid-special' : 'gift-grid']">
          <div v-for="(gift,index) in gifts[cur_gift_tab].gifts" :key="index">
            <q-card  v-if="!gift.is_special_gift" @click="cur_gift=gift.id, selected_gift_price=gift.price"
                    flat
                    :class="{'selected':cur_gift === gift.id}"
                    class="text-center simple-gift">
              <q-avatar square size="62px">
                <img style="object-fit: contain" draggable="false" :src="gift.image">
              </q-avatar>
              <q-card-section>
                <p class="no-margin text-center text-info ">{{gift.name}}</p>
                <div class="flex items-center justify-center">
                  <img class="q-mr-xs" src="~assets/diamond.svg" alt="">
                  <p class="no-margin text-dark text-caption">{{gift.price}}</p>
                </div>
              </q-card-section>

            </q-card>
            <div v-else

                 @click="cur_gift=gift.id, selected_gift_price=gift.price"
                 :class="{'special-gift selected':cur_gift === gift.id}"
                 class="special-gift">
              <q-avatar square size="62px">
                <img style="object-fit: contain" draggable="false" :src="gift.image">
              </q-avatar>
              <div class="special-gift__inner">
                <p class="no-margin  text-info text-body2">{{gift.name}}</p>
                <p class="no-margin  text-grey-6 text-caption">{{gift.description}}</p>
              </div>
              <div class="flex items-center gift-price">
                <img src="~assets/diamond.svg" alt="">
                <p class="no-margin text-caption text-dark">{{gift.price}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between no-wrap">
          <q-input style="flex-grow: 1"
                   standout
                   rounded
                   bg-color="grey-2"
                   @keydown="keyDown"
                   label="输入您对女孩的要求或愿望"
                   label-color="grey-6"
                   dark
                   class="text-dark q-mr-md"
                   v-model="message"/>
          <q-btn :disable="!cur_gift"
                 @click="sendGift"
                 label="送礼物"
                 class="q-px-xs q-py-md"
                 style="width: 142px"
                 rounded
                 color="primary"/>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>


import {mapGetters,mapActions} from "vuex";

export default {

  data () {
    return {
      cur_gift_tab:0,
      cur_gift:null,
      selected_gift_price:null,
      message:''
    }
  },
  methods:{
    ... mapActions('data',['setGiftModal']),
    ... mapActions('auth',['getUser']),
    async keyDown(e){
      if (e.keyCode===13) {
        console.log('13')
        if (this.message) {
          await this.sendGift()
        }
      }
    },
    async sendGift(){
      //отправляем подарок пользователю по nickname
      console.log('user.balance',this.$auth.user.balance)
      console.log('gift_price',this.selected_gift_price)
      if(this.$auth.user.balance < this.selected_gift_price){
        this.$q.notify({
          message: '我们将回复您的邮件',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'negative',
          icon: 'announcement'
        })
        this.cur_gift = null
        this.message = null

        return
      }
      await this.$api.post(`/api/v1/gift/send_gift_to_user`,{
        gift_id:this.cur_gift,
        nickname:this.currentGirl.nickname,
        message:this.message,
        stream:false
      })

      this.$q.notify({
        message: '您可以在个人帐户中跟踪它',
        position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
        color:'positive',
        icon: 'announcement'
      })
      await this.getUser()
      this.cur_gift = null
      this.message = null
      this.cur_gift_tab = 0
      this.giftModalActive = false



    },
  },
  computed:{
    ...mapGetters('data',['currentGirl','gifts']),
    giftModalActive:{
      get(){
        return this.$store.state.data.giftModalActive
      },
      set(val){
        return  this.setGiftModal(val)
      }
    },
  }
}
</script>
<style lang="sass">
.special-gift
  background: #F3F3F3
  border-radius: 16px
  padding: 20px
  display: grid
  align-items: center
  grid-template-columns: 1fr 5fr 1fr
  grid-gap: 30px
  margin-bottom: 15px
  transition: all .2s linear
  border: 4px solid transparent
  box-sizing: border-box
  &__inner
    flex-grow: 1
  &:hover
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15) !important
  &.selected
    background: #FFFFFF
    border: 4px solid #DBEAFF
.gift-price
  border: 1px solid #E2E2E2
  background: #FFFFFF
  box-sizing: border-box
  border-radius: 55px
  padding: 10px 15px
  flex-wrap: nowrap
.simple-gift
  border: 4px solid transparent
  transition: all .2s linear
  border-radius: 16px
  &.selected
    border: 4px solid #DBEAFF
  &:hover
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15) !important




</style>
