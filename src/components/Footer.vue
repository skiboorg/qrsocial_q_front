<template>
  <footer class="">
    <div class="footer">
      <div style="padding: 28px 0" class="container ">
		<div class="footer-top">
			<div class="footer-nav">Our girls</div>
			<div class="footer-nav">Streams</div>
			<div class="footer-nav">Stream Types</div>

      </div>
    <hr style="margin-top: 28px">
    <div style="padding: 28px 0" class="container">
     <div class="text-center">
       <div class="flex items-center justify-center q-mb-lg">
         <div class="flex items-center justify-center q-mr-lg text-white">
           <svg class="q-mr-sm" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33331 10.3333L1.74731 11.99C1.81941 12.2785 1.98586 12.5345 2.2202 12.7175C2.45454 12.9005 2.74332 13 3.04065 13H12.9593C13.2566 13 13.5454 12.9005 13.7798 12.7175C14.0141 12.5345 14.1805 12.2785 14.2526 11.99L14.6666 10.3333M7.99998 9V1V9ZM7.99998 9L5.33331 6.33333L7.99998 9ZM7.99998 9L10.6666 6.33333L7.99998 9Z" stroke="#DFDFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 <a class="text-white" href="#">Privacy policy</a></div>
         <div class="flex items-center justify-center text-white"><svg class="q-mr-sm" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33331 10.3333L1.74731 11.99C1.81941 12.2785 1.98586 12.5345 2.2202 12.7175C2.45454 12.9005 2.74332 13 3.04065 13H12.9593C13.2566 13 13.5454 12.9005 13.7798 12.7175C14.0141 12.5345 14.1805 12.2785 14.2526 11.99L14.6666 10.3333M7.99998 9V1V9ZM7.99998 9L5.33331 6.33333L7.99998 9ZM7.99998 9L10.6666 6.33333L7.99998 9Z" stroke="#DFDFDF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 <a class="text-white" href="#">Platform rules</a></div>


       </div>
       <q-btn v-if="$auth.loggedIn && $auth.user.is_streamer"
              color="white" text-color="negative" unelevated to="/girl/lk/info" label="GIRL profile"/>
       <q-btn v-if="!$auth.loggedIn"
              color="white" text-color="negative" unelevated to="/girl" label="LOG IN FOR GIRLS"/>



     </div>
    </div>


	</div>
    </div>
    <div class="text-dark text-center q-py-lg">qrspicy.com           All Rights Reserved (C) 2023</div>

</footer>
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
.footer-btn
  background: #FFFFFF
  border-radius: 4px
 </style>
