<template>
    <aside class="main-sidebar sidebar-light-primary elevation-2" style="background-color: #ffffff">
      <!-- Brand Logo -->
      <a href="" class="brand-link text-center ">

        <img  height="110px" width="110px" src="@/assets/images/logo/e_rin_logo.png" alt="" />
      </a>
  
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2" style="padding-top: 30px;">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'dashboard' }" exact-active-class="active">
                <img class="nav-icon" src="@/assets/icon/dashboard.svg">
                <p>Dashboard</p>
              </router-link>
            </li>
  
            <li v-if="permissions.csm"    class="nav-item">
              <router-link class="nav-link" :to="{ name: 'credit_score' }" exact-active-class="active">
                <img  class="nav-icon " src="@/assets/images/credit-score.png" alt="" />
                <p>Credit Score </p>
              </router-link>
            </li>
  
      
          
            <!-- <li  class="nav-item">
              <router-link class="nav-link" :to="{ name: 'emi' }" exact-active-class="active">
                <i class="nav-icon fas fa-home primary_color"></i>
                <p>EMI</p>
              </router-link>
            </li> -->

            <li v-if="permissions.user_management" class="nav-item">
              <router-link class="nav-link" :to="{ name: 'user_management' }" exact-active-class="active">
                <img class="nav-icon" src="@/assets/icon/user.svg">
                <p>User Management</p>
              </router-link>
            </li>
  
  
  
            <li  v-if="permissions.loan_list_view" class="nav-item">
              <router-link class="nav-link" :to="{ name: 'loan_application' }" exact-active-class="active">
                <img  class="nav-icon" src="@/assets/images/personal.png" alt="" />
                          <p>Loan Application</p>
              </router-link>
            </li>
            

            
            <li  v-if="permissions.loan_list_view" class="nav-item">
              <router-link class="nav-link" :to="{ name: 'feedback' }" exact-active-class="active">
                          <p>    <i  class=" nav-icon icon icon-feedback"></i>
Feedbacks</p>
              </router-link>
            </li>


          </ul>
        </nav>

        <img style="position: absolute;bottom:100px ;left: 20px;height: 80px;width: 180px;"
            class="auth-image  mt-3"
            src="@/assets/images/logo/dhaka_bank_logo.png"
          />
      </div>
    </aside>
  </template>
  
  <script>
  export default {

    data() {
    return {
  

      permissions: {},



    };
  },

  mounted() {

    var user = JSON.parse(localStorage.getItem("user")).user;
    this.permissions = JSON.parse(user.role.permissions);







}


  };
  </script>
  
  <style scoped>
  /* Active link styling */
  .nav-sidebar > .nav-item > .nav-link.active {
    background-color: #033a6b !important; /* Dark blue background for active link */
    color: #fff !important; /* White text color for better contrast */
  }
  
  /* Ensure active link retains its styles on hover */
  .nav-sidebar > .nav-item > .nav-link.active:hover {
    background-color: #033a6b !important; /* Keep the same dark blue background on hover */
    color: #fff !important; /* Maintain white text color on hover */
  }
  
  /* Styling for hover effect on non-active links */
  .nav-sidebar > .nav-item > .nav-link:hover {
    background-color: #bec0c3 !important; /* Light grey background on hover */
    color: #443636 !important; /* White text color on hover */
  }
  
  /* Menu text size customization */
  .nav-link p {
    font-size: 17px; /* Adjust the size as needed */
  }
  
  /* Icon size customization */
  .nav-icon {
    font-size: 20px; /* Adjust the icon size as needed */
  }
  </style>
  