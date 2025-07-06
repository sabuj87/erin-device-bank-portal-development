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
                  <div class="card-header pc-bg">
                    <h3 class="card-title d-inline float-left text-white mt-2">
                     EMI
                    </h3>
                    <a
                      class="btn-sc-sm float-right add-btn"
                      data-toggle="modal"
                      data-target="#addModal"
                    >
                      <i class="fas fa-plus"></i>
                      <span style="font-size: 15px; font-weight: bold"> Add</span>
                    </a>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <!-- <table class="table text-center table-striped table-bordered">
                        <thead>
                          <tr>
                            <th style="width: 10px">#</th>
  
                            <th>Date</th>
                            <th>Holiday Name</th>
                            <th>Work Rate</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="holiday in holidays" :key="holiday">
                            <td>#</td>
                            <td>{{ holiday.date }}</td>
                            <td>{{ holiday.holiday_name }}</td>
                            <td>{{ holiday.rate }}</td>
    
                            <td>
                              <a @click.prevent="editdepartment(holiday.uuid)"   
                        data-toggle="modal"
                        data-target="#editModal" 
                                ><i class="fa-solid fa-pen-to-square"></i></a
                              >
    
                              <a  @click.prevent="deletedepartment(holiday.uuid)" class="-sm ml-2"
                                ><i class="fa-solid fa-trash text-red"></i></a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table> -->
  
                    <DataTable
                      :data="emis"
                      class="display table table-striped table-bordered mt-2"
                    >
                      <thead style="font-size: 15px">
                        <tr>
                          <th>ID</th>
                          <th>EMI Tenure</th>
                          <th>Interest Rate %</th>
                          <th>Process Fee %</th>
                          <th>Down Payment %</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody style="font-size: 15px"></tbody>
                    </DataTable>
  
                    <!-- <DataTable
                          :data="emis"
    
                          class="display table table-striped table-bordered mt-2"
                        >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>EMI Tenure</th>
                              <th>Interest Rate %</th>
                              <th>Process Fee %</th>
                              <th>Down Payment %</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                               <tr v-for="emi in emis" :key="emi.emi_id">
                          <td>{{ emi.emi_id }}</td>
                          <td>{{ emi.tenure }}</td>
                          <td>{{ emi.interest_rate }}</td>
                          <td>{{ emi.process_fee }}</td>
                          <td>{{ emi.down_payment }}</td>
                          <td>
                            <div class="action-buttons">
                              <button
                                @click="editEMI(emi)"
                                class="btn btn-warning btn-sm"
                              >
                                <i class="fas fa-edit"></i>
                                
                              </button>
                              <button
                                @click="deactivateEMI(emi)"
                                class="btn btn-secondary btn-sm"
                              >
                                <i class="fas fa-ban"></i>
                                
                              </button>
                            </div>
                          </td>
                        </tr>
                          </tbody>
                        </DataTable> -->
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
              <h5 class="modal-title">Update Set EMI</h5>
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
                        v-model="emi.duration"
                        class="form-control"
                      />
                      <p class="text-danger mt-1"></p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Interest Rate </label>
                      <input
                        type="text"
                        v-model="emi.interest_rate"
                        class="form-control"
                      />
                      <p class="text-danger mt-1"></p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label style="font-size: 18px">Process Fee </label>
                      <input
                        type="text"
                        v-model="emi.process_fee"
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
                        v-model="emi.down_payment"
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
              <button @click.prevent="updateemi(emi.uuid)" type="button" class="btn-sc-sm">
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
        emis: [],
        tes_data: [],
  
        emi: {},
        uuid: "",
      };
    },
    methods: {
      getemi() {
      axios
        .get("/dbl/emi")
        .then((response) => {
          if (response) {
            this.emis = [];
            var emis = response.data.data;
            for (var emi of emis) {
              var uuid = emi.uuid;
              var id = emi.id;
              var duration = emi.duration + " Months";
              var interest_rate = emi.interest_rate;
              var process_fee = emi.process_fee;
              var down_payment = emi.down_payment;
              var action =
                "<a href='#' onclick='handleClick(" +
                '"' +
                uuid +
                '"' +
                ")' ' data-toggle='modal' data-target='#editModal'><i class='fa-solid fa-pen-to-square sc text-large '></i></a>   <a href='#' onclick='deletePopUp(" +
                '"' +
                uuid +
                '"' +
                ")' '  data-toggle='modal' data-target='#delete_client'><i class='fa-solid fa-ban text-red ms-2 pc'></i></a> ";
              this.emis.push([
                id,
                duration,
                interest_rate,
                process_fee,
                down_payment,
                action,
              ]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
      addemi() {
        axios
          .post("/dbl/emi", {
            duration: this.duration,
            interest_rate: this.interest_rate,
            process_fee: this.process_fee,
            down_payment: this.down_payment,
          })
          .then((response) => {
            if (response) {
              this.$refs.addForm.reset();
  
              this.duration = "";
              this.interest_rate = "";
              this.process_fee = "";
              this.down_payment = "";
  
              this.getemi();
              $("#addModal .close").click();
            }
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      },
  
  
      handleClick(uuid) {
        axios
          .get("/dbl/credit_admin/emi/" + uuid)
          .then((response) => {
            if (response) {
              this.emi = response.data.data;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      updateemi(uuid) {
        axios
          .put("/dbl/emi/" + uuid, {
  
            duration: this.emi.duration,
            interest_rate: this.emi.interest_rate,
            process_fee: this.emi.process_fee,
            down_payment: this.emi.down_payment,
  
          })
          .then((response) => {
            if (response) {
              this.getemi();
  
              $("#editModal .close").click();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted: function () {
      this.getemi();
      window.handleClick = this.handleClick;
    },
  };
  </script>
  
  <style>
  @import "datatables.net-bs5";
  </style>
  