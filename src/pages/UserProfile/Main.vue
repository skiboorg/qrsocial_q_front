<template>
  <div class="wall-info info">
			<div class="block-one backblock ">
				<div class="top">
					<div class="">
						<p class="no-margin text-dark text-h6 ellipsis">{{$auth.user.fio}}</p>
						<p  class="no-margin text-grey-6 text-body2">@{{$auth.user.nickname}}</p>
					</div>
          <div class="">
             <q-badge   color="green-13">在线</q-badge>
          </div>

				</div>
				<div class="center active">
					<div class="info">信息</div>
					<div class="info-block">
						<div class="info-left">
							<div class="params">
								<div>已加入</div>
								<div>市</div>
								<div>国家</div>
								<div>年龄</div>
							</div>
							<div class="data">
								<div>{{ new Date($auth.user.date_joined).getFullYear()}}年
          {{ new Date($auth.user.date_joined).getMonth()}}月
          {{ new Date($auth.user.date_joined).getDay()}}</div>
								<div>{{$auth.user.city}}</div>
								<div>{{$auth.user.work_place}}</div>
								<div>{{$auth.user.years}}</div>
							</div>
						</div>

					</div>
					<div class="more-info">
						<div class="about">
							<div class="h1">关于我</div>
							<div class="moreinfoblock">
								<div class="left">
									<div class="l">教育</div>
									<div class="l">专业</div>
									<div class="l">关于我</div>
								</div>
								<div class="right">
									<div class="r">{{$auth.user.education}}</div>
									<div class="r">{{$auth.user.work_place}}</div>
									<div class="r">{{$auth.user.about}}</div>
								</div>
							</div>
						</div>
						<div class="hobbies">
							<div class="h1">兴趣</div>
							<div class="moreinfoblock">
								<div class="left">
									<div class="l">爱好</div>
									<div class="l">我喜欢什么</div>
									<div class="l">艺术</div>
								</div>
								<div class="right">
<!--									<div class="r"><p v-if="$auth.user.tags.includes(tag.id)" class="user-profile-block__tag" v-for="tag in tags" :key="tag.id">{{tag.name}}</p></div>-->
									<div class="r">{{$auth.user.interests}}</div>
									<div class="r">{{$auth.user.interests_additional}}</div>
								</div>
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
  },

}
</script>
 <style lang="sass">

 </style>
