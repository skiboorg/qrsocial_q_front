<template>
  <q-page >

    <main class="index">
      <div class="block-one">
        <div class="container">
          <div class="title">
            <div class="h1">러시아의 아름다운 소녀들이 우리 사이트에서 만나고 소통합니다!</div>
            <div class="h2">선물을 주고, 소녀들을 레벨업하고, 만나고 관계를 시작하세요!
우리의 플랫폼은 사람들을 하나로 모읍니다</div>
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
              <div class="text1">언어 장벽 없음</div>
              <div class="text2">음성에서 텍스트로의 스트림에 대한 자동 번역기. 채팅도 번역됩니다</div>
            </div>
          </div>
          <div class="params">
            <img class="params2" src="~assets/params2.svg" alt="params">
            <div class="text">
              <div class="text1">온라인 스트리밍</div>
              <div class="text2">소녀들은 매일 게임, 요리, 스포츠 또는 사교 활동을 방송합니다.</div>
            </div>
          </div>
          <div class="params">
            <img class="params3" src="~assets/params3.svg" alt="params">
            <div class="text">
              <div class="text1">24/7 전천후 통신</div>
              <div class="text2">24시간 연중무휴 채팅, 스트리밍, 틱톡</div>
            </div>
          </div>
          <div class="params">
            <img class="params4" src="~assets/params4.svg" alt="params">
            <div class="text">
              <div class="text1">VIP 클럽</div>
              <div class="text2">가장 정교한 청중을 위한 프리미엄 기능</div>
            </div>
          </div>
          <div class="params">
            <img class="params5" src="~assets/params5.svg" alt="params">
            <div class="text">
              <div class="text1">여자 프로필</div>
              <div class="text2">소녀들은 기록, 사진, 앨범 및 짧은 비디오를 게시합니다.</div>
            </div>
          </div>
          <div class="params">
            <img class="params6" src="~assets/params6.svg" alt="params">
            <div class="text">
              <div class="text1">목표는 중국 유학</div>
              <div class="text2">모인 기부금으로 소녀들은 중국에 살면서 중국 문화와 언어를 배우게 됩니다.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="block-four">
        <div class="container">
          <div class="top">
            <div class="left">
              <img class="fire" src="~assets/fire.svg" alt="fire">
              <div class="text">우리 아가씨들</div>
            </div>
            <div class="right"><router-link  :to="{name:'girls-page'}">모두보기</router-link> </div>
          </div>
          <div  class="bottom girls-grid">
            <GirlCardIndex v-for="girl in topStreamers" :key="girl.id" :user="girl"/>
          </div>
        </div>
      </div>
      <div class="block-five">
        <div class="container">
          <div class="content">
            <div class="tv">
              <div class="top">
                <div class="left">
                  <img class="icon" src="~assets/tv.svg" alt="tv">
                  <div class="text">스트리밍 및 방송</div>
                </div>

                <div class="right"><router-link  :to="{name:'streams-page'}">모두보기</router-link> </div>
              </div>
              <div class="bottom  ">
                <StreamIndexCard v-for="stream in topStreams" :key="stream.id" :item="stream"/>

              </div>
            </div>
            <div class="tiktok">
              <div class="top">
                <div class="left">
                  <img class="tt" src="~assets/tiktok.svg" alt="tv">
                  <div class="text">최신 여자 반바지</div>
                </div>

                <div class="right"><router-link  :to="{name:'tiktok-page'}">모두보기</router-link> </div>
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
                  <div class="text">소녀의 최신 사진 및 사진 앨범</div>
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
              <div class="title">논평</div>
              </div>
              <Ratings block-type="index"/>
              <div class="text-center q-pa-md">
                 <q-btn @click="$router.push({name:'rating-page'})" unelevated label="모두보기" rounded class="btn full-width text-body1" color="primary"/>
              </div>

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
                  <div class="l">블로그 및 포털 뉴스</div>

                </div>

              <div class="r"><router-link  :to="{name:'blogs-page'}">모두보기</router-link></div>

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
                  <div class="l">자주하는 질문</div>
                </div>
            </div>
            <div class="content">
              <q-list class="text-dark">
                <q-expansion-item
                  group="somegroup"
                  label="1. 플랫폼에 액세스하는 데 요금이 있습니까？"

                  default-opened>
                  <q-card>
                    <q-card-section>
                     - 예, 우리가 소녀들에게 받는 기금을 제공할 때 액세스 권한이 지급됩니다. 웹사이트에서 등록한 후 구독을 선택하고 지불할 수 있습니다.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item group="somegroup" label="2. 소녀들은 얼마나 자주 포스팅을 하나요?">
                  <q-card>
                    <q-card-section>
                      - 모든 소녀에게는 자신만의 스트리밍 및 출판 일정이 있으며, 이는 그녀가 직장이나 학교에서 무엇을 하는지에 달려 있습니다. 이 정보는 소녀들의 개인 메시지에서 찾을 수 있습니다.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item group="somegroup" label="3. 언어 장벽을 어떻게 처리합니까?">
                  <q-card>
                    <q-card-section>
                      - 소녀들과의 온라인 채팅에서 자동 번역기: 모든 메시지는 모국어로, 소녀는 러시아어로 되어 있음을 알 수 있습니다. 우리 동시통역기는 중국어 번역 텍스트가 표시되는 방송에서 작동합니다.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-expansion-item group="somegroup" label="4. 귀하의 플랫폼은 어떤 기능을 제공합니까?">
                  <q-card>
                    <q-card-section>
                      - 플랫폼 및 가이드의 전체 기능은 여기에서 읽을 수 있습니다.
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
          <div class="h1">오늘부터</div>
          <div class="h2">올바른 계획을 선택하고 소녀들과 채팅을 시작하세요</div>
          <div class="content">
            <div class="l">
              <div class="data" :class="{'vip':!tariffSwitchStandart}">
                <div class="one">
                  <div class="name">
                    <div class="switch">
                      <!--                      -->
                      <div class="switch-inner " :class="{'active-right':!tariffSwitchStandart}"></div>
                      <div class="switch-left" @click="tariffSwitchStandart=true"><p class="no-margin text-bold cursor-pointer">단순 관세</p></div>
                      <div class="switch-right" @click="tariffSwitchStandart=false"><p  class="no-margin text-bold cursor-pointer">VIP 구독</p></div>
                    </div>
                  </div>
                  <div class="select">포함된 기능은 다음과 같습니다：</div>
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

                  <div class="btn2">계획을 선택</div>
                </div>
              </div>

            </div>
            <div class="tariff-info">
              <p class="text-dark text-h6">지불 규칙</p>
              <p>구독 결제 단계:</p>
                <p>1. 웹사이트에서 회원가입</p>
                <p>2. 사이트 입력</p>
                <p>3. 구독 선택 및 결제</p>
                <p>4. 당사 플랫폼 사용</p>
              <p class="text-body2">사용자가 만료된 후 구독 갱신 기간을 결정합니다! 모든 구독은 수동으로 갱신되며 자동 구독은 없습니다.
구독이 만료되면 모든 데이터가 저장되며 갱신 후 플랫폼을 다시 사용할 수 있습니다.</p>
              <q-separator spaced="lg"/>
              <p class="text-dark text-h6">우리는 지불을 지원합니다</p>
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
          {name:'24번 소통 7',active:true},
          {name:'생방송 참여 및 선물 증정',active:true},
          {name:'소녀 프로필: 사진, 비디오, 오디오 녹음',active:true},
          {name:'VIP 클럽: 스페셜 앨범, 스트리밍, 비디오',active:false},
          {name:'관심 및 응답 보장 증가',active:false},
        ],
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tristique vestibulum mi.\n' +
          '\n' +
          'Non, amet, sed congue tempus nec porta. Amet eu, aenean nibh blandit venenatis eget sit. Amet, enim cursus semper integer pretium accumsan ac.'
      },
      vipTariff:{
        params:[
          {name:'24번 소통 7',active:true},
          {name:'생방송 참여 및 선물 증정',active:true},
          {name:'소녀 프로필: 사진, 비디오, 오디오 녹음',active:true},
          {name:'VIP 클럽: 스페셜 앨범, 스트리밍, 비디오',active:true},
          {name:'관심 및 응답 보장 증가',active:true},
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
<style lang="sass">
.features
  display: grid
  grid-template-columns: repeat(auto-fit,minmax(220px, 1fr))
  grid-gap: 24px
  margin-top: 24px
  max-width: 1440px
  margin: 0 auto


  &-item
    width: 100%
    height: 356px
    border-radius: 30px
    padding: 20px 20px 50px 20px
    background-size: cover !important
    &.item1
      background: url(~assets/f1.png) no-repeat center
</style>
