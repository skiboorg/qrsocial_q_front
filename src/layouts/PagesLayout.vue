<template>
  <q-layout view="lHh Lpr lFf">
  <Header/>
    <q-page-container>
      <q-page  class="main ">
        <div class="container">
                  <UserSideBar v-if="$route.name !== 'stream-page'"/>
 <router-view />
        </div>

  </q-page>

    </q-page-container>
    <Footer/>
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
import UserSideBar from 'components/UserSideBar.vue'





export default ({
  name: 'MainLayout',

  components: {
    Header,Footer,UserSideBar
  },


})
</script>
