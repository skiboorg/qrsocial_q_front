<template>

  <div class="catalog">
    <div class="top">
      <img class="fire " src="~assets/pin.svg" alt="fire">
      <div class="text">블로그 및 포털 뉴스</div>
    </div>
    <div class="blogpost">
      <BlogCard v-for="post in posts" :key="post.id" :post="post"/>
    </div>



		</div>
</template>

<script>


import BlogCard from "components/cards/BlogCard";
export default {
  components: {BlogCard},
  data () {
    return {
      posts:[]
    }
  },
  async beforeMount() {
       const response = await this.$api.get(`/api/v1/blog/get_items`)
      this.posts = response.data
  }
}
</script>
 <style lang="sass">

 </style>
