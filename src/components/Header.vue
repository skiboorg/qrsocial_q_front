<template>

  <header class="header " :class="[is_index ? 'index' : 'logged page ',$auth.loggedIn ? 'logged' : '']">
    <div class="container">

      <img @click="$router.push('/')" class="logomob cursor-pointer" src="~assets/logomob.svg" alt="logo">
      <img @click="$router.back()" class="arrow cursor-pointer" src="~assets/arrow.svg" alt="arrow">


      <div class="header-left">

        <img @click="$router.push('/')" class="header-logo_white cursor-pointer" src="~assets/lw.png" alt="header-logo">
        <img @click="$router.push('/')" class="header-logo_black cursor-pointer" src="~assets/lg.png" alt="header-logo">

        <div class="nav-menu">

          <div class="nav-menu-item"  v-for="(link,index) in menu_links" :key="index">

            <router-link
              exact-active-class="active"
              class="nav"
              :to="link.need_auth ?
                    $auth.loggedIn && $auth.user.is_verified ? {name:link.url} : '/signin'
                   : {name:link.url}
              ">
              {{link.name}}
            </router-link>
            <div class="nav-menu-item__inner " :class="[
              link.need_auth ?
                    $auth.loggedIn && $auth.user.is_verified ? '' : 'show'
                   : '']">
              <p class="no-margin text-center q-py-sm q-px-md">Login to use</p>
            </div>

          </div>


        </div>
      </div>
      <div class="broadcasting">{{$route.meta.title}}</div>
      <div class="header-right_unlogged">
        <div @click="$router.push('/signup')" class="balance">Balance</div>
        <div @click="$router.push('/signin')" class="register">Login</div>
      </div>
<!--      <div class="perfomance">表演</div>-->

      <div v-if="$auth.loggedIn" class="header-right_logged gt-xs">
        <!--			<svg class="bell" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
        <!--				<path d="M19.45 13.4489V13.4848L19.4839 13.4963C20.2039 13.7413 20.8272 14.1944 21.2686 14.7934C21.7099 15.3922 21.9479 16.1076 21.95 16.8414V19.2472C21.95 19.5523 21.8241 19.8454 21.5992 20.0617C21.3743 20.2782 21.0689 20.4001 20.75 20.4001H16.825H16.7872L16.7769 20.4365C16.4921 21.4449 15.8704 22.3355 15.0071 22.9706C14.1438 23.6057 13.0871 23.95 12 23.95C10.9129 23.95 9.85616 23.6057 8.99288 22.9706C8.12963 22.3355 7.50788 21.4449 7.22312 20.4365L7.21284 20.4001H7.175H3.25C2.93113 20.4001 2.6257 20.2782 2.40079 20.0617C2.17594 19.8454 2.05 19.5523 2.05 19.2472V16.8413C2.05216 16.1076 2.29008 15.3922 2.73142 14.7934C3.17281 14.1944 3.79611 13.7413 4.51611 13.4963L4.55 13.4848V13.4489V9.62363C4.55178 7.93155 5.17573 6.29439 6.31178 5.00212C7.44788 3.7098 9.02288 2.84576 10.758 2.56351L10.8 2.55668V2.51416V1.20295C10.8 0.897799 10.9259 0.604742 11.1508 0.388362C11.3757 0.171919 11.6811 0.05 12 0.05C12.3189 0.05 12.6243 0.171919 12.8492 0.388362C13.0741 0.604742 13.2 0.897799 13.2 1.20295V2.51416V2.55668L13.242 2.56351C14.9771 2.84576 16.5521 3.7098 17.6882 5.00212C18.8243 6.29439 19.4482 7.93155 19.45 9.62363V13.4489ZM17 13.2824H17.05V13.2324V9.62358C17.05 8.33352 16.5175 7.0967 15.5702 6.1851C14.623 5.27356 13.3387 4.76179 12 4.76179C10.6613 4.76179 9.37699 5.27356 8.42979 6.1851C7.48254 7.0967 6.95 8.33352 6.95 9.62358V13.2324V13.2824H7H17ZM9.85 20.4001H9.7617L9.80712 20.4758C10.0298 20.8471 10.3495 21.1555 10.7341 21.3707C11.1188 21.5859 11.5551 21.7005 11.9997 21.7031L12.0003 21.703C12.4449 21.7005 12.8813 21.5859 13.2659 21.3707C13.6505 21.1555 13.9702 20.8471 14.1929 20.4758L14.2383 20.4001H14.15H9.85ZM19.5 18.0942H19.55V18.0442V16.8413C19.55 16.5083 19.4126 16.1894 19.1686 15.9546C18.9246 15.7199 18.5942 15.5883 18.25 15.5883H5.75C5.40582 15.5883 5.07538 15.7199 4.83145 15.9546C4.58745 16.1894 4.45 16.5083 4.45 16.8413V18.0442V18.0942H4.5H19.5Z" fill="white" stroke="#FF784F" stroke-width="0.1"/>-->
        <!--				</svg>-->
        <!--			<svg class="star" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
        <!--				<g clip-path="url(#clip0)">-->
        <!--					<path d="M22.6059 10.0282L22.606 10.0281C22.7373 9.9001 22.7821 9.72109 22.7249 9.5448C22.6676 9.3697 22.527 9.25116 22.3443 9.22444L22.6059 10.0282ZM22.6059 10.0282L18.4013 14.127L18.4009 14.1275C17.9291 14.5879 17.7105 15.252 17.8227 15.9062C17.8227 15.9062 17.8227 15.9062 17.8227 15.9063L18.8151 21.6933L18.8154 21.6951C18.8412 21.8441 18.8055 21.9661 18.717 22.0708L18.7158 22.0723C18.6186 22.1877 18.485 22.2466 18.3512 22.2466C18.2805 22.2466 18.2104 22.2309 18.133 22.1902L18.1322 22.1898L12.9348 19.4572L12.9307 19.4551C12.3548 19.155 11.6487 19.1506 11.0652 19.4566L11.064 19.4573L5.86724 22.1897C5.67946 22.2884 5.4231 22.2388 5.28349 22.0729L5.28234 22.0715C5.19316 21.9658 5.15765 21.8441 5.18345 21.6947L5.1837 21.6932L6.17551 15.9067C6.17555 15.9065 6.17558 15.9063 6.17561 15.9061C6.28778 15.2524 6.06915 14.5878 5.59746 14.1275L5.59694 14.127L1.39237 10.0286L1.3923 10.0286C1.26106 9.90066 1.21633 9.72178 1.27337 9.54559C1.33071 9.36985 1.47208 9.2513 1.65362 9.22498L1.65403 9.22492L7.46517 8.38055L7.46557 8.38049C8.11802 8.28547 8.68529 7.87611 8.97874 7.281C8.97877 7.28093 8.97881 7.28086 8.97884 7.28079C8.97895 7.28057 8.97906 7.28034 8.97917 7.28012L11.5772 2.01532L11.5774 2.01498C11.6583 1.85083 11.8154 1.75293 11.9994 1.75293C12.1841 1.75293 12.3411 1.85101 12.4219 2.01498L12.4221 2.01528L15.0196 7.27964C15.0197 7.27975 15.0197 7.27985 15.0198 7.27996C15.0199 7.28013 15.02 7.2803 15.02 7.28047C15.313 7.87463 15.8792 8.28483 16.5328 8.38001L16.5332 8.38007L22.3439 9.22439L22.6059 10.0282Z" stroke="white" stroke-width="2.5"/>-->
        <!--				</g>-->
        <!--				<defs>-->
        <!--					<clipPath id="clip0">-->
        <!--						<rect width="24" height="24" fill="white"/>-->
        <!--					</clipPath>-->
        <!--				</defs>-->
        <!--				</svg>-->
        <div class="diamond-number">
          <img class="diamond" src="~assets/diamond.svg" alt="diamond">
          <div class="number">{{$auth.user.balance}}</div>
        </div>

        <img class="plus cursor-pointer" @click="$router.push({name:'user-profile-balance'})" src="~assets/plus.svg" alt="plus">
        <div class="avatar-block">
          <div class="name">{{$auth.user.fio}}</div>
          <div class="nick">@{{$auth.user.nickname}}</div>
        </div>
        <router-link :to="{name:'user-profile-main'}">
          <q-avatar>
            <img  class="avatar" :src="$auth.user.avatar" alt="avatar">
          </q-avatar>
        </router-link>



      </div>
      <img v-if="is_index" class="burger cursor-pointer" @click="is_mobile_menu_open=!is_mobile_menu_open" src="~assets/burger.svg" alt="burger">
      <img v-else class="burger cursor-pointer lt-md" @click="is_mobile_menu_open=!is_mobile_menu_open" src="~assets/burger-d.svg" alt="burger">
    </div>
  </header>
  <div class="headermob " :class="[!is_mobile_menu_open ? 'none':'']">
    <div class="navbar">
      <div class="top">
        <img class="cursor-pointer" @click="is_mobile_menu_open=!is_mobile_menu_open" src="~assets/close.svg" alt="close">
      </div>
      <div class="menu">
        <router-link
          v-for="(link,index) in menu_links"
          exact-active-class="active"
          class="nav block text-decoration-none"
          :to="link.need_auth ?
                    $auth.loggedIn && $auth.user.is_verified ? {name:link.url} : '/signin'
                   : {name:link.url}
              "
          :key="index">
          {{link.name}}
        </router-link>

      </div>
      <div class="btn1">로그인</div>
      <div class="btn2">충전 잔액</div>
    </div>
    <div class="back"></div>
  </div>




</template>

<script>

export default {
  data () {
    return {
      is_mobile_menu_open:false,
      right: false,
      is_index:true,
      header_title:'',
      menu_links:[
        {name:'Home',url:'index-page',need_auth:false},
        {name:'Video',url:'tiktok-page',need_auth:true},
        {name:'Girls',url:'girls-page',need_auth:true},
        {name:'Rules',url:'faq-rules',need_auth:true},
        {name:'Contacts',url:'faq-contact',need_auth:true},
        {name:'Docs',url:'faq-docs',need_auth:true},

      ],
      header_titles:[
        {url:'/lk',title:'lk'},
        {url:'/faq',title:'faq'},
      ]
    }
  },
  mounted() {
    console.log(this.$route.path)
    this.$route.path === '/' ? this.is_index = true : this.is_index = false
  },
  watch: {
    '$route.path': function(val) {
      console.log(this.$route)
      val === '/' ? this.is_index = true : this.is_index = false

    }
  },
}
</script>

