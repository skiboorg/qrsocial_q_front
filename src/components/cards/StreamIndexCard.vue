<template>
  	<div class="user ">
							<div class="time">
								<div class="hours">{{ new Date (item.date).toLocaleDateString()}}</div>
<!--								<div class="date">24.05</div>-->
							</div>
							<img style="max-width: 100%;height: auto" class="girls" :src="item.image" alt="avatar">
							<div class="text">{{item.name}}</div>
							<div class="profile">
                <q-avatar size="30px">
                  <img  :src="item.streamer.avatar" alt="avatar">
                </q-avatar>

								<div>
									<div class="params">
										<img src="~assets/henders.svg" alt="hender">
										<div class="fire"><img src="~assets/fire.svg" alt="fire">{{item.streamer.streamer_rating}}</div>
										<div class="people"><img src="~assets/people.svg" alt="people">17</div>
									</div>
									<div class="name">{{item.streamer.nickname}}</div>
								</div>
							</div>
						</div>
</template>

<script>


export default {
  props:['item'],
  data () {
    return {

    }
  }
}
</script>
 <style lang="sass">

 </style>
