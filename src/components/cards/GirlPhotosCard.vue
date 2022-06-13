<template>

 <div class="cursor-pointer ">


								<img  class="image" draggable="false"  :src="item.image" alt="avatar">

   				<div class="profile">
                <q-avatar class="q-mr-sm">
                 <img  :src="item.owner.avatar" alt="avatar">
                </q-avatar>

								<div>

									<p class="no-margin name text-dark text-bold">{{item.owner.fio}}</p>
									<p class="no-margin username">@{{item.owner.nickname}}</p>
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
.image
  border-radius: 20px
  width: 250px
  height: 240px
  object-fit: cover
  display: block
  margin-bottom: 15px
.name
  font-size: 14px
.username
  font-size: 12px
  background: #FFF4F3
  border-radius: 30px
  display: inline-block
  padding: 4px 8px
  color: #D19F9B
  font-weight: 300
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

 </style>
