<template>
  <q-layout view="lHh Lpr lFf">
    <Header v-if="show"/>


    <q-page-container>
      <q-page style="margin-top: 180px"  class="main ">
        <div class="container" :class="{'chat-m':!show}">
          <UserSideBar v-if="show"/>
          <UserAvatarSideBar v-if="!lk_settings" />
          <div class="info " :class="[!lk_settings ? 'wall-info' : 'settings-block', show ? '' : 'no-margin']">

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
import UserSideBar from 'components/UserSideBar.vue'
import UserAvatarSideBar from 'components/userprofile/UserAvatarSideBar.vue'
import GirlMenu from 'components/girlprofile/GirlMenu.vue'



export default {
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    if (!store.state.auth.loggedIn ) {
        redirect({ path: '/signin' })
       }
    // if (!store.state.auth.user.is_verified) {
    //     redirect({ path: '/' })
    //    }
  },

  components: {
    Header,Footer,UserSideBar,UserAvatarSideBar,GirlMenu
  },
  data () {
    return {
      lk_settings:false,
      lk_chat:false,
    }
  },
  mounted() {
   console.log(this.$route.path)
    this.$route.path === '/lk/settings' ? this.lk_settings = true : this.lk_settings = false
  },
  watch: {
    '$route.path': function(val) {

      val === '/lk/settings' ? this.lk_settings = true : this.lk_settings = false
      val === '/lk/chat' ? this.lk_chat = true : this.lk_chat = false

    }
  },
  computed:{
    show(){
      if (this.$route.path === '/lk/chat'){
        return  this.$q.screen.gt.xs
      }else
        return  true

    }
  }


}
</script>
