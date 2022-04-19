
const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '',name:'index-page', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/signin',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '',name:'signin-page', component: () => import('pages/Login.vue') },
    ]
  },
  {
    path: '/signup',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
       { path: '',name:'signup-page', component: () => import('pages/SingUp.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/PagesLayout.vue'),
    children: [

      { path: 'contacts',name:'contacts-page', component: () => import('pages/ContactPage.vue') },
      { path: 'rules',name:'faq-rules', component: () => import('pages/FaqPage1.vue') },
      { path: 'contacts',name:'faq-contact', component: () => import('pages/FaqPage2.vue') },
      { path: 'instrustions',name:'faq-docs', component: () => import('pages/FaqPage3.vue') },
      { path: 'history',name:'faq-history', component: () => import('pages/FaqPage4.vue') },
      { path: 'guidevip',name:'faq-guidevip', component: () => import('pages/FaqPage5.vue') },



      { path: 'girls',name:'girls-page', component: () => import('pages/GirlsPage.vue') },
      { path: 'rating',name:'rating-page', component: () => import('pages/Rating.vue') },

      { path: 'tiktok',name:'tiktok-page', component: () => import('pages/TickTokPage.vue') },
      { path: 'streams',name:'streams-page', component: () => import('pages/Streams.vue') },
      { path: 'stream',name:'stream-page', component: () => import('pages/Stream.vue') },
      { path: 'blogs',name:'blogs-page', component: () => import('pages/BlogsPage.vue') },
      { path: 'blogs/:name_slug',name:'blog-page', component: () => import('pages/BlogPage.vue') },
    ]
  },
  {
    path: '/girls',
    component: () => import('layouts/GirlProfileLayout.vue'),
    children: [
      { path: ':nickname',name:'girl-profile-main', component: () => import('pages/GirlProfile/Main.vue') },
      { path: ':nickname/posts',name:'girl-profile-posts', component: () => import('pages/GirlProfile/Posts.vue') },
      { path: ':nickname/albums',name:'girl-profile-albums', component: () => import('pages/GirlProfile/Albums.vue') },
      { path: ':nickname/ticktok',name:'girl-profile-ticktock', component: () => import('pages/GirlProfile/Ticktoks.vue') },
      { path: ':nickname/streams',name:'girl-profile-streams', component: () => import('pages/GirlProfile/Streams.vue') },
      { path: ':nickname/fans',name:'girl-profile-fans', component: () => import('pages/GirlProfile/Fans.vue') },
    ]
  },
  {
    path: '/lk',
    component: () => import('layouts/UserProfileLayout.vue'),
    children: [
      { path: '',name:'user-profile-main',meta:{title:'LK'}, component: () => import('pages/UserProfile/Main.vue') },
      { path: '/lk/chats',name:'user-profile-chats', component: () => import('pages/UserProfile/Chats.vue') },
      { path: '/lk/chats/:nickname',name:'user-profile-chat', component: () => import('pages/UserProfile/Chat.vue') },
      { path: '/lk/settings',name:'user-profile-settings', component: () => import('pages/UserProfile/Settings.vue') },
      { path: '/lk/friends',name:'user-profile-friends', component: () => import('pages/UserProfile/Friends.vue') },
      { path: '/lk/gifts',name:'user-profile-gifts', component: () => import('pages/UserProfile/GiftHistory.vue') },
      { path: '/lk/vip',name:'user-profile-vip', component: () => import('pages/UserProfile/Vip.vue') },
      { path: '/lk/balance',name:'user-profile-balance', component: () => import('pages/UserProfile/Balance.vue') },

    ]
  },
  {
    path: '/girl',
    component: () => import('layouts/GirlLkLayout.vue'),
    children: [
      { path: 'auth',name:'girl-auth', component: () => import('pages/Girl/Auth.vue') },
      { path: 'lk/info',name:'girl-info', component: () => import('pages/Girl/Info.vue') },
      { path: 'lk/posts',name:'girl-posts', component: () => import('pages/Girl/Posts.vue') },
      { path: 'lk/chats',name:'girl-chats', component: () => import('pages/Girl/Chats.vue') },
      { path: 'lk/chats/:nickname',name:'girl-chat', component: () => import('pages/Girl/Chat.vue') },
      { path: 'lk/albums',name:'girl-albums', component: () => import('pages/Girl/Albums.vue') },
      { path: 'lk/video',name:'girl-video', component: () => import('pages/Girl/Videos.vue') },
      { path: 'lk/gift',name:'girl-gifts', component: () => import('pages/Girl/Gifts.vue') },
      { path: 'lk/fans',name:'girl-fans', component: () => import('pages/Girl/Fans.vue') },


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
