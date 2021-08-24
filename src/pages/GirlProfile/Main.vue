<template>


			<div class="block-one backblock">

				<div class="center" :class="{'active':showMoreInfo || $q.screen.lt.md}">
					<div class="text-body2 q-mb-md text-bold text-grey-6">信息</div>
					<div class="info-block">
						<div class="info-left">
							<div class="params womanwall">


								<div>出生日期</div>
								<div>居住地</div>
							</div>
							<div class="data">

								<div>{{currentGirl.birthday}}</div>
								<div>{{currentGirl.city}}</div>
							</div>
						</div>
						<div @click="showMoreInfo=!showMoreInfo" class="show cursor-pointer">显示全部</div>
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
									<div class="r">{{currentGirl.education}}</div>
									<div class="r">{{currentGirl.work_place}}</div>
									<div class="r">{{currentGirl.about}}</div>
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
                    	<div class="r">
                        <span class="text-dark" v-for="tag in userTags" :key="tag.id">
                          <b v-if="currentGirl.tags.includes(tag.id)">{{tag.name}}</b>
                        </span>
                      </div>
								<div class="r">{{currentGirl.interests}}</div>
									<div class="r">{{currentGirl.interests_additional}}</div>
								</div>
							</div>
						</div>
						<div @click="showMoreInfo=!showMoreInfo" class="hide cursor-pointer gt-sm">隐藏信息</div>
					</div>
				</div>
				<div class="bottom">
					<div class="add-photo">
						<div class="text-body2 q-mb-md text-bold text-grey-6">我的照片</div>

					</div>
					<div class="photo-grid">

              <img :src="img.image" class="image" alt="photo" v-for="img in last_photos" :key="img.id">



					</div>
				</div>
			</div>



</template>

<script>


import {mapGetters} from "vuex";
import GirlPostCard from "components/girlprofile/GirlPostCard";

export default {

  data () {
    return {
      showMoreInfo:false,
      last_photos:[]
    }
  },
  computed:{
    ...mapGetters('data',['currentGirl','userTags'])
  },
  async beforeMount() {
    const response = await this.$api.get(`/api/v1/gallery/get_last_user_images?id=${this.currentGirl.id}`)
    this.last_photos = response.data
  }
}
</script>
<style lang="sass">

</style>
