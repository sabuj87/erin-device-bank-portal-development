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
          <h3 class=" pc-bg text-white p-3 pl-3 title-round">Feedbacks</h3>

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
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                
                  <!-- /.card-header -->
                  <div class="card-body">
                 
                    <DataTable
                      :data="feedbacks"
                      class="display table table-striped table-bordered mt-2"
                    >
                      <thead style="font-size: 15px">
                        <tr>
                          <th>ID</th>
                          <th>Customer Name</th>
                          <th>Mobile</th>
                          <th>Time and Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody style="font-size: 15px"></tbody>
                    </DataTable>
  
           
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer clearfix"></div>
                </div>
                <!-- /.card -->
  
                <!-- /.card -->
              </div>
            </div>
          </div>
        </section>
        <!-- /.content -->
      </div>
  
      <div
        class="modal fade"
        id="addModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add new EMI</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form ref="addForm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">EMI Tenure</label>
                      <input
                        type="text"
                        @input="errors.duration = null"
                        v-model="duration"
                        class="form-control"
                      />
                       <p class="text-danger mt-1" v-if="errors.duration">
                        {{ errors.duration[0] }}
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Interest Rate </label>
                      <input
                        type="text"
                        @input="errors.interest_rate = null"
                        v-model="interest_rate"
                        class="form-control"
                      />
                      <p class="text-danger mt-1" v-if="errors.interest_rate">
                        {{ errors.interest_rate[0] }}
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Process Fee </label>
                      <input
                        type="text"
                        v-model="process_fee"
                        class="form-control"
                      />
                      <p class="text-danger mt-1"></p>
                    </div>
                  </div>
  
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Down Payment</label>
                      <input
                        type="text"
                        v-model="down_payment"
                        class="form-control"
                      />
                      <p class="text-danger mt-1"></p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-pc-sm" data-dismiss="modal">
                Cancel
              </button>
              <button @click.prevent="addemi" type="button" class="btn-sc-sm">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Feeback</h5>
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

              <p style="font-size: 15px"  ><strong> Customer Name :</strong> {{ feedback.customer_name }}</p>
              <p style="font-size: 15px"  ><strong> Mobile :</strong> {{ feedback.mobile }}</p>

              <p style="font-size: 15px"  ><strong> Time and Date :</strong> {{ feedback.created_at }}</p>

              
              <p style="font-size: 15px"  ><strong> Feedback :</strong> {{ feedback.question }}</p>
              
              <p v-if="feedback.status==1" style="font-size: 15px"  ><strong> Answer :</strong>{{feedback.answer}}</p>

               <p v-if="feedback.status==1" style="font-size: 15px"  ><strong> Status :</strong> Answered</p>
               
               <p v-if="feedback.status==0" style="font-size: 15px"  ><strong> Status :</strong> Not answered</p>
             


              

            
              <form  v-if="feedback.status==0" ref="addForm">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label style="font-size: 18px">Answer</label>
                      <textarea
                        height="100px"
                        type="text"
                        v-model="feedback.answer"
                        class="form-control"
                      ></textarea>
                      <p class="text-danger mt-1"></p>
                    </div>
                  </div>
      
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-pc-sm" data-bs-dismiss="modal">
                Cancel
              </button>
              <button v-if="feedback.status==0"  @click.prevent="updatefeedback(feedback.id)" type="button" class="btn-sc-sm">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script>
  import $ from "jquery";
  import axios from "axios";
  import DataTable from "datatables.net-vue3";
  import DataTablesCore from "datatables.net-bs5";
  DataTable.use(DataTablesCore);
  export default {
    components: { DataTable },
  
    data() {
      return {
        errors: {},
        feedbacks: [],
        tes_data: [],
        feedback: {},
  
        emi: {},
        uuid: "",
      };
    },
    methods: {
      getfeedback() {
      axios
        .get("/feedback")
        .then((response) => {
          if (response) {
            this.feedbacks = [];
            var feedbacks = response.data.data;
            for (var feedback of feedbacks) {
              var id = feedback.id;
              var customer_name = feedback.customer_name;
              var mobile = feedback.mobile;
              var timedate = feedback.created_at;
              var status = feedback.status;

              if( status == 1 ){
                status = "Answered";
              }else{
                status = "Not Answered";
              }
              var action =
                "<a href='#' onclick='showfeedback(" +
                '"' +
                id +
                '"' +
                ")' ' data-bs-toggle='modal' data-bs-target='#editModal'> <i  class='icon icon-eye'></i></a>  ";
              this.feedbacks.push([
                id,
                customer_name,
                mobile,
                timedate,
                status,
                action,
              ]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
      showfeedback(id) {
        axios
          .get("/feedback/"+id)
          .then((response) => {
            if (response) {
              this.feedback = response.data.data;
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
  
  
   
      updatefeedback(id) {
        axios
          .put("/feedback/" + id, {
  
            answer: this.feedback.answer,
            status : 1
          
          })
          .then((response) => {
            if (response) {
              this.getfeedback();
  
              $("#editModal .close").click();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted: function () {
      this.getfeedback();
      window.showfeedback = this.showfeedback;
    },
  };
  </script>
  
  <style>
  @import "datatables.net-bs5";
  </style>
  