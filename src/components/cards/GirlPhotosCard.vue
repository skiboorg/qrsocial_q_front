<template>

 <div class=" ">
							<div class="profile">
                <q-avatar class="q-mr-sm">
                 <img  :src="item.owner.avatar" alt="avatar">
                </q-avatar>

								<div>
<!--									<div class="params">-->
<!--										<img src="~assets/henders.svg" alt="hender">-->
<!--										<div class="fire"><img src="~assets/fire.svg" alt="fire">51</div>-->
<!--										<div class="people"><img src="~assets/people.svg" alt="people">17</div>-->
<!--									</div>-->
									<p class="no-margin text-dark text-bold text-body2">{{item.owner.fio}}</p>
									<p class="no-margin text-dark text-caption">@{{item.owner.nickname}}</p>
								</div>
							</div>
							<div class="photoblock cursor-pointer">
<!--								<div class="addphoto">+4 new photos</div>-->
								<img  style="z-index: -1; width: 240px; height: 180px;object-fit: cover" class="newphoto image" draggable="false" :class="{active:active}" :src="item.image" alt="avatar">
							</div>
						</div>
</template>

<script>


export default {
  props:['item','active'],
  data () {
    return {

    }
  }
}
</script>
 <style lang="sass">

 </style>
