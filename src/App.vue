<template>
  <div id="app">

    <div class="loder-container" >

       <div id="loader">
        
       </div>



      
 
    </div>

  <div class="loader-bar" id="loader-bar"></div>



    <auth-master-view v-if="this.$route.meta.layout === 'auth'" />
  
    <master-view v-if="this.$route.meta.layout === 'pages'" />

    

    
  </div>
</template>

<script>

import AuthMasterView from "@/components/masterview/AuthMasterView.vue";
import MasterView from "@/components/masterview/MasterView.vue";

import "@/assets/js/jquery.js"
import "@/assets/js/bootstrap.js"
import "@/assets/js/adminlte.js";
import "@/assets/js/script.js";



export default {
  components: {
    AuthMasterView,
    
    MasterView

  },

  methods:{


      // loader(){

      //    var loader = document.getElementById("loader");


        
       

      // }
  },
  mounted(){

   
  }



};
</script>

<style >
@import '@/assets/sicon/sicon.css';
@import '@/assets/css/bootstrap.css';
@import '@/assets/css/adminlte.css';
@import '@/assets/css/custom.css';





</style>
