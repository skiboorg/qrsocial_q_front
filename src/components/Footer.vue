<template>
  <footer class="footer">
	<div class="container">
		<div class="footer-top">
			<div class="footer-nav">우리 소녀</div>
			<div class="footer-nav">소셜 그룹</div>
			<div class="footer-nav">우리 방송</div>
			<div class="footer-nav">방송 카테고리</div>
			<div v-if="$auth.loggedIn && $auth.user.is_streamer" class="footer-nav"><router-link class="text-white" to="/girl/lk/info">Girl profile</router-link></div>
			<div v-if="!$auth.loggedIn" class="footer-nav"><router-link class="text-white"  to="/girl">Girl login</router-link></div>
		</div>
		<div class="copyright">qrspicy.com 판권 소유 (C) 2022</div>
	</div>
</footer>
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
