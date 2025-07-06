<template>
    <div class="wrapper">
    
    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
      <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
    </div> -->

  
    
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper bg-white">
      <!-- Content Header (Page header) -->
       <div class="content-header">
        <div class="container-fluid">
          <h3 class="m-0 pc-bg text-white p-3 pl-3 title-round">Dashboard</h3>

          <div class="row mb-2">
            <!-- /.col -->

            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
    
      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <!-- Small boxes (Stat box) -->
          <div class="row">
            <div class="col-lg-2 col-6">
              <!-- small box -->
              <div class="small-box  applications">
                <div class="inner">
                  <h5 class="text-center mt-1">Total Application</h5>
                   <h3 class="text-center mt-3">{{ counts.applications}}</h3>

    
                  <!-- <p>Customer</p> -->
                </div>
               
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-2 col-6">
              <!-- small box -->
              <div class="small-box  under-review">
                <div class="inner">
                  <h5 class="text-center mt-1">Under Review</h5>
                   <h3 class="text-center mt-3">{{ counts.under_review}}</h3>

    
                  <!-- <p>Customer</p> -->
                </div>
               
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-2 col-6">
              <!-- small box -->
              <div class="small-box  approved">
                <div class="inner">
                  <h5 class="text-center mt-1">Approved</h5>
                   <h3 class="text-center mt-3">{{ counts.approved}}</h3>

    
                  <!-- <p>Customer</p> -->
                </div>
               
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-2 col-6">
              <!-- small box -->
              <div class="small-box  disbursed">
                <div class="inner">
                  <h5 class="text-center mt-1">Disbursed</h5>
                   <h3 class="text-center mt-3">{{ counts.disbursed}}</h3>

    
                  <!-- <p>Customer</p> -->
                </div>
               
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-2 col-6">
              <!-- small box -->
              <div class="small-box  rejected">
                <div class="inner">
                  <h5 class="text-center mt-1">Rejected</h5>
                   <h3 class="text-center mt-3">{{ counts.rejected}}</h3>

    
                  <!-- <p>Customer</p> -->
                </div>
               
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-2 col-6">
              <!-- small box -->
              <div class="small-box resubmit">
                <div class="inner">
                  <h5 class="text-center mt-1">Resubmit</h5>
                   <h3 class="text-center mt-3">{{ counts.resubmit}}</h3>

    
                  <!-- <p>Customer</p> -->
                </div>
               
              </div>
            </div>
            <!-- ./col -->

          </div>
          <!-- /.row -->
          <!-- Main row -->
  
          <!-- /.row (main row) -->
        </div><!-- /.container-fluid -->
      </section>




      <section class="chart mt-4" >


        <div class="row">
          <div class="col-2 ">
    <PieChart v-if="application_chart_data.length" :labels="application_chart_levels" :data="application_chart_data" :colors="application_chart_colors" :is_color_box="false" />

  <strong> <p class="chart-bottom-title" >Total Application Status</p> </strong>       

          </div>

             <div class="col-2">
     <PieChart v-if="review_chart_data.length" :labels="review_chart_levels" :data="review_chart_data" :colors="review_chart_colors"  />

 <strong> </strong>  <p class="chart-bottom-title" >Total Application <strong>Vs</strong>  Under Review  </p>

          </div>



      

        <div class="col-2">

        
     <PieChart v-if="approve_chart_data.length" :labels="approve_chart_levels" :data="approve_chart_data" :colors="approve_chart_colors" />

    
        <p class="chart-bottom-title" >Total Application <strong>Vs</strong>  Approved  </p>


      </div>


        <div  class="col-2 ">

        
     <PieChart v-if="disbursed_chart_data.length" :labels="disbursed_chart_levels" :data="disbursed_chart_data" :colors="disbursed_chart_colors" />
   
              <p class="chart-bottom-title" >Total Application <strong>Vs</strong>  Disbursed  </p>


      </div>


       <div class="col-2">

        
     <PieChart v-if="rejected_chart_data.length" :labels="rejected_chart_levels" :data="rejected_chart_data" :colors="rejected_chart_colors" />

             <p class="chart-bottom-title" >Total Application <strong>Vs</strong>  Rejected  </p>


      </div>

      <div class="col-2">

        
     <PieChart v-if="resubmit_chart_data.length" :labels="resubmit_chart_levels" :data="resubmit_chart_data" :colors="resubmit_chart_colors" />

             <p class="chart-bottom-title" >Total Application <strong>Vs</strong>  Resubmit  </p>


      </div>









       

        </div>

     







      </section>





      <!-- /.content -->
    </div>

    </div>
    </template>
    
    <script>
   

    import axios from 'axios';

    import PieChart  from '@/components/other/PieChart.vue';



   

    export default {
      components: {
        PieChart
      },

      data(){
        return {
        counts: {},

        application_chart_levels : [ "Under Review", "Approved", "Disbursed", "Rejected", "Resubmit"],
        application_chart_data :[],
        application_chart_colors :["#4d7ec3","#4bcf92","#108e53","#de6161","#a2a61f"],

        
        review_chart_levels : ["Under Review", "Remains"],

        review_chart_data :[],

        review_chart_colors :["#4d7ec3","#3D5E8D"],


         approve_chart_levels : ["Approved", "Remains"],

        approve_chart_data :[],

        approve_chart_colors :["#4bcf92","#3D5E8D"],



       disbursed_chart_levels : ["Approved", "Remains"],

       disbursed_chart_data :[],

       disbursed_chart_colors :["#108e53","#3D5E8D"],




       rejected_chart_levels : ["Rejected", "Remains"],

       rejected_chart_data :[],

       rejected_chart_colors :["#de6161","#3D5E8D"],







       resubmit_chart_levels : ["Resubmit", "Remains"],

       resubmit_chart_data :[],

       resubmit_chart_colors :["#a2a61f","#3D5E8D"],











        };
      },

      methods: {
       count() {
         axios.get('/dashboard/count').then((res) => {
           this.counts = res.data.data;

           this.application_chart_data = [this.counts.under_review, this.counts.approved, this.counts.disbursed, this.counts.rejected, this.counts.resubmit];
             
           this.review_chart_data = [this.counts.under_review, this.counts.applications-this.counts.under_review];

          this.approve_chart_data = [this.counts.approved, this.counts.applications-this.counts.approved];
          

           this.disbursed_chart_data = [this.counts.disbursed, this.counts.applications-this.counts.disbursed];
            

           this.rejected_chart_data = [this.counts.rejected, this.counts.applications-this.counts.rejected];
           

           this.resubmit_chart_data = [this.counts.resubmit, this.counts.applications-this.counts.resubmit];

         }).catch((error) => {
           console.log(error);
         });


       }
      },

      mounted() {
        this.count();
      }
   
    
    }
    </script>
    