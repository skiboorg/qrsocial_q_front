<template>
  <div class="blogpost">
		<BlogCard v-for="post in posts" :key="post.id" :post="post"/>

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
