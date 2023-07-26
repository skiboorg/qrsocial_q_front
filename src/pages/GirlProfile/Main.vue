<template>


			<div class="block-one backblock">

				<div class="center" :class="{'active':showMoreInfo || $q.screen.lt.md}">
					<div class="text-body2 q-mb-md text-bold text-grey-6">Information</div>
					<div class="info-block">
						<div class="info-left">
							<div class="params womanwall">


								<div>Date of birth</div>
								<div>City</div>
							</div>
							<div class="data">

								<div>{{currentGirl.birthday}}</div>
								<div>{{currentGirl.city}}</div>
							</div>
						</div>
						<div @click="showMoreInfo=!showMoreInfo" class="show cursor-pointer">Display all</div>
					</div>
					<div class="more-info">
						<div class="about">
              <div class="h1">About me</div>
							<div class="moreinfoblock">
								<div class="left">
                  <div class="l">Education</div>
                  <div class="l">Professional</div>
                  <div class="l">About me</div>
								</div>
								<div class="right">
									<div class="r">{{currentGirl.education}}</div>
									<div class="r">{{currentGirl.work_place}}</div>
									<div class="r">{{currentGirl.about}}</div>
								</div>
							</div>
						</div>
						<div class="hobbies">
              <div class="h1">Interest</div>
							<div class="moreinfoblock">
								<div class="left">
                  <div class="l">Hobbies</div>
                  <div class="l">What do I like</div>
                  <div class="l">Art</div>
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
						<div @click="showMoreInfo=!showMoreInfo" class="hide cursor-pointer gt-sm">Hide</div>
					</div>
				</div>
				<div class="bottom">
					<div class="add-photo">
						<div class="text-body2 q-mb-md text-bold text-grey-6">My Photo</div>

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
