<template>
<!-- blur -->
  <div class="block cursor-pointer" :class="{'blur':stream.is_vip}">
    <router-link :to="{name:'stream-page'}">
      <div class="photo">
						<img class="image" :src="stream.image" alt="photo">
						<div class="date text-white">{{ new Date (stream.date).toLocaleDateString()}}</div>
						<div class="blur">
							<div class="text1">Buy VIP</div>
							<div class="btn">Replenish</div>
						</div>
					</div>
					<div class="info">
						<div class="title">
							<div class="text">{{stream.name}}</div>
							<div class="name">{{stream.streamer.nickname}}</div>
							<div class="params">
								<img src="~assets/henders.svg" alt="hender">
								<div class="fire"><img src="~assets/fire.svg" alt="fire">{{stream.streamer.streamer_rating}}</div>
								<div class="people"><img src="~assets/people.svg" alt="people">17</div>
							</div>
						</div>
					</div>
    </router-link>

				</div>
</template>

<script>


export default {
  props: ['stream'],
  data () {
    return {

    }
  }
}
</script>
 <style lang="sass">

 </style>
