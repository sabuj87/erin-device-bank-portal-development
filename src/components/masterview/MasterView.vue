<template>
    <div>
      <NavbarView @get_message="message_show" />
      <sidebar-view />
      <div v-if="msg" id="message_popup" class="alert alert-success">
      <h4>{{ msg }}</h4>
    </div>

    <div v-if="delete_msg" id="delete_popup" class=" ">
      <h4>{{ delete_msg }}</h4>

      <div >

      <div class="row mt-4">

        
        
        <div class="col-lg-6">
          <button @click.prevent="cancel_btn" class="btn-pc-sm">Cancel</button>
        </div>
        <div class="col-lg-6">

          <button @click.prevent="confirm_btn" class="btn-sc-sm">Confirm</button>
        </div>

        
    </div>

      </div>


    </div>



      <router-view :data-from-master="dataToPass" @delete_message="delete_show" @get_message="message_show" /> 
      <FooterView />
    </div>
  </template>
  
  <script>
  import NavbarView from '@/components/partial/NavbarView.vue'
  import FooterView from '@/components/partial/FooterView.vue'
  import SidebarView from '@/components/sidebar/SidebarView.vue'
  
  export default {
    components: {
      NavbarView,
      SidebarView,
      FooterView
    },

    data() {
    return {
      msg: "",
      delete_msg: "",
      is_delete:false,
      dataToPass: false,
    };
    
  },
  provide() {
    return {
      delete_status: "",
       dataToPass: "",

    };
  },

  methods: {
    message_show(message) {

 
      this.msg = message;

     
 
      this.message_hide()
     
    },

    confirm_btn(){
     
      if(this.dataToPass==false){
        this.dataToPass=true
      }else{
        this.dataToPass=false

  

      }

      document.getElementById("delete_popup").style.display = "none";
    

    },

    cancel_btn() {
      document.getElementById("delete_popup").style.display = "none";

    },

    delete_show(message) {


    this.dataToPass=false
 


    this.delete_msg = message;



    this.delete_popup_show();

    if ( document.getElementById('delete_popup') ){
      const box = document.getElementById("delete_popup");
    box.style.display = "block";


    }







},

  delete_popup_show(){


  },

    message_hide() {

   
    

      setTimeout(() => {
     
      document.getElementById("message_popup").style.display = "none";

      }, 5000);

      
    if ( document.getElementById('message_popup') ){
      const box = document.getElementById("message_popup");
    box.style.display = "block";


    }


      

    },



  
  },


  }
  </script>
  
  <style>
  /* Your styles here */
  </style>
  
  