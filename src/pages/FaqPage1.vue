<template>
  <div class="documents">
    <div class="navbar">
      <div class="nav active">平台规则</div>
      <div class="nav cursor-pointer" @click="$router.push('/history')">업데이트 기록</div>
      <div class="nav cursor-pointer" @click="$router.push('/instrustions')">가이드</div>
      <div class="nav cursor-pointer" @click="$router.push('/guidevip')">VIP 혜택</div>
      <div class="nav cursor-pointer" @click="$router.push('/contacts')">연락하다</div>

    </div>
    <div class="contents">
      <div style="position: sticky;top: 20px" class="left backblock">
      <div class="nav active">일반 포털 규칙</div>
         <div class="nav ">통신 규칙</div>
         <div class="nav">도움말 및 지원</div>
         <div class="nav">지불 및 요금</div>

      </div>
      <div class="right backblock">
        <div class="ul">

          <div class="title">
            <p class="text1 text-info">1. 일반 포털 규칙</p>
            <p class="text2 text-body2 text-grey-6">
         - 러시아연방 및 중화인민공화국 법률 위반 금지<br>
               - 음란물, 모욕, 위협, 모든 형태의 민족주의 및 나치즘 금지<br>
               - 구매 및 결혼을 암시하는 금지
            </p>
            <q-separator class="q-mb-md"/>
          </div>

          <div class="title">
            <p class="text1 text-info">2. 커뮤니케이션 규칙</p>
            <p class="text2 text-body2 text-grey-6">
          - 정중하게 하울링<br>
               - 욕설 금지<br>
               - 당신이 소녀를 이해하지 못한다면 - 다시 질문하십시오
            </p>
            <q-separator class="q-mb-md"/>
          </div>
          <div class="title">
            <p class="text1 text-info">3. 도움말 및 지원</p>
            <p class="text2 text-body2 text-grey-6">
             - 지원이 필요한 경우 연락처 섹션으로 이동
            </p>
            <q-separator class="q-mb-md"/>
          </div>
          <div class="title">
            <p class="text1 text-info">4. 지불 및 요금</p>
            <p class="text2 text-body2 text-grey-6">
             - 구독료 결제는 등록 후 이루어집니다.<br>
               - 크리스탈로 보급품 균형 - 필드 진입 후
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
