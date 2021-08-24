<template>
  <div class="payment-block text-dark text-center">

    <p>付款方式</p>
      <div class="flex items-center justify-center q-mb-md">
        <q-card @click="selectedPaymentType=index" class="payment-card q-mr-sm" :class="{active:selectedPaymentType===index}" v-for="(type,index) in paymentTypes" :key="index">
          <img draggable="false" style="width: 120px;height: 54px;object-fit: contain" :src="type.img" alt="">

        </q-card>
      </div>
     <p>账户类型 </p>
      <div class="flex items-center justify-center q-mb-md">
        <q-card @click="selectedPaymentAccountType=index" class="payment-card alt" :class="{active:selectedPaymentAccountType===index}" v-for="(type,index) in paymentAccountTypes" :key="index">
         <img draggable="false"  :src="type.img" alt="">
        </q-card>
      </div>

    <p>账户到期日</p>
      <div class="payment-grid q-mb-md">
        <q-card @click="selectedMonth=index" class="payment-card" :class="{active:selectedMonth===index}" v-for="(type,index) in paymentAccountTypes[selectedPaymentAccountType].paymentMonths" :key="index">
          <div class="flex items-center">
             <p class="no-margin text-bold">{{type.months}} </p> <p class="no-margin  text-grey-8 ">- {{type.price}}¥</p>
          </div>

        </q-card>
      </div>
  <div class="text-center">
    <p class="text-grey-7">把整个开发者都拉出来了，太惨了。把整个开发者都拉出来了，太惨了。</p>
    <q-btn label="充值" rounded style="width: 150px" class="q-px-xl q-py-sm text-bold " color="primary"/>
  </div>
  </div>

</template>

<script>



export default {

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
        {img:'t-norm.png',paymentMonths:[
        {months:'1个月',price:1},
        {months:'3个月',price:100},
        {months:'6个月',price:300},
        {months:'12个月',price:600},
      ]},
        {img:'t-vip.png',paymentMonths:[
        {months:'1个月',price:11},
        {months:'3个月',price:1100},
        {months:'6个月',price:2200},
        {months:'12个月',price:6600},
      ]}
      ],




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
  padding: 15px
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
  &.alt
    padding: 0
    background: #F3F3F3


</style>
