<template>
    <div class="wrapper">
      <!-- Navbar -->
      <navbar-view></navbar-view>
      <!-- Main Sidebar Container -->
      <sidebar-view></sidebar-view>
  
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper bg-white">
        <!-- Content Header (Page header) -->
         <div class="content-header">
        <div class="container-fluid">
          <h3 class="m-0 pc-bg text-white p-3 pl-3 title-round">Credit Score Management</h3>

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
              <h5 class="modal-title">Add new renge</h5>
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
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Min Score</label>
                      <input
                        type="text"
                        v-model="min"
                        class="form-control"
                      />
                       <p class="text-danger mt-1" v-if="errors">
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Max Score</label>
                      <input
                        type="text"
                        @input="errors"
                        v-model="max"
                        class="form-control"
                      />
                      <p class="text-danger mt-1" v-if="errors">
                        <!-- {{ errors.interest_rate[0] }} -->
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Amount</label>
                      <input
                        type="text"
                        v-model="amount"
                        class="form-control"
                      />
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
              <button @click.prevent="addScoreRenge" type="button" class="btn-sc-sm">
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
              <h5 class="modal-title">Edit renge</h5>
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
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Min Score</label>
                      <input
                        type="text"
                        v-model="score_renge.min"
                        class="form-control"
                      />
                       <p class="text-danger mt-1" v-if="errors">
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Max Score</label>
                      <input
                        type="text"
                        @input="errors"
                        v-model="score_renge.max"
                        class="form-control"
                      />
                      <p class="text-danger mt-1" v-if="errors">
                        <!-- {{ errors.interest_rate[0] }} -->
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Amount</label>
                      <input
                        type="text"
                        v-model="score_renge.amount"
                        class="form-control"
                      />
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
              <button @click.prevent="updateScoreRenge" type="button" class="btn-sc-sm">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>




          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                 
  
                  <!-- /.card-header -->
                  <div class="card-body">

                    <div class="row">
                      <div class="col-lg-6">

                        <div style="display: flex;justify-content: space-between;">
                          <h5>Eligible Credit Score Range</h5>



                          <ul class="nav nav-pills">
                      <li class="nav-item">
                        <a
                          class="nav-link active btn "
                          href="#activedata"
                          data-bs-toggle="tab"
                          >Active</a
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link btn  " href="#inactivedata" data-bs-toggle="tab"
                          >Archive</a
                        >
                      </li>
                    </ul>





                        </div>



                       
                    

                    <div class="tab-content">
                      <div class="active tab-pane" id="activedata">
  
                      <div v-if="updateSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
    Parameter updated successfully!
    <button type="button" class="btn-close" @click="updateSuccess = false"></button>
  </div>
                        <table class="table table-striped table-bordered mt-2">
                          <thead>
                            <tr>
                              <th>Parameter Name</th>
                              <th>High Score</th>
                              <th>Min Eligible Score</th>
                              <th>weight</th>
                              <th>Require</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="parameter in activeParameters"
                              :key="parameter.id"
                            >
                              <td>{{ parameter.parametername }}</td>
                           
                              <td>
                                <input
                                  type="text"
                                  v-model="parameter.highscore"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  v-model="parameter.mineligiblescore"
                                  class="form-control"
                                />
                              </td>

                              <td>
                                <input
                                  type="text"
                                  v-model="parameter.weight"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <div class="radio-container">
                                  <input
                                    type="radio"
                                    v-model="parameter.requredata"
                                  />
                                  <span class="radio-label">Yes</span>
                                </div>
                              </td>
                              <td>
                                <!-- Update button -->
                                <button class="btn btn-warning"
   @click="updateParameter(parameter)">
     Update
  </button>
                                
  
                              </td>
                            </tr>
                            <!-- Total Scroll Row -->
                            <!-- <tr>
                              <td
                                colspan="7"
                                class="total-scroll text-right pr-4"
                              >
                                Total Scroll: {{ totalScrollAmount }}
                              </td>
                            </tr> -->
                          </tbody>
                        </table>
                      </div>
  
                      <div class="tab-pane" id="inactivedata">
                        <table class="table table-striped table-bordered mt-2">
                          <thead>
                            <tr>
                              <th>Parameter Name</th>
                              <th>Weight</th>
                              <th>High Score</th>
                              <th>Min Eligible Score</th>
                              <th>Require</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="parameter in inactiveParameters"
                              :key="parameter.id"
                            >
                              <td>{{ parameter.ParameterName }}</td>
                              <td>
                                <input
                                  type="number"
                                  v-model="parameter.weight"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  v-model="parameter.HighScore"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  v-model="parameter.MinEligibleScore"
                                  class="form-control"
                                />
                              </td>
                              <td>
                                <div class="radio-container">
                                  <input
                                    type="radio"
                                    :name="'require-' + parameter.id"
                                    v-model="parameter.requredata"
                                  />
                                  <span class="radio-label">Yes</span>
                                </div>
                              </td>
                              <td>
                                <button class="btn  btn-warning btn-sm">
                                  <i class="fas fa-edit"></i>
                                  <!-- Edit icon -->
                                </button>
                              </td>
                            </tr>
                            <!-- Total Scroll Row -->
                            <!-- <tr>
                              <td
                                colspan="7"
                                class="total-scroll text-right pr-4"
                              >
                                Total Scroll: {{ totalScrollAmount }}
                              </td>
                            </tr> -->
                          </tbody>
                        </table>
                      </div>
                    </div>


                      </div>


                      <div class="col-lg-6">

                        <div style=" display: flex ; justify-content: space-between">

                          <h5>Eligible Loan Range</h5>


                          <button type="button" class="btn btn-sc" data-bs-toggle="modal" data-bs-target="#addModal">
                            Add
                          </button>




                        </div>

                      

                         <table class="table table-striped table-bordered mt-2">
                          <thead>
                            <tr>
                              <th>Minimum Score</th>
                              <th>Maximum Score</th>
                              <th>Amount</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="score_renge in score_renges"
                              :key="score_renge.id"
                            >
                              <td>{{ score_renge.min }}</td>
                              <td>{{ score_renge.max }}</td>
                              <td>{{ score_renge.amount }}</td>
                           
                          
                             

                      
                              <td>
                                <!-- Update button -->
                                <button class="btn btn-warning"   data-bs-toggle="modal" data-bs-target="#editModal"
   @click="showScoreRenge(score_renge.id)">
  <font-awesome-icon icon="pen" />
</button>
                                
  
                              </td>
                            </tr>
                            <!-- Total Scroll Row -->
                            <!-- <tr>
                              <td
                                colspan="7"
                                class="total-scroll text-right pr-4"
                              >
                                Total Scroll: {{ totalScrollAmount }}
                              </td>
                            </tr> -->
                          </tbody>
                        </table>
                         


                        
                       </div>


                    </div>
                  
                   
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer clearfix"></div>
                </div>
                <!-- /.card -->
              </div>
            </div>
          </div>
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
    </div>
  </template>
  
  <script>
  import $ from "jquery";
  import axios from "axios";
  
  export default {
    data() {
      return {

        activeParameters: [],
        inactiveParameters: [],
        score_renges: [],
        score_renge: {},
  
       
      };
    },
    methods: {
      getCSM() {
        axios
          .get("cs")
          .then((response) => {
            if (response.data && response.data.success) {
              this.activeParameters = response.data.data;
            } else {
              console.error(
                "Data retrieval was unsuccessful:",
                response.data.message || "Unknown error"
              );
            }
          })
          .catch((error) => {
            if (error.response) {
              console.error(
                "Error occurred while fetching data:",
                error.response.data
              );
            } else {
              console.error("Error occurred:", error.message);
            }
          });
      },

      addScoreRenge(){

         axios.post("score_renge", {

          min : this.min,
          max : this.max,
          amount : this.amount

         }).then( (res)=>{

          if(res){

            $("#addModal .close").click();

            this.min = "";
            this.max = "";
            this.amount = "";


            this.getScoreRenge();
          }



         }).catch((error)=>{

            console.log(error)

         });

      },

      updateScoreRenge(){

        axios.put("score_renge/" + this.score_renge.id, {

          min : this.score_renge.min,
          max : this.score_renge.max,
          amount : this.score_renge.amount

         }).then( (res)=>{

          if(res){

            $("#editModal .close").click();


            this.getScoreRenge();
          }



         }).catch((error)=>{

            console.log(error)

         });

      },
     
      showScoreRenge(id){

        axios.get("score_renge/" + id).then((res)=>{

          if(res){

            this.score_renge = res.data.data;

          }

           
        }).catch((error)=>{

          console.log(error)

        });

      },

      getScoreRenge() {
        axios
          .get("score_renge")
          .then((response) => {
            if (response.data && response.data.success) {
              this.score_renges = response.data.data;
            } else {
              console.error(
                "Data retrieval was unsuccessful:",
                response.data.message || "Unknown error"
              );
            }
          })
          .catch((error) => {
            if (error.response) {
              console.error(
                "Error occurred while fetching data:",
                error.response.data
              );
            } else {
              console.error("Error occurred:", error.message);
            }
          });
      },
  
      updateParameter(parameter) {
        axios
          .put(`cs/${parameter.uuid}`, parameter)
          .then((response) => {
            if (response.data && response.data.success) {
              this.$emit("get_message", "Data updated successfully");

            } else {
              console.error("Update was unsuccessful:", response.data.message);
            }
          })
          .catch((error) => {
            if (error.response) {
              console.error("Error during update:", error.response.data);
            } else {
              console.error("Error occurred:", error.message);
            }
          });
      },
  
    },
    mounted: function () {
      this.getCSM();
      this.getScoreRenge();
      window.handleClick = this.handleClick;
    },
  };
  </script>
  
 
  
  <style scoped>
  .table input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 2px solid #ced4da; /* Border color */
    border-radius: 4px; /* Rounded corners */
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  }
  
  .table input[type="radio"] {
    transform: scale(1.2);
    margin-right: 5px; /* Adjust spacing between radio and text */
  }
  
  .card-header {
    background-color: #4caf50; /* Example color */
  }
  
  .total-scroll {
    font-size: 24px; /* Larger font size */
    font-weight: bold; /* Make the text bold */
    padding-right: 30px; /* Add padding to the right */
  }
  
  /* Style for the "Yes" button text */
  .radio-container {
    display: flex;
    align-items: center;
    justify-content: center; /* Center the content horizontally */
  }
  
  .radio-label {
    font-size: 18px; /* Adjust the font size as needed */
    font-weight: bold; /* Make the text bold */
    color: #007bff; /* Change the color to your desired color */
    margin-left: 5px; /* Add some spacing between the radio button and text */
  }
  
  /* Increase font size for table data */
  table.table tbody td {
    font-size: 15px; /* Adjust size as needed */
  }
  
  table.table thead th {
    font-size: 16px; /* Adjust size as needed */
  }
  </style>
  