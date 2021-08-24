<template>
<!-- blur -->
  <div class="block cursor-pointer">
    <router-link style="text-decoration: none;color: inherit" :to="{name:'girl-profile-main',params:{nickname:girl.nickname}}">
      <div class="photo">
						<img style="border-radius: 15px; width: 186px;height: 186px;object-fit: cover" class="image" :src="girl.avatar" alt="photo">

						<div class="blur">
							<div class="text1">通兴VIP</div>
							<div class="btn">补充</div>
						</div>
					</div>
					<div class="info no-margin">
						<div class="title">

							<div class="name">{{girl.fio}}</div>
							<div class="name">@{{girl.nickname}}</div>

						</div>
					</div>
    </router-link>

				</div>
</template>

<script>


export default {
  props: ['girl'],
  data () {
    return {

    }
  }
}
</script>
 <style lang="sass">

 </style>
