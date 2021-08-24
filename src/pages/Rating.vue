<template>
 <div class="catalog catalogstream backblock">
			 <div class="flex items-center q-pa-lg">
                <img class="q-mr-md " src="~assets/rating.svg" alt="fire">
              <div class="title text-dark">门户评级</div>
              </div>
			<Ratings block-type="page"/>
		</div>


</template>

<script>
import Ratings from "components/Ratings";

export default {
  components:{
    Ratings
  },
  data () {
    return {

    }
  },

}
</script>
 <style lang="sass">

 </style>
