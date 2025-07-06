<template>
  <div class="auth-container">

<div class="row h-100 ">


  <div class="col-lg-6  h-100 auth-bannar ">
    <!-- <i style="position: fixed;top: 50px;left: 50px;;font-size: 180%;" class="fa-solid fa-arrow-left"></i> -->

   <div class="text-center mt-3"> 

    <!-- <h1 class="primary-color" > Welcome to Human Resource</h1> -->

    <img style="height: 70%;width: 70%;"  class="auth-image box-shadow mt-3 " src="assets/images/resource/login.jpg">
 


    </div>

    


  </div>
  <div class="col-lg-6  auth-form">
   


    <div class="auth-box">
          <h3 class="primary-color mt-3">Register in DFIN!</h3>

          <form>

            <div class=" m-20 row">

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label 
                            >Full Name*
                          </label>
                          <input v-model="name" @input="clearError('name')" class="common-form" type="text" />
                          <span id="name" class="error" ></span>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label 
                            >Email*
                          </label>
                          <input v-model="email" @input="clearError('email')" class="common-form" type="text" />
                          <span id="email" class="error" ></span>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label 
                            >Password*
                          </label>
                          <input v-model="password" @input="clearError('password')" class="common-form" type="text" />
                          <span id="password" class="error" ></span>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label 
                            >Comfirm password*
                          </label>
                          <input v-model="confirm_password" @input="clearError('confirm_password')" class="common-form" type="text" />
                          <span id="confirm_password" class="error" ></span>
                        </div>
                      </div>




           
            


            </div>
     
          


          
          <!-- <div class="mt-2">
            <span class="float-left">Remember me</span>
            <span class="float-right">Forgot Password?</span>
          </div> -->

          <button @click.prevent="register" class="mt-3 btn-100">Register</button>



          </form>

        
          <h6 class="text-center mt-3">
            Already have an account?<strong
              ><a href="/" class="primary-color"> LOGIN</a>
            </strong>
          </h6>
        </div>

  

  </div>


</div>



</div>
 
</template>

<script>

// import { Validator } from "@/other/Validator";
// import $ from "jquery";
// import axios from "axios";



export default {
  name: "RegisterView",
  
  data() {
    

  },

  
  
};
</script>

<style>
</style>