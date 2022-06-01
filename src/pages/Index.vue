<template>
  <q-page >

    <main id="top" class="index">
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
            <img style="width: 100%;height: auto;border-radius: 30px" src="http://cdn.discordapp.com/attachments/525021707027873822/965946791419842600/611.jpg" alt="">
<!--            <video class="live-video" autoplay loop muted>-->
<!--              <source src="/vid.mp4" type="video/mp4">-->

<!--              Your browser does not support HTML video.-->
<!--            </video>-->

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
                    <q-select label-color="dark" color="primary"
                              rounded outlined v-model="tariff" :options="tariffSwitchStandart?standartOptions:vipOptions"  >
                      <template v-slot:option="scope">
                        <q-item v-bind="scope.itemProps">
                          <q-item-section>
                            <q-item-label v-html="scope.opt.label" />

                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                    <p class="q-mb-none text-bold text-dark text-h5">
                      <span class="text-body1 text-bold">원화</span>{{tariff.price}}</p>
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
              <div class="flex justify-between q-mb-md">
                <img src="~assets/p1.png" alt="">
                <img src="~assets/p2.png" alt="">

              </div>
              <div class="flex justify-between">
                <img src="~assets/p3.png" alt="">
                <img src="~assets/p4.png" alt="">

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
  <div class="side-bar gt-sm">
    <div class="">
      <router-link class="side-bar__item" to="/contacts">
              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.58365 10.3888C8.3723 10.3903 8.16276 10.3498 7.9672 10.2696C7.77165 10.1894 7.59398 10.0711 7.44453 9.92169C7.29507 9.77223 7.17682 9.59457 7.09662 9.39901C7.01643 9.20346 6.97591 8.99391 6.9774 8.78256C6.9774 7.88506 7.68615 7.17506 8.58365 7.17506C9.4799 7.17506 10.1899 7.88506 10.1899 8.78256C10.1899 9.67881 9.4799 10.3888 8.58365 10.3888ZM16.9162 10.3888C16.7048 10.3903 16.4953 10.3498 16.2997 10.2696C16.1041 10.1894 15.9265 10.0711 15.777 9.92169C15.6276 9.77223 15.5093 9.59457 15.4291 9.39901C15.3489 9.20346 15.3084 8.99391 15.3099 8.78256C15.3099 7.88506 16.0199 7.17506 16.9162 7.17506C17.8137 7.17506 18.5224 7.88506 18.5224 8.78256C18.5224 9.67881 17.8137 10.3888 16.9162 10.3888V10.3888ZM6.27865 20.0188L7.1724 19.4738C8.18444 18.8568 9.38278 18.6193 10.5537 18.8038C10.8187 18.8451 11.0362 18.8776 11.2037 18.8988C11.7112 18.9663 12.2287 19.0001 12.7499 19.0001C18.2749 19.0001 22.6249 15.2226 22.6249 10.7501C22.6249 6.27756 18.2749 2.50006 12.7499 2.50006C7.2249 2.50006 2.8749 6.27756 2.8749 10.7501C2.8749 12.4576 3.4999 14.0913 4.6649 15.4763C4.7249 15.5476 4.8149 15.6476 4.9324 15.7701C5.42374 16.2818 5.80057 16.8921 6.03786 17.5607C6.27514 18.2292 6.36745 18.9406 6.30865 19.6476L6.2774 20.0188H6.27865ZM5.49115 23.4276C5.29454 23.5506 5.06759 23.6164 4.83568 23.6178C4.60377 23.6192 4.37604 23.5561 4.17797 23.4355C3.9799 23.3148 3.81929 23.1415 3.71411 22.9348C3.60893 22.7281 3.56333 22.4962 3.5824 22.2651L3.8174 19.4401C3.84688 19.0866 3.80083 18.731 3.68229 18.3967C3.56376 18.0624 3.37546 17.7572 3.1299 17.5013C2.99879 17.3667 2.87206 17.2279 2.7499 17.0851C1.2574 15.3088 0.374903 13.1188 0.374903 10.7501C0.374903 4.81256 5.9149 6.10352e-05 12.7499 6.10352e-05C19.5849 6.10352e-05 25.1249 4.81256 25.1249 10.7501C25.1249 16.6876 19.5849 21.5001 12.7499 21.5001C12.1124 21.5001 11.4874 21.4588 10.8762 21.3776C10.6387 21.3454 10.4016 21.3104 10.1649 21.2726C9.57926 21.1802 8.97985 21.2989 8.47365 21.6076L5.4899 23.4276H5.49115Z" />
              </svg>
              피드백
      </router-link>
        <router-link class="side-bar__item" to="/lk/balance">
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91653 23.5626H4.3332C4.02931 23.5626 3.73786 23.4418 3.52297 23.227C3.30809 23.0121 3.18737 22.7206 3.18737 22.4167V17.8334C3.18737 17.5295 3.06665 17.2381 2.85176 17.0232C2.63687 16.8083 2.34543 16.6876 2.04153 16.6876C1.73764 16.6876 1.44619 16.8083 1.23131 17.0232C1.01642 17.2381 0.8957 17.5295 0.8957 17.8334V22.4167C0.8957 23.3284 1.25786 24.2028 1.90252 24.8474C2.54718 25.4921 3.42152 25.8542 4.3332 25.8542H8.91653C9.22043 25.8542 9.51187 25.7335 9.72676 25.5186C9.94164 25.3037 10.0624 25.0123 10.0624 24.7084C10.0624 24.4045 9.94164 24.1131 9.72676 23.8982C9.51187 23.6833 9.22043 23.5626 8.91653 23.5626ZM24.9582 16.6876C24.6543 16.6876 24.3629 16.8083 24.148 17.0232C23.9331 17.2381 23.8124 17.5295 23.8124 17.8334V22.4167C23.8124 22.7206 23.6916 23.0121 23.4768 23.227C23.2619 23.4418 22.9704 23.5626 22.6665 23.5626H18.0832C17.7793 23.5626 17.4879 23.6833 17.273 23.8982C17.0581 24.1131 16.9374 24.4045 16.9374 24.7084C16.9374 25.0123 17.0581 25.3037 17.273 25.5186C17.4879 25.7335 17.7793 25.8542 18.0832 25.8542H22.6665C23.5782 25.8542 24.4526 25.4921 25.0972 24.8474C25.7419 24.2028 26.104 23.3284 26.104 22.4167V17.8334C26.104 17.5295 25.9833 17.2381 25.7684 17.0232C25.5535 16.8083 25.2621 16.6876 24.9582 16.6876ZM22.6665 0.645905H18.0832C17.7793 0.645905 17.4879 0.766626 17.273 0.981511C17.0581 1.1964 16.9374 1.48784 16.9374 1.79174C16.9374 2.09563 17.0581 2.38708 17.273 2.60196C17.4879 2.81685 17.7793 2.93757 18.0832 2.93757H22.6665C22.9704 2.93757 23.2619 3.05829 23.4768 3.27318C23.6916 3.48806 23.8124 3.77951 23.8124 4.0834V8.66674C23.8124 8.97063 23.9331 9.26208 24.148 9.47696C24.3629 9.69185 24.6543 9.81257 24.9582 9.81257C25.2621 9.81257 25.5535 9.69185 25.7684 9.47696C25.9833 9.26208 26.104 8.97063 26.104 8.66674V4.0834C26.104 3.17172 25.7419 2.29738 25.0972 1.65272C24.4526 1.00807 23.5782 0.645905 22.6665 0.645905ZM2.04153 9.81257C2.34543 9.81257 2.63687 9.69185 2.85176 9.47696C3.06665 9.26208 3.18737 8.97063 3.18737 8.66674V4.0834C3.18737 3.77951 3.30809 3.48806 3.52297 3.27318C3.73786 3.05829 4.02931 2.93757 4.3332 2.93757H8.91653C9.22043 2.93757 9.51187 2.81685 9.72676 2.60196C9.94164 2.38708 10.0624 2.09563 10.0624 1.79174C10.0624 1.48784 9.94164 1.1964 9.72676 0.981511C9.51187 0.766626 9.22043 0.645905 8.91653 0.645905H4.3332C3.42152 0.645905 2.54718 1.00807 1.90252 1.65272C1.25786 2.29738 0.8957 3.17172 0.8957 4.0834V8.66674C0.8957 8.97063 1.01642 9.26208 1.23131 9.47696C1.44619 9.69185 1.73764 9.81257 2.04153 9.81257ZM11.2082 5.22924H6.62487C6.32097 5.22924 6.02953 5.34996 5.81464 5.56484C5.59976 5.77973 5.47903 6.07118 5.47903 6.37507V10.9584C5.47903 11.2623 5.59976 11.5537 5.81464 11.7686C6.02953 11.9835 6.32097 12.1042 6.62487 12.1042H11.2082C11.5121 12.1042 11.8035 11.9835 12.0184 11.7686C12.2333 11.5537 12.354 11.2623 12.354 10.9584V6.37507C12.354 6.07118 12.2333 5.77973 12.0184 5.56484C11.8035 5.34996 11.5121 5.22924 11.2082 5.22924ZM10.0624 9.81257H7.7707V7.5209H10.0624V9.81257ZM15.7915 12.1042H20.3749C20.6788 12.1042 20.9702 11.9835 21.1851 11.7686C21.4 11.5537 21.5207 11.2623 21.5207 10.9584V6.37507C21.5207 6.07118 21.4 5.77973 21.1851 5.56484C20.9702 5.34996 20.6788 5.22924 20.3749 5.22924H15.7915C15.4876 5.22924 15.1962 5.34996 14.9813 5.56484C14.7664 5.77973 14.6457 6.07118 14.6457 6.37507V10.9584C14.6457 11.2623 14.7664 11.5537 14.9813 11.7686C15.1962 11.9835 15.4876 12.1042 15.7915 12.1042ZM16.9374 7.5209H19.229V9.81257H16.9374V7.5209ZM11.2082 14.3959H6.62487C6.32097 14.3959 6.02953 14.5166 5.81464 14.7315C5.59976 14.9464 5.47903 15.2378 5.47903 15.5417V20.1251C5.47903 20.429 5.59976 20.7204 5.81464 20.9353C6.02953 21.1502 6.32097 21.2709 6.62487 21.2709H11.2082C11.5121 21.2709 11.8035 21.1502 12.0184 20.9353C12.2333 20.7204 12.354 20.429 12.354 20.1251V15.5417C12.354 15.2378 12.2333 14.9464 12.0184 14.7315C11.8035 14.5166 11.5121 14.3959 11.2082 14.3959ZM10.0624 18.9792H7.7707V16.6876H10.0624V18.9792ZM15.7915 17.8334C16.0954 17.8334 16.3869 17.7127 16.6018 17.4978C16.8166 17.2829 16.9374 16.9915 16.9374 16.6876C17.2413 16.6876 17.5327 16.5668 17.7476 16.352C17.9625 16.1371 18.0832 15.8456 18.0832 15.5417C18.0832 15.2378 17.9625 14.9464 17.7476 14.7315C17.5327 14.5166 17.2413 14.3959 16.9374 14.3959H15.7915C15.4876 14.3959 15.1962 14.5166 14.9813 14.7315C14.7664 14.9464 14.6457 15.2378 14.6457 15.5417V16.6876C14.6457 16.9915 14.7664 17.2829 14.9813 17.4978C15.1962 17.7127 15.4876 17.8334 15.7915 17.8334ZM20.3749 14.3959C20.071 14.3959 19.7795 14.5166 19.5646 14.7315C19.3498 14.9464 19.229 15.2378 19.229 15.5417V18.9792C18.9251 18.9792 18.6337 19.1 18.4188 19.3148C18.2039 19.5297 18.0832 19.8212 18.0832 20.1251C18.0832 20.429 18.2039 20.7204 18.4188 20.9353C18.6337 21.1502 18.9251 21.2709 19.229 21.2709H20.3749C20.6788 21.2709 20.9702 21.1502 21.1851 20.9353C21.4 20.7204 21.5207 20.429 21.5207 20.1251V15.5417C21.5207 15.2378 21.4 14.9464 21.1851 14.7315C20.9702 14.5166 20.6788 14.3959 20.3749 14.3959ZM15.7915 18.9792C15.5649 18.9792 15.3434 19.0464 15.1549 19.1723C14.9665 19.2982 14.8196 19.4772 14.7329 19.6866C14.6462 19.896 14.6235 20.1263 14.6677 20.3486C14.7119 20.5709 14.8211 20.775 14.9813 20.9353C15.1416 21.0955 15.3457 21.2047 15.568 21.2489C15.7903 21.2931 16.0207 21.2704 16.23 21.1837C16.4394 21.097 16.6184 20.9501 16.7443 20.7617C16.8702 20.5732 16.9374 20.3517 16.9374 20.1251C16.9374 19.8212 16.8166 19.5297 16.6018 19.3148C16.3869 19.1 16.0954 18.9792 15.7915 18.9792Z" />
</svg>

              재충전
      </router-link>
        <router-link class="side-bar__item" to="/guidevip">
              <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.25 20.25H25.25V22.75H0.25V20.25ZM11.5 6.5H14V16.5H11.5V6.5ZM7.70625 6.5H10.3625L6.63 16.455H4.13L0.3975 6.5H3.05375L5.38 12.8912L7.70625 6.5ZM19 14V16.5H16.5V6.5H21.5C22.4946 6.5 23.4484 6.89509 24.1517 7.59835C24.8549 8.30161 25.25 9.25544 25.25 10.25C25.25 11.2446 24.8549 12.1984 24.1517 12.9017C23.4484 13.6049 22.4946 14 21.5 14H19ZM19 9V11.5H21.5C21.8315 11.5 22.1495 11.3683 22.3839 11.1339C22.6183 10.8995 22.75 10.5815 22.75 10.25C22.75 9.91848 22.6183 9.60054 22.3839 9.36612C22.1495 9.1317 21.8315 9 21.5 9H19ZM0.25 0.25H25.25V2.75H0.25V0.25Z" />
</svg>

              요인
      </router-link>
      <router-link class="side-bar__item" to="/instrustions">

        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.93015 4.88372C8.47265 4.59372 9.0564 4.50122 9.62515 4.50122C10.2826 4.50122 11.0476 4.71747 11.6651 5.22247C12.3114 5.75247 12.7501 6.56497 12.7501 7.62497C12.7501 8.84372 11.8889 9.50497 11.4039 9.87747L11.2977 9.95997C10.7677 10.3762 10.5626 10.5987 10.5626 11.0625C10.5626 11.3111 10.4639 11.5496 10.2881 11.7254C10.1122 11.9012 9.87379 12 9.62515 12C9.37651 12 9.13805 11.9012 8.96224 11.7254C8.78642 11.5496 8.68765 11.3111 8.68765 11.0625C8.68765 9.64497 9.5764 8.92747 10.1401 8.48497C10.7814 7.98122 10.8751 7.86872 10.8751 7.62497C10.8751 7.12872 10.6889 6.84747 10.4752 6.67372C10.2327 6.48278 9.93374 6.3777 9.62515 6.37497C9.2564 6.37497 9.00265 6.43622 8.81265 6.53747C8.6339 6.63247 8.44515 6.79997 8.26265 7.13747C8.20397 7.24581 8.12452 7.34153 8.02884 7.41917C7.93316 7.4968 7.82313 7.55484 7.70502 7.58995C7.58692 7.62506 7.46306 7.63657 7.34051 7.62381C7.21795 7.61105 7.09912 7.57428 6.99078 7.5156C6.88243 7.45691 6.78671 7.37746 6.70908 7.28179C6.63144 7.18611 6.57341 7.07608 6.5383 6.95797C6.50319 6.83987 6.49168 6.716 6.50444 6.59345C6.5172 6.4709 6.55397 6.35206 6.61265 6.24372C6.94265 5.63622 7.37765 5.17747 7.93015 4.88247V4.88372Z" />
<path d="M9.625 15.75C9.95652 15.75 10.2745 15.6183 10.5089 15.3839C10.7433 15.1495 10.875 14.8315 10.875 14.5C10.875 14.1685 10.7433 13.8505 10.5089 13.6161C10.2745 13.3817 9.95652 13.25 9.625 13.25C9.29348 13.25 8.97554 13.3817 8.74112 13.6161C8.5067 13.8505 8.375 14.1685 8.375 14.5C8.375 14.8315 8.5067 15.1495 8.74112 15.3839C8.97554 15.6183 9.29348 15.75 9.625 15.75Z" />
<path d="M9.62505 0.75C8.04817 0.749735 6.49671 1.14722 5.11422 1.90568C3.73173 2.66413 2.56289 3.75905 1.71585 5.08911C0.868817 6.41917 0.370956 7.94139 0.268341 9.51492C0.165727 11.0885 0.461674 12.6624 1.1288 14.0912L0.222546 17.6437C0.156028 17.9047 0.158082 18.1784 0.228509 18.4383C0.298936 18.6983 0.435344 18.9356 0.624502 19.1272C0.813659 19.3189 1.04914 19.4584 1.30811 19.5323C1.56708 19.6061 1.84074 19.6118 2.10255 19.5487C3.04005 19.3237 4.4813 18.9775 5.76505 18.6712C7.03965 19.246 8.42667 19.5284 9.82453 19.4977C11.2224 19.4671 12.5957 19.1241 13.8439 18.494C15.092 17.8639 16.1834 16.9626 17.0382 15.856C17.8929 14.7495 18.4893 13.4658 18.7837 12.099C19.0781 10.7321 19.0631 9.31673 18.7396 7.95645C18.4162 6.59617 17.7926 5.32546 16.9146 4.23737C16.0365 3.14929 14.9261 2.2714 13.6648 1.66798C12.4035 1.06457 11.0232 0.750917 9.62505 0.75ZM2.12505 10.125C2.12554 8.49412 2.65761 6.90785 3.64065 5.60654C4.62368 4.30523 6.0041 3.35981 7.57272 2.91354C9.14135 2.46726 10.8127 2.54445 12.3335 3.1334C13.8543 3.72236 15.1417 4.79099 16.0006 6.17736C16.8596 7.56374 17.2432 9.1923 17.0933 10.8163C16.9435 12.4403 16.2684 13.9711 15.1704 15.177C14.0723 16.3828 12.6111 17.1979 11.0082 17.4986C9.4053 17.7994 7.74805 17.5695 6.28755 16.8437L5.9838 16.6925L5.65255 16.7712L2.16755 17.605C2.41755 16.63 2.74505 15.34 3.03005 14.22L3.11755 13.875L2.95505 13.5587C2.40759 12.4971 2.12295 11.3195 2.12505 10.125Z" />
<path d="M15.8751 23.25C13.4126 23.25 11.1738 22.3013 9.5001 20.75H9.6251C10.5226 20.75 11.3938 20.6388 12.2263 20.4288C13.3063 21.0313 14.5513 21.375 15.8763 21.375C17.0763 21.375 18.2088 21.0938 19.2126 20.5938L19.5163 20.4425L19.8476 20.5213C20.9988 20.7963 22.3038 21.0775 23.2726 21.2838C23.0526 20.345 22.7538 19.0888 22.4701 17.97L22.3826 17.625L22.5451 17.3088C23.0926 16.2471 23.3772 15.0696 23.3751 13.875C23.3757 12.6211 23.0617 11.3871 22.4618 10.286C21.8619 9.18487 20.9953 8.2519 19.9413 7.57254C19.7209 6.6797 19.3847 5.8195 18.9413 5.01379C20.1823 5.44348 21.3191 6.12898 22.2783 7.02591C23.2375 7.92284 23.9976 9.0112 24.5095 10.2205C25.0213 11.4299 25.2736 12.7332 25.2498 14.0462C25.226 15.3592 24.9267 16.6526 24.3713 17.8425C24.6876 19.1025 25.0088 20.4675 25.2113 21.3463C25.2708 21.601 25.265 21.8666 25.1946 22.1185C25.1242 22.3704 24.9913 22.6004 24.8084 22.7874C24.6254 22.9743 24.3983 23.1121 24.148 23.1879C23.8977 23.2638 23.6323 23.2752 23.3763 23.2213C22.4676 23.0313 21.0388 22.7263 19.7351 22.4213C18.5221 22.9693 17.2061 23.2518 15.8751 23.25Z" />
</svg>


              FAQ
      </router-link>
      <a href="#top" class="side-bar__item cursor-pointer">

        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9149 14.2839L11.4456 1.22949C11.1019 0.756836 10.3983 0.756836 10.0572 1.22949L0.585269 14.2839C0.561959 14.316 0.547996 14.354 0.544925 14.3935C0.541855 14.4331 0.549798 14.4727 0.567875 14.508C0.585951 14.5434 0.613454 14.573 0.647336 14.5936C0.681218 14.6143 0.720154 14.6251 0.759829 14.625H2.77399C2.91095 14.625 3.03986 14.5579 3.12042 14.4478L10.7501 3.93115L18.3797 14.4478C18.4603 14.5579 18.5892 14.625 18.7261 14.625H20.7403C20.9149 14.625 21.0169 14.4263 20.9149 14.2839Z" />
</svg>
TOP
      </a>

    </div>
  </div>
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
      tariff:{label:'3', price: '67,700.00'},
      standartOptions:[
        {label:'3',price:'67,700.00'},
        {label:'6',price:'118,800.00'},
        {label:'12',price:'207,800.00'},
      ],
      vipOptions:[
        {label:'3',price:'315,500.00'},
        {label:'6',price:'815,800.00'},
        {label:'12',price:'1,355,500.00'},
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
  watch:{
    'tariffSwitchStandart'(val){
      console.log(val)
      console.log(this.tariff)

      val ? this.tariff = {label:'3',price:'67,700.00'} : this.tariff = {label:'3',price:'315,500.00'},
      console.log(this.tariff)
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

.side-bar
  position: fixed
  right: 0px
  bottom: 50px
  background: #FFFFFF
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1)
  border-radius: 5px 0px 0px 5px
  padding: 13px
  z-index: 1000
  svg
    margin-bottom: 5px
    fill: #AEADC6
  &__item
    font-weight: 400
    font-size: 10px !important
    color: #AEADC6
    display: flex
    flex-direction: column
    border-bottom: 1px solid #ECECEC
    align-items: center
    justify-content: center
    padding-bottom: 8px
    margin-bottom: 14px
    &:last-child
      margin-bottom: 0
      padding-bottom: 0
      border-bottom: none

    &:hover
      color: #F64953
      svg
        fill: #F64953

</style>
