<template>
  <div class="">
     <div class="stream-grid q-mb-lg">
    <div class="">
      <video class="live-video" autoplay loop muted>
              <source src="~assets/vid.mp4" type="video/mp4">

              Your browser does not support HTML video.
            </video>
    </div>
			 <div class="full-height bg-white">
    <q-btn-toggle
        v-model="toggleButton"
        spread
        no-caps
        unelevated
        toggle-color="primary"
        toggle-text-color="white"
        color="grey-3"
        text-color="grey-7"

        :options="[
          {label: '排行榜', value: 'tab1'},
          {label: '排行榜', value: 'tab2'}
        ]"
      />
  </div>

		</div>
  <div class="stream-grid bottom">
    <q-card class="text-dark" flat >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption>
            Subhead
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, recusandae.
        </q-card-section>




      </q-card-section>
    </q-card>
    <q-btn label="Like"  no-caps color="primary" />
    <q-btn label="Gift" color="primary" no-caps outline/>
  </div>
  </div>


</template>

<script>


export default {

  data () {
    return {
      toggleButton:'tab1'

    }
  }
}
</script>
<style lang="sass">
.stream-grid
  display: grid
  grid-template-columns: 3fr 1fr
  grid-gap: 20px
  &.bottom
    grid-template-columns: 3fr 1fr 1fr
</style>
