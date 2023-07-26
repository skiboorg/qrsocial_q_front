<template>
  <div class="payment-block text-dark">
    <p v-if="blockType==='index'" class="text-h6">Pay your membership fee on our website to start using our platform! <br> Choose tariff and payment method.。</p>
    <p>Payment method</p>
      <div class="payment-grid q-mb-md">
        <q-card @click="selectedPaymentType=index" class="payment-card" :class="{active:selectedPaymentType===index}" v-for="(type,index) in paymentTypes" :key="index">
          <img draggable="false" style="width: 120px;height: 80px;object-fit: contain" :src="type.img" alt="">
<!--          <p class="no-margin">{{type.name}}</p>-->
        </q-card>
      </div>
     <p v-if="blockType==='index'" >Account type <router-link class="q-ml-md inline-block text-primary" to="/instrustions">Learn about VIP benefits</router-link></p>
      <div v-if="blockType==='index'" class="payment-grid q-mb-md">
        <q-card @click="selectedPaymentAccountType=index" class="payment-card" :class="{active:selectedPaymentAccountType===index}" v-for="(type,index) in paymentAccountTypes" :key="index">
          <p class="no-margin">{{type.name}}</p>
        </q-card>
      </div>
    <p v-if="blockType==='lk'">Replenishment method</p>
      <div v-if="blockType==='lk'" class="payment-grid q-mb-md">
        <q-card @click="selectedPaymentAmount=index" class="payment-card" :class="{active:selectedPaymentAmount===index}" v-for="(type,index) in paymentAmounts" :key="index">
          <p class="no-margin flex items-center"><img src="~assets/diamond.svg" alt="">{{type.coins}}</p>
          <p class="no-margin flex items-end text-grey-7 text-bold"><span class="text-caption inline-block q-mr-xs">$</span> {{type.price}}</p>
        </q-card>
      </div>
    <p v-if="blockType==='index'">Account expiration date</p>
      <div v-if="blockType==='index'" class="payment-grid q-mb-md">
        <q-card @click="selectedMonth=index" class="payment-card" :class="{active:selectedMonth===index}" v-for="(type,index) in paymentMonths" :key="index">
          <p class="no-margin flex items-center">{{type.months}}</p>
          <p class="no-margin flex items-end text-grey-7 text-bold"><span class="text-caption inline-block q-mr-xs">$</span> {{type.price}}</p>
        </q-card>
      </div>
  <div class="text-center">
    <q-btn label="Recharge" rounded unelevated @click="add"  class="q-px-xl q-py-sm text-bold" color="primary"/>
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
        {name:'Visa',img:'p1.png'},
        {name:'MC',img:'p2.png'},
        {name:'Npay',img:'p3.png'},
        {name:'kakao',img:'p4.png'},

      ],
      paymentAccountTypes:[
        {name:'Membership'},
        {name:'VIP member'}
      ],
      paymentAmounts:[
        {coins:'150',price:3},
        {coins:'300',price:5},
        {coins:'750',price:8},
        {coins:'1500',price:12},
      ],
      paymentMonths:[
        {months:'1 month',price:1},
    {months:'3 months',price:100},
    {months:'6 months',price:300},
    {months:'12 months',price:600},
      ]


    }
  },
  methods:{
    ...mapActions('auth',['getUser']),
    async add(){
      await this.$api.post('/api/v1/user/add_to_balance',{amount:this.paymentAmounts[this.selectedPaymentAmount].price})
      await this.getUser(false)

    }
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
