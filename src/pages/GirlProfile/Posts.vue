<template>
  <GirlPostCard v-for="(post,index) in posts" :key="post.id" :post="post" :index="index"/>
</template>

<script>
import {mapGetters} from "vuex";
import GirlPostCard from "components/girlprofile/GirlPostCard";
export default {
  components: {GirlPostCard},
  data () {
    return {
      showMoreInfo:false,
      posts:[]

    }
  },
  async beforeMount() {
    const response = await this.$api.get(`/api/v1/post/get_posts_by_user_nickname?nickname=${this.$route.params.nickname}`)
        this.posts = response.data
  },
  computed:{
    ...mapGetters('data',['currentGirl','userTags'])
  }
}
</script>
 <style lang="sass">

 </style>
