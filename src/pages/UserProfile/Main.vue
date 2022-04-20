<template>
  <div class="wall-info info">
			<div class="block-one backblock ">
				<div class="top">
					<div class="">
						<p class="no-margin text-dark text-h6 ellipsis">{{$auth.user.fio}}</p>
						<p  class="no-margin text-grey-6 text-body2">@{{$auth.user.nickname}}</p>
					</div>
          <div class="">
             <q-badge   color="green-13">온라인</q-badge>
          </div>

				</div>
				<div class="center active">
					<div class="info">정보</div>
					<div class="info-block">
						<div class="info-left">
							<div class="params">
                  <div>추가됨</div>
                  <div>도시</div>
                  <div>국가</div>
                  <div>나이</div>
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
							<div class="h1">나에 대해서</div>
							<div class="moreinfoblock">
								<div class="left">
									<div class="l">교육</div>
                  <div class="l">전문가</div>
                  <div class="l">내 소개</div>
								</div>
								<div class="right">
									<div class="r">{{$auth.user.education}}</div>
									<div class="r">{{$auth.user.work_place}}</div>
									<div class="r">{{$auth.user.about}}</div>
								</div>
							</div>
						</div>
						<div class="hobbies">
							<div class="h1">관심</div>
							<div class="moreinfoblock">
								<div class="left">
									<div class="l">취미</div>
                  <div class="l">내가 좋아하는 것</div>
                  <div class="l">예술</div>
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
