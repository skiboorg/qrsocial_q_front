<template>
<div class="catalog catalogstream backblock">
  <div class="top">
    <img class="fire" src="~assets/tv.svg" alt="tv">
    <div class="text">스트리밍 및 방송</div>
  </div>
			<div class="grid">

				<StreamCard v-for="stream in streams" :key="stream.id" :item="stream"/>

			</div>
		</div>
</template>

<script>



import StreamCard from "components/cards/StreamIndexCard";
export default {
  components: {StreamCard},
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
