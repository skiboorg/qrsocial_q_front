<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>
    <q-page-container>
      <q-page  class="main ">

        <div class="container">
          <GirlProfileSideBar/>
          <GirlAvatarSideBar />
          <div class="wall-info info womanwall">
            <GirlMenu/>
            <router-view />
          </div>
        </div>

      </q-page>

    </q-page-container>
    <Footer/>
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
import GirlProfileSideBar from 'components/girlprofile/GirlProfileSideBar.vue'
import GirlAvatarSideBar from 'components/girlprofile/GirlAvatarSideBar.vue'
import GirlMenu from 'components/girlprofile/GirlMenu.vue'


export default {
  name: 'MainLayout',
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {

    if (!store.state.auth.loggedIn ) {
        redirect({ path: '/signin' })
       }
    if (!store.state.auth.user.is_verified) {
        redirect({ path: '/' })
       }
    return store.dispatch('data/getGirlInfo', currentRoute.params.nickname)
  },


  components: {
    Header,Footer,GirlProfileSideBar,GirlAvatarSideBar,GirlMenu
  },


}
</script>
