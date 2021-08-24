<template>
  <div class="payment-block text-dark">
    <p v-if="blockType==='index'" class="text-h6">在我们的网站上支付您的会员费以开始使用我们的平台！<br> 选择关税和付款方式。</p>
    <p>付款方式</p>
      <div class="payment-grid q-mb-md">
        <q-card @click="selectedPaymentType=index" class="payment-card" :class="{active:selectedPaymentType===index}" v-for="(type,index) in paymentTypes" :key="index">
          <img draggable="false" style="width: 120px;height: 54px;object-fit: contain" :src="type.img" alt="">
<!--          <p class="no-margin">{{type.name}}</p>-->
        </q-card>
      </div>
     <p v-if="blockType==='index'" >账户类型 <router-link class="q-ml-md inline-block text-primary" to="/instrustions">了解VIP权益</router-link></p>
      <div v-if="blockType==='index'" class="payment-grid q-mb-md">
        <q-card @click="selectedPaymentAccountType=index" class="payment-card" :class="{active:selectedPaymentAccountType===index}" v-for="(type,index) in paymentAccountTypes" :key="index">
          <p class="no-margin">{{type.name}}</p>
        </q-card>
      </div>
    <p v-if="blockType==='lk'">补货方法</p>
      <div v-if="blockType==='lk'" class="payment-grid q-mb-md">
        <q-card @click="selectedPaymentAmount=index" class="payment-card" :class="{active:selectedPaymentAmount===index}" v-for="(type,index) in paymentAmounts" :key="index">
          <p class="no-margin flex items-center"><img src="~assets/diamond.svg" alt="">{{type.coins}}</p>
          <p class="no-margin flex items-end text-grey-7 text-bold"><span class="text-caption inline-block q-mr-xs">Y</span> {{type.price}}</p>
        </q-card>
      </div>
    <p v-if="blockType==='index'">账户到期日</p>
      <div v-if="blockType==='index'" class="payment-grid q-mb-md">
        <q-card @click="selectedMonth=index" class="payment-card" :class="{active:selectedMonth===index}" v-for="(type,index) in paymentMonths" :key="index">
          <p class="no-margin flex items-center">{{type.months}}</p>
          <p class="no-margin flex items-end text-grey-7 text-bold"><span class="text-caption inline-block q-mr-xs">Y</span> {{type.price}}</p>
        </q-card>
      </div>
  <div class="text-center">
    <q-btn label="充值" rounded  class="q-px-xl q-py-sm text-bold" color="primary"/>
  </div>
  </div>

</template>

<script>


import {mapGetters,mapActions} from "vuex";

export default {
  props:['blockType'],
  data () {
    return {
      selectedPaymentType:0,
      selectedPaymentAmount:0,
      selectedPaymentAccountType:0,
      selectedMonth:0,
      paymentTypes:[
        {name:'Alipay',img:'a-pay.svg'},
        {name:'WeChat pay',img:'w-pay.svg'}
      ],
      paymentAccountTypes:[
        {name:'会员资格'},
        {name:'贵宾会员VIP'}
      ],
      paymentAmounts:[
        {coins:'150',price:100},
        {coins:'300',price:180},
        {coins:'750',price:450},
        {coins:'1500',price:700},
      ],
      paymentMonths:[
        {months:'1个月',price:1},
        {months:'3个月',price:100},
        {months:'6个月',price:300},
        {months:'12个月',price:600},
      ]


    }
  },
  methods:{

  },

}
</script>
<style lang="sass">
.payment-grid
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(150px,1fr))
  grid-gap: 20px
.payment-card
  background: #FFFFFF
  box-shadow: 0px 4px 55px rgba(0, 0, 0, 0.1)
  border-radius: 16px
  padding: 15px 0px
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  transition: background-color .2s linear
  box-sizing: border-box
  cursor: pointer
  border: 4px solid transparent
  &:hover
    background: #F3F3F3
  &.active
    border: 4px solid #DBEAFF
</style>
