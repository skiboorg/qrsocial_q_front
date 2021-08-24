<template>
  <div class="documents">
    <div class="navbar">
      <div class="nav active">平台规则</div>
      <div class="nav cursor-pointer" @click="$router.push('/history')">更新历史</div>
      <div class="nav cursor-pointer" @click="$router.push('/instrustions')">指南</div>
      <div class="nav cursor-pointer" @click="$router.push('/guidevip')">贵宾福利</div>
      <div class="nav cursor-pointer" @click="$router.push('/contacts')">联系人</div>

    </div>
    <div class="contents">
      <div style="position: sticky;top: 20px" class="left backblock">
        <div class="nav active">一般门户规则</div>
        <div class="nav ">沟通规则          </div>
        <div class="nav">帮助和支持</div>
        <div class="nav">付款和费率</div>

      </div>
      <div class="right backblock">
        <div class="ul">

          <div class="title">
            <p class="text1 text-info">1. 一般门户规则</p>
            <p class="text2 text-body2 text-grey-6">
              - 禁止违反俄罗斯联邦和中华人民共和国法律<br>
              - 禁止色情、侮辱、威胁、任何形式的民族主义和纳粹主义<br>
              - 禁止购买和暗示婚姻
            </p>
            <q-separator class="q-mb-md"/>
          </div>

          <div class="title">
            <p class="text1 text-info">2. 沟通规则</p>
            <p class="text2 text-body2 text-grey-6">
              - 嚎叫有礼貌<br>
              - 禁止发誓<br>
              - 如果你不明白这个女孩 - 再问一次
            </p>
            <q-separator class="q-mb-md"/>
          </div>
          <div class="title">
            <p class="text1 text-info">3. 帮助和支持</p>
            <p class="text2 text-body2 text-grey-6">
              - 如果您需要支持，请转到联系人部分
            </p>
            <q-separator class="q-mb-md"/>
          </div>
          <div class="title">
            <p class="text1 text-info">4. 付款和费率</p>
            <p class="text2 text-body2 text-grey-6">
              - 订阅付款发生在注册后<br>
              - 用水晶平衡补给——进入场地后
            </p>

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
