<template>


  <div class="settings-block backblock q-pa-lg text-dark">
    <div class="q-px-md text-dark q-mb-md">
          <p class="text-h6 text-dark q-mb-sm q-pt-md">Инструкции по донатерам:</p>
         <p class="text-caption text-dark">
- ниже список всех ваших донатеров и кто сколько вам подарил<br>
- VIP донатеры помечены *иконкой, им отвечать и уделять внимание в первую очередь<br>
- можно и нужно писать первой всем, кто дарит щедрые подарки<br>


         </p>
        <q-separator/>
    </div>
    <div class="flex items-center q-mb-md " v-for="(friend,index) in $auth.user.own_friend_list[0].friend_list"
         :key="friend.id">
      <div class="flex items-center justify-between full-width">
        <div class="num q-mr-sm">{{index+1}}</div>
        <div class="flex items-center">
          <q-avatar class="q-mr-sm">
            <img  :src="friend.avatar" alt="avatar">
          </q-avatar>
          <div class="title">
            <div class="name">{{friend.fio}}</div>
            <div class="name">@{{friend.nickname}}</div>
          </div>




        </div>
         <div class="flex items-center justify-end col-grow ">
             <p class="q-mb-none q-mr-sm">Общая сумма подарков</p>
           <img class="q-mb-none q-mr-sm" src="~assets/diamond.svg" alt="">
            <p class="q-mb-none">0</p>

          </div>

      </div>


    </div>

  </div>

</template>

<script>


import {mapGetters} from "vuex";

export default {
  data () {
    return {

    }
  },
  computed:{
    ...mapGetters('data',['currentGirl','userTags'])
  }
}
</script>
<style lang="sass">

</style>
