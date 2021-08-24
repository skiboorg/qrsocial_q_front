<template>
 <div class="post backblock">
   <router-link :to="`/blogs/${post.name_slug}`">
     <img class="image" :src="post.image" alt="image">
				<div class="text">{{post.short_description}}</div>

   </router-link>

			</div>
</template>

<script>


export default {
  props:['post'],
  data () {
    return {

    }
  }
}
</script>
 <style lang="sass">

 </style>
