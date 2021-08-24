<template>
  <q-layout view="lHh Lpr lFf">
     <q-toolbar class="bg-grey-2 text-dark shadow-2 ">
      <q-avatar class="q-mr-md">
        <img :src="$auth.user.avatar" alt="">
      </q-avatar>
       <div class="">
         <p class="no-margin text-caption text-bold">{{$auth.user.fio}}</p>
         <p class="no-margin text-caption">@{{$auth.user.nickname}}</p>
       </div>
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
       <p class="q-mb-none q-mr-md">Баланс: {{$auth.user.balance}}</p>
      <q-btn class="q-mr-md" label="вывести"/>
      <q-btn @click="supportModal=true" label="поддержка"/>
    </q-toolbar>
    <q-page-container>
     <q-page  class="main">
        <div class="container">
                  <SideBar/>
 <router-view />
        </div>

  </q-page>
    </q-page-container>
  <q-dialog v-model="supportModal">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-dark">
          <div class="text-h6">Поддержка</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
        <p class="no-margin text-dark">Если у вас вопрос по работе платформы, по выплатам, по реферальной системе или предложения к нам - пишите на почту:<br><br>

girls_support@qrspicy.com<br><br>

Если у вас технический вопрос: вы не можете зайти на сайт, нашли ошибку или баг - то пишите или звоните в наш WhatsApp технической поддержки: <br><br>

+7 985 106 76 56</p>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>

import SideBar from 'components/girlLk/SideBar'




export default {
  name: 'MainLayout',

  components: {
    SideBar
  },
  data () {
    return {
      lk_settings:false,
      supportModal:false,
    }
  },
  mounted() {
   console.log(this.$route.path)
    this.$route.path === '/lk/settings' ? this.lk_settings = true : this.lk_settings = false
  },
  watch: {
    '$route.path': function(val) {
      val === '/lk/settings' ? this.lk_settings = true : this.lk_settings = false
    }
  },


}
</script>
