<template>
<div class="catalog catalogstream backblock">
			<div class="h1">女孩目录</div>
			<div class="grid">

				<StreamCard v-for="stream in streams" :key="stream.id" :stream="stream"/>

			</div>
		</div>
</template>

<script>


import TickTokCard from "components/cards/TickTokCard";
import StreamCard from "components/cards/StreamCard";
export default {
  components: {StreamCard, TickTokCard},
  data () {
    return {
      streams:[]

    }
  },
   async  beforeMount() {
    const response = await this.$api.get(`/api/v1/stream/get_streams_for_home_page`)
    this.streams = response.data
  }
}
</script>
 <style lang="sass">

 </style>
