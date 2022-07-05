<template>
 <div class="documents">
			<div class="navbar">
				<div class="nav cursor-pointer" @click="$router.push('/rules')">平台规则</div>
        <div class="nav active " >업데이트 기록</div>
				<div class="nav cursor-pointer" @click="$router.push('/instrustions')">가이드</div>
         <div class="nav cursor-pointer" @click="$router.push('/guidevip')">VIP 혜택</div>
				<div class="nav cursor-pointer" @click="$router.push('/contacts')">연락하다</div>
			</div>
			<div class="contents">
				<div style="position: sticky;top: 20px" class="left backblock">
					<div class="nav">排行榜排行榜</div>
					<div class="nav active">排行榜 排行榜榜</div>
					<div class="nav">排行榜</div>
					<div class="nav">排行榜 排行榜榜</div>
					<div class="nav">排行榜</div>
					<div class="nav">排行榜</div>
				</div>
				<div class="right backblock">
					<div class="ul">
						<div class="li">
							<div class="title">
								<div class="text1">1. 排行榜</div>
								<div class="text2">榜排行行榜榜行榜榜榜行榜榜行榜行榜榜行榜榜行榜榜行?</div>
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
