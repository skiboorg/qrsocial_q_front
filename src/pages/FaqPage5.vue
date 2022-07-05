<template>
  <div class="documents">
    <div class="navbar">
      <div class="nav cursor-pointer" @click="$router.push('/rules')">平台规则</div>
      <div class="nav cursor-pointer" @click="$router.push('/history')">업데이트 기록</div>
      <div class="nav cursor-pointer" @click="$router.push('/instrustions')">가이드</div>
      <div class="nav active" >VIP 혜택</div>
      <div class="nav cursor-pointer" @click="$router.push('/contacts')">연락하다</div>

    </div>
    <div class="contents">
      <div style="position: sticky;top: 20px" class="left backblock">
        <div class="nav active">贵宾福利</div>
        <div class="nav ">视觉和风格</div>

      </div>
      <div class="right backblock">
        <div class="ul">
           <div class="li">
                <q-avatar size="70px">
                 <img src="~assets/f5/1.png" alt="">
                </q-avatar>
                <div class="">
                  <p class="no-margin text-dark text-bold">VIP直播</p>
                  <p class="no-margin text-grey-7">您可以访问包含最有趣内容的私人 VIP 广播</p>
              </div>
          </div>
           <div class="li">
                <q-avatar size="70px">
                  <img src="~assets/f5/2.png" alt="">
                </q-avatar>
                <div class="">
                  <p class="no-margin text-dark text-bold">专属VIP内容</p>
                  <p class="no-margin text-grey-7">女生为你发布VIP帖子、VIP相册、VIP短视频，内容最火。</p>
              </div>
          </div>
           <div class="li">
                <q-avatar size="70px">
                  <img src="~assets/f5/3.png" alt="">
                </q-avatar>
                <div class="">
                  <p class="no-margin text-dark text-bold">专属礼品</p>
                  <p class="no-margin text-grey-7">可以给女生最专属的礼物，吸引更多关注。</p>
              </div>
          </div>
           <div class="li">
                <q-avatar size="70px">
                  <img src="~assets/f5/4.png" alt="">
                </q-avatar>
                <div class="">
                  <p class="no-margin text-dark text-bold">兴趣增加</p>
                  <p class="no-margin text-grey-7">女孩总是回复你的聊天消息和请求——首先。</p>
              </div>
          </div>
           <div class="li">
                <q-avatar size="70px">
                  <img src="~assets/f5/5.png" alt="">
                </q-avatar>
                <div class="">
                  <p class="no-margin text-dark text-bold">独特的风格</p>
                  <p class="no-margin text-grey-7">您以漂亮的 VIP 图标脱颖而出，您的个人资料上会显示一个专属皇冠，向所有人展示您的状态。</p>
              </div>
          </div>
           <div class="li">
                <q-avatar size="70px">
                  <img src="~assets/f5/6.png" alt="">
                </q-avatar>
                <div class="">
                  <p class="no-margin text-dark text-bold">女孩的最佳查询</p>
                  <p class="no-margin text-grey-7">您有机会向女孩提出最有趣的请求：请求关于某个主题的私人流或私人视频，选择一个主题和女孩的衣服。</p>
              </div>
          </div>
           <div class="li">
                <q-avatar size="70px">
                  <img src="~assets/f5/7.png" alt="">
                </q-avatar>
                <div class="">
                  <p class="no-margin text-dark text-bold">扩展聊天</p>
                  <p class="no-margin text-grey-7">你可以在聊天中附加你的照片并发送给女孩。 VIP贴纸套装可供您使用。</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {

  data () {
    return {

    }
  }
}
</script>
<style lang="sass">

</style>
