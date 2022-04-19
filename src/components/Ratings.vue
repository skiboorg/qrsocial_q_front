<template>
<div class="switch">
                      <!--                      -->
                      <div class="switch-inner " :class="{'active-right':!tariffSwitchStandart}"></div>
                      <div class="switch-left" @click="tariffSwitchStandart=true"><p class="no-margin text-bold cursor-pointer">사용자 평가</p></div>
                      <div class="switch-right" @click="tariffSwitchStandart=false"><p  class="no-margin text-bold cursor-pointer">소녀들의 평가</p></div>
                    </div>
  <div class="q-mb-lg tabs">
    <q-tabs
        v-model="tab"
        class="text-grey-6 q-px-xl"
        indicator-color="primary"
        dense
        no-caps
      >
        <q-tab :ripple="false" name="1"  label="日常的" />
        <q-tab :ripple="false" name="2"  label="每周" />
        <q-tab :ripple="false" name="3"  label="每月" />
      </q-tabs>
  </div>

              <div class="top-three q-px-lg">
                <div class="one q-mb-xl text-dark"  v-for="(donater,index) in donaters">
                  <div class=" q-mr-md"
                       :class="[index > 2 ? 'num-not-vip':'',
                       index === 0 ? 'num-vip vip-1':'',
                       index === 1 ? 'num-vip vip-2':'',
                       index === 2 ? 'num-vip vip-3':'',
                       ]">{{index+1}}</div>

                  <q-avatar style="z-index: 1;" size="64px" class="q-mr-md  relative-position"
                  :class="[
                       index === 0 ? 'top1':'',
                       index === 1 ? 'top2':'',
                       index === 2 ? 'top3':'']
                  ">
                    <img :src="donater.from_user.avatar" alt="hender">
                  </q-avatar>
                  <div class="info">
                     <div class=" q-mb-xs"><p  class="no-margin text-body2 text-bold">{{donater.from_user.fio}}</p></div>
                     <div class=" "><p  class="no-margin text-caption">@{{donater.from_user.nickname}}</p></div>
<!--                    <div class="type">-->
<!--                      <img src="m.png" alt="fire">-->
<!--                      <div class="fire"><img src="~assets/fire.svg" alt="fire">51</div>-->
<!--                      <div class="people"><img src="~assets/people.svg" alt="people">17</div>-->
<!--                    </div>-->

                  </div>
                  <div v-if="blockType==='page'" class=" flex items-center justify-center text-caption"><span class="text-grey-6">모두보기</span> <img class="q-mx-xs" src="~assets/diamond.svg" alt="">127,050 “水晶”</div>
                </div>

              </div>



</template>

<script>


import {mapGetters,mapActions} from "vuex";

export default {
  props:['blockType'],
  data () {
    return {
      tab:'1',
      tariffSwitchStandart:false,
     donaters:[],


    }
  },
  async beforeMount() {
    const response_donaters = await this.$api.get(`/api/v1/gift/get_user_top10_donaters`)
    this.donaters = response_donaters.data
  },
  methods:{

  },

}
</script>
<style lang="sass" scoped>
.switch
  max-width: 90%
  margin: 0 auto 25px
  justify-content: space-between
  height: 40px
  &-left
    flex-basis: 50%
    text-align: center
  &-right
    flex-basis: 40%
    text-align: center
  &-inner
    height: 30px
    top: 4px
.tabs
  border-bottom: 1px solid $grey-4
.one
  display: grid
  grid-template-columns: 1fr 2fr 4fr 10fr
  align-items: center
  position: relative

</style>

