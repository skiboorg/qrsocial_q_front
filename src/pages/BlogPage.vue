<template>
  <div class="blogpost openblogpost">
			<div class="post backblock">
				<img class="q-mb-md" :src="post.image" alt="image">
				<div class="text-dark text-h6" v-html="post.name"></div>
				<div class="text" v-html="post.description"></div>

			</div>
		</div>
</template>

<script>


export default {

  data () {
    return {
      post:{}

    }
  },
  async beforeMount() {
     const get_item = await this.$api.get(`/api/v1/blog/get_item?name_slug=${this.$route.params.name_slug}`)
        this.post = get_item.data
  }
}
</script>
 <style lang="sass">

 </style>
