<template>
  <div class="documents">
    <div class="navbar">
      <div class="nav active">Platform rules</div>
      <div class="nav cursor-pointer" @click="$router.push('/history')">Update history</div>
      <div class="nav cursor-pointer" @click="$router.push('/instrustions')">guide</div>
      <div class="nav cursor-pointer" @click="$router.push('/guidevip')">VIP benefits</div>
      <div class="nav cursor-pointer" @click="$router.push('/contacts')">Contact</div>

    </div>
    <div class="contents">
      <div style="position: sticky;top: 20px" class="left backblock">
        <div class="nav active">General portal rules</div>
        <div class="nav ">Communication rules</div>
        <div class="nav">Help & Support</div>
        <div class="nav">Payments and Fees</div>

      </div>
      <div class="right backblock">
        <div class="ul">

          <div class="title">
            <p class="text1 text-info">1. General Portal Rules</p>
            <p class="text2 text-body2 text-grey-6">
              - Violation of the laws of the Russian Federation and the People's Republic of China is prohibited<br>
              - Prohibition of obscenity, insults, threats, all forms of nationalism and Nazism<br>
              - Prohibited implying purchase and marriage
            </p>
            <q-separator class="q-mb-md"/>
          </div>

          <div class="title">
            <p class="text1 text-info">2. Communication Rules</p>
            <p class="text2 text-body2 text-grey-6">
              - Polite howling<br>
              - No profanity<br>
              - If you don't understand the girl - ask again
            </p>
            <q-separator class="q-mb-md"/>
          </div>
          <div class="title">
            <p class="text1 text-info">3. Help and Support</p>
            <p class="text2 text-body2 text-grey-6">
              - Go to the contact section if you need support
            </p>
            <q-separator class="q-mb-md"/>
          </div>
          <div class="title">
            <p class="text1 text-info">4. Payments and Fees</p>
            <p class="text2 text-body2 text-grey-6">
              - Subscription payment is made after registration.<br>
              - Balance supplies with crystals - After entering the field
            </p>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {

  data () {
    return {

    }
  }
}
</script>
<style lang="sass">

</style>
