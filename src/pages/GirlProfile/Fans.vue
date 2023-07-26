<template>

			<div v-if="false" class="fans backblock">
				<div class="h1">Brief information 113</div>
				<div class="list">
					<div class="people">
						<div class="one">
							<img class="king" src="~assets/kingone.svg" alt="king">
							<img class="pic" src="~assets/one.jpg" alt="avatar">
							<div class="num">1</div>
							<div class="name">Ahmad Bator</div>
						</div>
						<div class="stat">
							<div class="namemob">Ahmad Bator</div>
							<div class="params">
								<img src="~assets/henders.svg" alt="hender">
								<div class="fire"><img src="~assets/fire.svg" alt="fire">51</div>
								<div class="people"><img src="~assets/people.svg" alt="people">17</div>
							</div>
						</div>
						<div class="number">
							<img class="diamond" src="~assets/diamond.svg" alt="diamond">
							<div class="num">5300</div>
						</div>
					</div>
					<div class="people">
						<div class="two">
							<img class="king" src="~assets/kingtwo.svg" alt="king">
							<img class="pic" src="~assets/one.jpg" alt="avatar">
							<div class="num">2</div>
							<div class="name">Ahmad Bator</div>
						</div>
						<div class="stat">
							<div class="namemob">Ahmad Bator</div>
							<div class="params">
								<img src="~assets/henders.svg" alt="hender">
								<div class="fire"><img src="~assets/fire.svg" alt="fire">51</div>
								<div class="people"><img src="~assets/people.svg" alt="people">17</div>
							</div>
						</div>
						<div class="number">
							<img class="diamond" src="~assets/diamond.svg" alt="diamond">
							<div class="num">5300</div>
						</div>
					</div>
					<div class="people">
						<div class="three">
							<img class="king" src="~assets/kingthree.svg" alt="king">
							<img class="pic" src="~assets/one.jpg" alt="avatar">
							<div class="num">3</div>
							<div class="name">Ahmad Bator</div>
						</div>
						<div class="stat">
							<div class="namemob">Ahmad Bator</div>
							<div class="params">
								<img src="~assets/henders.svg" alt="hender">
								<div class="fire"><img src="~assets/fire.svg" alt="fire">51</div>
								<div class="people"><img src="~assets/people.svg" alt="people">17</div>
							</div>
						</div>
						<div class="number">
							<img class="diamond" src="~assets/diamond.svg" alt="diamond">
							<div class="num">5300</div>
						</div>
					</div>
				</div>
			</div>
			<div class="fansother backblock">
				<div class="other" v-for="(friend,index) in currentGirl.own_friend_list[0].friend_list"
                    :key="friend.id">
<!--					<div class="num">{{index+1}}</div>-->
          <q-avatar class="q-mr-sm">
            <img  :src="friend.avatar" alt="avatar">
          </q-avatar>

					<div class="title">
						<div class="name text-bold">{{friend.fio}}</div>
						<div class="name">@{{friend.nickname}}</div>

					</div>
				</div>

			</div>

</template>

<script>


import {mapGetters} from "vuex";

export default {
  data () {
    return {

    }
  },
 computed:{
    ...mapGetters('data',['currentGirl','userTags'])
  }
}
</script>
 <style lang="sass">

 </style>
