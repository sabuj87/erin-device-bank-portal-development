<template>

  <div>

    <div
      class="modal fade"
      id="change_password_modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="change_password_modal"
      aria-hidden="true"
    >
      <div class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Change Password</h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form ref="addForm">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label style="font-size: 18px">Old Password</label>
                    <input type="password" v-model="password" class="form-control" />
                    <p id="password" class="text-danger mt-1"></p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label style="font-size: 18px">New Password</label>
                    <input type="text" v-model="newpassword" class="form-control" />
                    <p id="newpassword" class="text-danger mt-1"></p>
                  </div>
                </div>

              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-pc-sm" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              @click.prevent="change_password"
              type="button"
              class="btn-sc-sm"
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>

    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">

      <li class="nav-item ">

        <div style="font-size: 124%;">{{ name }}</div>
        <div style="font-size: 80%;">{{ role }}</div>
       
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <img height="20px" width="20px" src="@/assets/icon/full-screen.svg">
        </a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link" data-bs-toggle="dropdown" aria-expanded="false" href="#">
          <img height="20px" width="20px"
                              class=""
                              src="@/assets/images/logo/user.png"
                              alt="User profile picture"
                            />        </a>
        <div class="dropdown-menu  dropdown-menu-end  ">
          <a class="dropdown-item"  data-bs-toggle='modal' data-bs-target='#change_password_modal' >
            <i class="fas fa-user mr-2"></i> Change Password
          </a>
          <a @click.prevent="logout" class="dropdown-item">
            <i class="fa-solid fa-arrow-right-from-bracket mr-2"></i> Logout
          </a>
        </div>
      </li>

    </ul>

   


  </nav>
    
  </div>
  
</template>

<script>
import Constant from "@/other/Constant";

import { Validator } from "@/other/Validator";

import axios from "axios";

import $ from "jquery";


export default {
  data() {
    return {
      logopath: "",  // Default logopath
      baseurl: Constant.filebaseurl,

      name : "",
      role : "",
      email : "",
    };
  },

  methods: {
    logout() {
     
        localStorage.removeItem("user");
        this.$router.push({ name: "login" });
      
    },

    change_password(){


      var validator = new Validator();
      var error = validator.validated([
        { field: "password", value: this.password, type: "required" },
        { field: "newpassword", value: this.newpassword, type: "required" },
     
      ]);

      if (error) {

        console.log(error);

      }else{


        axios
        .post("/user/change-password", {
          password: this.password,
          newpassword: this.newpassword,
          email: this.email
        })
        .then((response) => {
          if (response) {

            this.$emit("get_message", "Password changed successfully");

            $("#change_password_modal .close").click();

            this.logout();

  
            
            

          }
        })
        .catch((error) => {

          if(error.response.status == 401){

            $('#password').css("display", "block").html(error.response.data.message);


          }
        })

      }

        

    }

    
  },

  mounted() {

    var user = JSON.parse(localStorage.getItem("user")).user;

    this.name = user.name;
    this.role = user.role.name
    this.email = user.email

   
  }
};
</script>

<style>
/* Add any required styles */
</style>
