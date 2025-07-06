import { createRouter, createWebHistory } from "vue-router";




// Auth
import LoginView from "@/components/auth/LoginView.vue";
import RegisterView from "@/components/auth/RegisterView.vue"; // Import RegisterView


// Pages

import EmiView from "@/components/pages/EmiView.vue";
import CreditScoreView from "@/components/pages/CreditScoreView.vue";
import DashboardView from "@/components/pages/DashboardView.vue";
import LoanApplication from "@/components/pages/LoanApplication.vue";
import UserManagememtView from "@/components/pages/UserManagememtView.vue";
import FeedbackView from "@/components/pages/FeedbackView.vue";



//Credit User




const routes = [

 
  {
    path: "/",
    name: "login",
    meta: { layout: "auth" },
    component: LoginView,
  },
 
  {
    path: "/register",
    name: "register",
    meta: { layout: "auth" },
    component: RegisterView, // Register route added
  },


  // BusinessAdmin
 

// pages

  {
    path: "/pages",
    name: "pages",
    meta: { layout: "pages", login: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: DashboardView,
      },
 
      {
        path: "/loan_application",
        name: "loan_application",
        meta: {  loan_list_view: true },
        component: LoanApplication,
      },

      {
        path: "emi",
        name: "emi",
        component: EmiView,
      },
      {
        path: "credit_score",
        name: "credit_score",
        meta: {  csm: true },
        component: CreditScoreView,
      },

      {
        path: "feedback",
        name: "feedback",
        component: FeedbackView,
      },
      {
        path: "user_management",
        name: "user_management",
        meta: {  user_management: true },
        component: UserManagememtView,
      },

     
    ],
  },



];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.login)) {

    var user = JSON.parse(localStorage.getItem("user"));



    if (user) {


      var permissions = JSON.parse(user.user.role.permissions);


      if (to.matched.some(record => record.meta.loan_list_view)) {



        if (permissions.loan_list_view) {

          next();

        }else{

          next({ name: 'dashboard' });
        }




      }

     else if (to.matched.some(record => record.meta.csm)) {



        if (permissions.csm) {

          next();

        }else{

          next({ name: 'dashboard' });
        }




      }

    else if (to.matched.some(record => record.meta.user_management)) {



        if (permissions.user_management) {

          next();

        }else{

          
          next({ name: 'dashboard' });


        }



      }


      next();








    }else{


      next({ name: 'login' });


      
    }
   

  }else{

    if(JSON.parse(localStorage.getItem("user"))){

      next({ name: 'dashboard' });


    }else{


      next();



    }

  }



});


export default router;
