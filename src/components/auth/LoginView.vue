<template>
  <div class="auth-container">
    <div class="row h-100">
      <div class="col-lg-6 h-100 auth-bannar">
        <!-- <i style="position: fixed;top: 50px;left: 50px;;font-size: 180%;" class="fa-solid fa-arrow-left"></i> -->

        <div class="text-center mt-3">
          <!-- <h1 class="primary-color" > Welcome to Human Resource</h1> -->

          <img
            style="height: 90%; width: 90% "
            class="auth-image  mt-3"
            src="@/assets/images/logo/e_rin_logo.png"
          />
        </div>
      </div>
      <div class="col-lg-6 auth-form">
        <img style="position: absolute;top:40px ;right: 120px;height: 90px;width: 200px;"
            class="auth-image  mt-3"
            src="@/assets/images/logo/dhaka_bank_logo.png"
          />
        <div class="auth-box">
          <h3 class="primary-color">Welcome to eRin Device</h3>

          <form id = "new_pasword_form">
            <label class="m-20 form-lebel">Email</label>
            <input
              v-model="reset_email"
              @input="clearError('reset_email')"
              class="common-form"
              type="text"
            />

            <span id="reset_email" class="error mt-2"></span>



            <div>

              
            </div>
            <span @click="show_login_form" class="float-right">Login</span>

          
            <button @click.prevent="sendNewPassword" class="mt-3 btn-100">Send New Password</button>
          </form>
          <form id = "login_form" >
            <label class="m-20 form-lebel">Email</label>
            <input
              v-model="email"
              @input="clearError('email')"
              class="common-form"
              type="text"
            />


            <label class="form-lebel">Password</label>

            <input
              v-model="password"
              @input="clearError('password')"
              class="common-form"
              type="password"
            />

            <div>

              
            </div>
            <span id="email" class="error mt-2"></span>
            <div class="mt-2">
              <span @click="show_new_password_form" class="float-right">Forgot Password?</span>
            </div>

            <button @click.prevent="login" class="mt-3 btn-100">LOGIN</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Validator } from "@/other/Validator";
import $ from "jquery";
import axios from "axios";

export default {
  name: "LoginView",

  data() {
    return {
      loader: document.getElementById("loader"),

    };
  },

  methods: {
    login() {
  var validator = new Validator();
  var error = validator.validated([
    { field: "email", value: this.email, type: "required" },
    {
      field: "password",
      value: this.password,
      type: "required|length",
      size: 4,
    },
  ]);

  if (error) {
    console.log(error);
  } else {
    
    this.loader.style.visibility = "visible";

    axios
      .post("auth/login", {
        email: this.email,
      password: this.password,
      })
      .then((response) => {
        
        const user = response.data;

        this.loader.style.visibility = "hidden";

        localStorage.setItem("user", JSON.stringify(user));

        this.$router.push({ name: "dashboard" });

        
      })
      .catch((error) => {

        this.loader.style.visibility = "hidden";


       
        
          if (error.response.status == 401) {

            
            $('#email').css("display", "block").html(error.response.data.message);
          }
        
      
      });
  }
},

/**
 * Hides the login form and shows the new password form
 */
show_new_password_form(){
  $('#login_form').hide();
  $('#new_pasword_form').show();
},

    sendNewPassword(){


      var validator = new Validator();
  var error = validator.validated([
    { field: "reset_email", value: this.reset_email, type: "required" },
  ]);

  if (error) {

    console.log(error);

  }else{

    this.loader.style.visibility = "visible";


    axios
      .post("auth/user/forgot-password", {
        email: this.reset_email,
      })
      .then((response) => {
        

         if(response){

          this.loader.style.visibility = "hidden";


          $('#login_form').show();
          $('#new_pasword_form').hide();

         }

        
      })
      .catch((error) => {

        this.loader.style.visibility = "hidden";


    
          if (error.response.status == 404) {

            
            $('#reset_email').css("display", "block").html(error.response.data.message);
          }
        
      
      });



  }


     
    },

    clearError(field) {
      $("#" + field).css("display", "none");
    },
  },
};
</script>

<style>
</style>