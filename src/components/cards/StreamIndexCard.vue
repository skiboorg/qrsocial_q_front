<template>
  	<div class=" ">
<!--							<div class="time">-->
<!--								<div class="hours">{{ new Date (item.date).toLocaleDateString()}}</div>-->
<!--&lt;!&ndash;								<div class="date">24.05</div>&ndash;&gt;-->
<!--							</div>-->
							<img class="image" :src="item.image" alt="avatar">
							<div class="text ">{{item.name}}</div>
							<div class="info ">{{new Date(item.start).toLocaleString()}}</div>
							<div class="profile">
                <q-avatar size="48px" class="q-mr-sm">
                  <img  :src="item.streamer.avatar" alt="avatar">
                </q-avatar>

								<div>
									<div class="name text-dark text-bold ">{{item.streamer.fio}}</div>
					        <div class="username">@{{item.streamer.nickname}}</div>
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
 <style lang="sass" scoped>
.name
  font-size: 14px
.username
  font-size: 12px
.profile
  display: flex
  align-items: center
  justify-content: flex-start
.text
  font-size: 14px
  color: #3E4042
.info
  font-size: 12px
  color: #8B919C
  margin-bottom: 10px
.image
  width: 240px
  height: 140px
  object-fit: cover
  border-radius: 20px
  display: block
  margin-bottom: 15px
 </style>
