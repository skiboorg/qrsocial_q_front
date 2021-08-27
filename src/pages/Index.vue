<template>
  <q-page >

    <main class="index">
      <div class="block-one">
        <div class="container">
          <div class="title">
            <div class="h1">来自俄罗斯的美丽 女孩在我们的网 站上见面并交流！</div>
            <div class="h2">给予礼物，通过等级提升女孩，结识并开始 一段恋爱关系！我们的平台将人们聚集在一起</div>
          </div>
        </div>

      </div>
      <div class="block-two">
        <div class="container">
          <div class="live">
            <video class="live-video" autoplay loop muted>
              <source src="~assets/vid.mp4" type="video/mp4">

              Your browser does not support HTML video.
            </video>

          </div>
          <div class="vip-block">

          </div>
        </div>
      </div>
      <div class="block-three">
        <div class="container">
          <div class="params">
            <img class="params1" src="~assets/params1.svg" alt="params">
            <div class="text">
              <div class="text1">无语言障碍</div>
              <div class="text2">自动翻译器 在从语音到文本的流上。 聊天也被翻译</div>
            </div>
          </div>
          <div class="params">
            <img class="params2" src="~assets/params2.svg" alt="params">
            <div class="text">
              <div class="text1">在线流媒体</div>
              <div class="text2">女孩们每天都会广播一些东西：游戏、烹饪、运动或社交</div>
            </div>
          </div>
          <div class="params">
            <img class="params3" src="~assets/params3.svg" alt="params">
            <div class="text">
              <div class="text1">24/7 全天候通信</div>
              <div class="text2">和聊天，流，和 tiktok 全天候</div>
            </div>
          </div>
          <div class="params">
            <img class="params4" src="~assets/params4.svg" alt="params">
            <div class="text">
              <div class="text1">贵宾俱乐部</div>
              <div class="text2">为最老练的观众提供的高级功能</div>
            </div>
          </div>
          <div class="params">
            <img class="params5" src="~assets/params5.svg" alt="params">
            <div class="text">
              <div class="text1">)女孩简介</div>
              <div class="text2">女孩发布唱片、照片、专辑和短视频</div>
            </div>
          </div>
          <div class="params">
            <img class="params6" src="~assets/params6.svg" alt="params">
            <div class="text">
              <div class="text1">目标是来中国学习</div>
              <div class="text2">收集到的捐款，女孩将在中国生活，学习中国文化和语言</div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-four">
        <div class="container">
          <div class="top">
            <div class="left">
              <img class="fire" src="~assets/fire.svg" alt="fire">
              <div class="text">我们的辣妹</div>
            </div>
            <div class="right"><router-link  :to="{name:'girls-page'}">查看全部 ></router-link> </div>
          </div>
          <div  class="bottom girls-grid">
            <GirlCardIndex v-for="girl in topStreamers" :key="girl.id" :user="girl"/>
          </div>
        </div>
      </div>
      <div class="block-five">
        <div class="container">
          <div class="content">
            <div v-if="false" class="tv">
              <div class="top">
                <div class="left">
                  <img class="icon" src="~assets/tv.svg" alt="tv">
                  <div class="text">我们的辣妹</div>
                </div>

                <div class="right"><router-link  :to="{name:'streams-page'}">查看全部 ></router-link> </div>
              </div>
              <div class="bottom  ">
                <StreamIndexCard v-for="stream in topStreams" :key="stream.id" :item="stream"/>

              </div>
            </div>
            <div class="tiktok">
              <div class="top">
                <div class="left">
                  <img class="tt" src="~assets/tiktok.svg" alt="tv">
                  <div class="text">最新的女孩短片</div>
                </div>

                <div class="right"><router-link  :to="{name:'tiktok-page'}">查看全部 ></router-link> </div>
              </div>
              <div class="bottom tiktok-grid">


				<div class="block blur cursor-pointer text-dark" @click="openVideo(index)" v-for="(video,index) in videos" :key="index">

							<div class="text-caption text-dark">{{ new Date (video.created_at).toLocaleDateString()}}</div>
<!--							<div class="time">5 minutes ago</div>-->
							<img style="    width: 180px;    height: 240px;    object-fit: contain; " :src="video.image" alt="avatar">

<!--							<div class="params">-->
<!--								<img src="~assets/henders.svg" alt="hender">-->
<!--								<div class="fire"><img src="~assets/fire.svg" alt="fire">51</div>-->
<!--								<div class="people"><img src="~assets/people.svg" alt="people">17</div>-->
<!--							</div>-->
          <p class="q-mb-sm text-body2">{{video.title}}</p>
          <div class="flex items-center">
             <q-avatar class="q-mr-sm">
               <img :src="video.owner.avatar" alt="">
              </q-avatar>
            <div class="">
              <p class="no-margin text-bold text-body2">{{video.owner.fio}}</p>
							<p class="no-margin text-caption">@{{video.owner.nickname}}</p>
            </div>

          </div>


				</div>

              </div>
            </div>
            <div class="photoblock">
              <div class="top">
                <div class="left">
                  <img class="ph" src="~assets/photo.svg" alt="fire">
                  <div class="text">女孩的最新照片和相册</div>
                </div>

              </div>

              <div class="bottom">
<!--                v-touch-pan.horizontal.prevent.mouse="handlePan"-->
                <q-scroll-area ref="scrollAreaRef"  style="height: 270px; max-width: 100%;">
      <div class="row no-wrap">
        <GirlPhotosCard @click="cur_gallery=index" v-for="(item,index) in gallery" :key="index" :item="item" :active="cur_gallery===index"/>
      </div>
    </q-scroll-area>



              </div>
              <div v-if="gallery.length>0" class="bottom2">
                <div ></div>
                <div class="photo" v-for="(img,index) in gallery[cur_gallery].images" :key="index">
                  <img style="width: 100px;height: 100px;object-fit: cover" class="image" :src="img.image" alt="girls">
                </div>

              </div>
            </div>
          </div>
          <div class="sidebar ">
            <div class="right favorite-block">
              <div class="flex items-center q-pa-lg">
                <img class="q-mr-md " src="~assets/rating.svg" alt="fire">
              <div class="title">门户评级</div>
              </div>
              <Ratings block-type="index"/>
              <q-btn @click="$router.push({name:'rating-page'})"  label="查看全部" class="btn full-width text-h6" color="primary"/>
            </div>

          </div>
        </div>
      </div>
      <div class="block-six">
        <div class="container">
          <div class="left">
            <div class="top">
                <div class="flex items-center">
                   <img class="ph q-mr-md " src="~assets/pin.svg" alt="fire">
                  <div class="l">我们的博客和门户新闻</div>

                </div>

              <div class="r"><router-link  :to="{name:'blogs-page'}">查看全部 ></router-link></div>

            </div>
            <div class="content">
              <div class="l" v-for="post in posts" :key="post.id">
                <router-link :to="`/blogs/${post.name_slug}`">
                  <img class="image" style=" height: 200px; object-fit: cover" :src="post.image" alt="picture">
                  <div class="text-h6 text-dark">{{post.short_description}}</div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="top">
              <div class="flex items-center">
                  <img class="ph q-mr-md " src="~assets/info.svg" alt="fire">
                  <div class="l">常见问题</div>
                </div>
            </div>
            <div class="content">
              <q-list class="text-dark">
                <q-expansion-item
                  group="somegroup"
                  label="访问您的平台是否需要付费？"

                  default-opened>
                  <q-card>
                    <q-card-section>
                     - 是的，访问是付费的，因为我们为我们的女孩提供了收到的资金。 您可以在网站上注册后选择并支付订阅费用。
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item group="somegroup" label="女孩多久发一次帖子？">
                  <q-card>
                    <q-card-section>
                      - 每个女孩都有自己的流媒体和出版物时间表，这仅取决于她在工作或学校的工作。 这些信息可以在女孩自己的私信中找到。
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item group="somegroup" label="你是如何处理语言障碍问题的？">
                  <q-card>
                    <q-card-section>
                      - 在与女孩的在线聊天中，一个自动翻译器：您会看到所有消息都是您的母语，而女孩则是俄语。
我们的同声翻译在广播中工作，在广播中显示中文翻译文本。
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item group="somegroup" label="您的平台提供哪些功能？">
                  <q-card>
                    <q-card-section>
                      - 可以在此处阅读平台和指南的全部功能。
                    </q-card-section>
                  </q-card>
                </q-expansion-item>


              </q-list>
            </div>
          </div>
        </div>
      </div>
      <div class="block-seven">
        <div class="container">
          <div class="h1">今天开始</div>
          <div class="h2">选择正确的计划并开始与女孩聊天</div>
          <div class="content">
            <div class="l">
              <div class="data" :class="{'vip':!tariffSwitchStandart}">
                <div class="one">
                  <div class="name">
                    <div class="switch">
                      <!--                      -->
                      <div class="switch-inner " :class="{'active-right':!tariffSwitchStandart}"></div>
                      <div class="switch-left" @click="tariffSwitchStandart=true"><p class="no-margin text-bold cursor-pointer">简单的资费</p></div>
                      <div class="switch-right" @click="tariffSwitchStandart=false"><p  class="no-margin text-bold cursor-pointer">VIP订阅</p></div>
                    </div>
                  </div>
                  <div class="select">包括的功能有：</div>
                  <div class="params " :class="{active:item.active}" v-for="item in tariffSwitchStandart ? standartTariff.params : vipTariff.params">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.2" x="1" y="1" width="26" height="26" rx="3.42105" stroke="#F64953" stroke-width="2"/>
                      <g clip-path="url(#clip0)">
                        <path d="M9.3638 15.2574C9.07605 14.9696 9.07604 14.5031 9.3638 14.2153L9.40247 14.1766C9.69022 13.8889 10.1568 13.8889 10.4445 14.1766L12.6731 16.4052L17.7015 11.3769C17.9892 11.0891 18.4558 11.0891 18.7435 11.3769L18.7924 11.4257C19.0801 11.7134 19.0801 12.1799 18.7925 12.4677L13.2056 18.0569C12.9179 18.3447 12.4512 18.3448 12.1634 18.057L9.3638 15.2574Z" fill="#F64953"/>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="10.3158" height="10.3158" fill="white" transform="translate(8.8418 8.84229)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div class="text">{{item.name}}</div>
                  </div  >
                  <q-separator spaced="lg"/>
                  <div class="flex items-center justify-between">
                    <q-select label-color="dark" color="primary"  rounded outlined v-model="tariff" :options="tariffSwitchStandart?standartOptions:vipOptions"  >
                      <template v-slot:option="scope">
                        <q-item v-bind="scope.itemProps">
                          <q-item-section>
                            <q-item-label v-html="scope.opt.label" />

                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                    <p class="q-mb-none text-bold text-dark text-h5"><span class="text-body1 text-bold">Y</span>{{tariff.price}}.00</p>
                  </div>

                  <div class="btn2">选择一个计划</div>
                </div>
              </div>

            </div>
            <div class="tariff-info">
              <p class="text-dark text-h6">支付规则</p>
              <p>订阅付款步骤：</p>

                <p>1. 您在网站上注册</p>
                <p>2. 进入站点</p>
                <p>3. 选择订阅并付款</p>
                <p>4. 使用我们的平台</p>

              <p class="text-body2">用户到期后，您决定续订多长时间！ 每次订阅都是手动更新的，我们没有自动订阅。<br>
当订阅到期时，您的所有数据都会被保存，续订后您可以再次使用该平台。</p>
              <q-separator spaced="lg"/>
              <p class="text-dark text-h6">我们支持付款</p>
              <div class="flex justify-between">
                <img src="~assets/ali-p.png" alt="">
                <img src="~assets/we-p.png" alt="">
              </div>
            </div>


          </div>
        </div>
      </div>
    </main>
    <q-dialog v-model="videoModal">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-dark">
          <div class="text-h6">{{videos[cur_video].title}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
        <video  controls>
              <source :src="videos[cur_video].file" type="video/mp4">

              Your browser does not support HTML video.
            </video>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="payModalActive" persistent transition-show="scale" transition-hide="scale">
    <q-card class="cursor-pointer" style="border-radius: 24px;width: 800px; max-width: 80vw;">
      <q-card-section class="row items-center q-pb-none text-dark">
        <div class="text-h6">女孩目录</div>

      </q-card-section>
      <q-separator spaced="md"/>



      <q-card-section>
      <PaymentBlock />




      </q-card-section>
    </q-card>
  </q-dialog>

  </q-page>
</template>

<script>
import GirlCardIndex from "components/cards/GirlCardIndex";
import GirlCardIndexIndex from "components/cards/GirlCardIndex";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {mapGetters} from 'vuex'
// Import Swiper styles
import 'swiper/swiper.scss';
import StreamIndexCard from "components/cards/StreamIndexCard";
import TiktokCardIndex from "components/cards/TiktokCardIndex";
import GirlPhotosCard from "components/cards/GirlPhotosCard";
import PaymentBlock from "components/PaymentBlockIndex";
import Ratings from "components/Ratings";

export default {
  components: {
    GirlCardIndexIndex,
    GirlPhotosCard,
    TiktokCardIndex,
    StreamIndexCard, GirlCardIndex,
    PaymentBlock,
    Ratings,
    Swiper,
    SwiperSlide,},
  data () {
    return {
      videoModal:false,
      videos:[],
      gallery:[],
      cur_video:0,
      cur_gallery:0,
      payModalActive:false,
      tariffSwitchStandart:true,
      tariff:{label:'3个月',price:300},
      standartOptions:[
        {label:'3个月',price:300},
        {label:'6个月',price:600},
        {label:'12个月',price:1200},
      ],
      vipOptions:[
        {label:'v3个月',price:1300},
        {label:'v6个月',price:1600},
        {label:'v12个月',price:11200},
      ],
      standartTariff:{
        params:[
          {name:'沟通 24 乘 7',active:true},
          {name:'参与直播并赠送礼物',active:true},
          {name:'女孩简介：照片、视频、录音',active:true},
          {name:'VIP 俱乐部：特别专辑、流媒体、视频',active:false},
          {name:'增加关注和响应保证',active:false},
        ],
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tristique vestibulum mi.\n' +
          '\n' +
          'Non, amet, sed congue tempus nec porta. Amet eu, aenean nibh blandit venenatis eget sit. Amet, enim cursus semper integer pretium accumsan ac.'
      },
      vipTariff:{
        params:[
          {name:'沟通 24 乘 7',active:true},
          {name:'参与直播并赠送礼物',active:true},
          {name:'女孩简介：照片、视频、录音',active:true},
          {name:'VIP 俱乐部：特别专辑、流媒体、视频',active:true},
          {name:'增加关注和响应保证',active:true},
        ],
        text:'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tristique vestibulum mi.\n' +
          '\n' +
          'Non, amet, sed congue tempus nec porta. Amet eu, aenean nibh blandit venenatis eget sit. Amet, enim cursus semper integer pretium accumsan ac.'
      },
      posts:[],

      sliderOption: {
        //slidesPerView: 2,
        spaceBetween: 0,
        slidesPerView:5,
        loop:true,
        centeredSlides: true,

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          500: {
            slidesPerView: 5,
            spaceBetween: 10,
            centeredSlides: false
          }
        }
      }
    }
  },
  async beforeMount() {
    const response_post = await this.$api.get(`/api/v1/blog/get_items?is_at_index=true`)
    this.posts = response_post.data

    const response_videos = await this.$api.get(`/api/v1/gallery/get_videos?type=index`)
    this.videos = response_videos.data
    const response_gallery = await this.$api.get(`/api/v1/gallery/get_last_gallery`)
    this.gallery = response_gallery.data

    this.payModalActive = this.$auth.loggedIn && !this.user.is_verified


  },
  computed:{
    ...mapGetters('data',['topStreamers','topStreams','topTickToks']),
    ...mapGetters('auth',['user']),

  },
  methods:{
    openVideo(index){
      this.cur_video = index
      this.videoModal= true
    },
    handlePan({ evt, ...newInfo }) {
        let value = newInfo

        if (newInfo.isFirst) {
          console.log(value)
          console.log(this.$refs.scrollAreaRef)
          this.$refs.scrollAreaRef.setScrollPosition('horizontal', value.position.left, 10)
        }
        else if (newInfo.isFinal) {
          console.log(value)
        }
      }
  }
}
</script>
