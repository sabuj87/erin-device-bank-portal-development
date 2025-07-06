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
          <h3 class="m-0 pc-bg text-white p-2 title-round">Loan Application</h3>

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
          <div id="assesment_report">


            <div style="display: flex">

              <div>

                <img src="portal/assets/images/logo/dhaka_bank_logo.png" alt="" style="height: 50px; width: 120px" />




              </div>

              <div style="margin-left:70px">

            <p style="font-size: 120%" class="text-center  asses-title text-bold">Assesment &nbsp; Report</p>
            <p style="" class="text-center  asses-title ">Application ID : {{ application.application_id }}</p>
            

            <p style="" class="text-center  text-bold asses-title ">User Reference No : {{ application.user_ref_no }}</p>
            
            <p style="" class="text-center text-bold asses-title "> Application Date : {{moment(application.created_at).format('MMMM Do YYYY, h:mm:ss a')}} </p>




                
            </div>

            <div style="margin-left:70px">

<p style="font-size: 180%;margin-top: 20px;color: green;font-family: 'Courier New', Courier, monospace;" class="text-center  asses-title text-bold">eRin Device</p>


    
</div>




        

            </div>

         
            <div class="row">

              <div class="border col-6 p-2">
              <div class="row">
                <strong style="font-size: 120%"> Personal Information</strong>

                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Applicant’s Name : </strong>
                    {{ application.customer_info.personal_information.name }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Mobile Number : </strong>
                    {{ application.customer_info.personal_information.phone }}
                  </p>
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Email : </strong>
                    {{ application.customer_info.personal_information.email }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Account No : </strong>
                    {{
                      application.customer_info.account_information.AccountNo
                    }}
                  </p>
                </div>
                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Date of Birth : </strong>
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Gender : </strong>
                    {{ application.customer_info.personal_information.gender }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Customer ID : </strong>
                    {{
                      application.customer_info.account_information.CustomerId
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Application ID : </strong>
                    {{
                      application.customer_info.account_information.CustomerId
                    }}
                  </p>
                </div>
              </div>
            </div>
            

            
            <div class="border col-6 p-2 ">
              <div class="row">
                <strong style="font-size: 120%"> Employment Information</strong>

                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Profession : </strong>
                    {{
                      application.customer_info.employment_information
                        .profession
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Company name : </strong>
                    {{
                      application.customer_info.employment_information
                        .company_name
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Desiganation : </strong>
                    {{
                      application.customer_info.employment_information
                        .designation
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Employment Type : </strong>
                    {{
                      application.customer_info.employment_information
                        .employment_type
                    }}
                  </p>
                </div>

                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Date of Joining : </strong>
                    {{
                      application.customer_info.employment_information
                        .date_of_joining
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Company address : </strong>
                    {{
                      application.customer_info.employment_information
                        .company_address
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Monthly Income : </strong>
                    {{
                      application.customer_info.employment_information
                        .monthly_income
                    }}
                  </p>
                </div>
              </div>
            </div>


            <div class="border p-2 col-6">
              <div class="row">
                <strong style="font-size: 120%"> NID Information</strong>

                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>NID : </strong> 124434234
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Father's Name : </strong> MD X
                  </p>
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Mother's Name : </strong> MD Y
                  </p>
                </div>
              </div>
            </div>




            <div class="border p-2 col-6">
              <div class="row">
                <strong style="font-size: 120%"> Financial Information</strong>

                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Have previous loan : </strong>
                    {{
                      application.customer_info.financial_information.have_loan
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Loan emi : </strong>
                    {{
                      application.customer_info.financial_information.loan_emi
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Loan outstandings : </strong>
                    {{
                      application.customer_info.financial_information
                        .loan_outstanding
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Loan Tenures : </strong>
                    {{
                      application.customer_info.financial_information
                        .loan_tenure
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Have car : </strong>
                    {{
                      application.customer_info.financial_information.dps_car
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Car price : </strong>
                    {{
                      application.customer_info.financial_information.car_price
                    }}
                  </p>
                </div>
                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Have DPS : </strong>
                    {{
                      application.customer_info.financial_information.have_dps
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>DPS amount : </strong>
                    {{
                      application.customer_info.financial_information.dps_amount
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Have credit card : </strong>
                    {{
                      application.customer_info.financial_information
                        .have_credit_card
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Credit card quantity : </strong>
                    {{
                      application.customer_info.financial_information
                        .credit_card_quantity
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Credit limit : </strong>
                    {{
                      application.customer_info.financial_information
                        .credit_limit
                    }}
                  </p>
                </div>
              </div>
            </div>


            <div class="border p-2 col-6">
              <div class="row">
                <strong style="font-size: 120%">Device Information </strong>

                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.product_info">
                    <strong>Device ID : </strong>
                    {{ application.product_info.product_identity }}
                  </p>

                  <p class="pm-0" v-if="application.product_info">
                    <strong>Device Name : </strong>
                    {{ application.product_info.phone_name }}
                  </p>

                  <p class="pm-0" v-if="application.product_info">
                    <strong>Model : </strong>
                    {{ application.product_info.phone_name }}
                  </p>

                  <p class="pm-0" v-if="application.product_selection_info">
                    <strong>Price : </strong>
                    {{
                      application.product_selection_info.specification.basePrice
                    }}
                  </p>
                </div>
                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.product_selection_info">
                    <strong>Verient : </strong>
                    {{
                      application.product_selection_info.specification
                        .variant_name
                    }}
                  </p>

                  <p class="pm-0" v-if="application.product_info">
                    <strong>Brand : </strong>
                    {{ application.product_info.brand_name }}
                  </p>
                </div>
              </div>
            </div>


            <div class="border p-2 col-6">
              <div class="row">
                <div class="col-lg-6">
                  <strong style="font-size: 120%">Present address </strong>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>District : </strong>
                    {{
                      application.customer_info.address_information
                        .present_distict
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Upazilla : </strong>
                    {{
                      application.customer_info.address_information
                        .present_upazilla
                    }}
                  </p>
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Address : </strong>
                    {{
                      application.customer_info.address_information
                        .present_address
                    }}
                  </p>
                </div>
                <div class="col-lg-6">
                  <strong style="font-size: 120%">Permanent address </strong>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>District : </strong>
                    {{
                      application.customer_info.address_information
                        .permanent_distict
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Upazilla : </strong>
                    {{
                      application.customer_info.address_information
                        .permanent_upazilla
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Address : </strong>
                    {{
                      application.customer_info.address_information
                        .permanent_address
                    }}
                  </p>
                </div>
              </div>
            </div>
             

            <div class="border p-2 col-6">
              <div class="row">
                <strong style="font-size: 120%"> Reference Information</strong>

                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Name : </strong>
                    {{
                      application.customer_info.reference_information
                        .referee1_name
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Contact Number : </strong>
                    {{
                      application.customer_info.reference_information
                        .referee1_contact_number
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Company Name : </strong>
                    {{
                      application.customer_info.reference_information
                        .referee1_company_name
                    }}
                  </p>
                </div>
                <div class="col-lg-6">
                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Designation : </strong>
                    {{
                      application.customer_info.reference_information
                        .referee1_designation
                    }}
                  </p>

                  <p class="pm-0" v-if="application.customer_info">
                    <strong>Designation : </strong>
                    {{
                      application.customer_info.reference_information
                        .referee1_relation
                    }}
                  </p>
                </div>
              </div>
            </div>
            

            <div class="border p-2 col-6">
              <div class="row">
                <strong style="font-size: 120%"> Rm Information</strong>

                <div class="col-lg-6">
                  <div v-if="application.customer_info">
                    <div
                      v-if="
                        application.customer_info.rm_information.isSelf ==
                        'true'
                      "
                    >
                      <strong>Applying Myself</strong>
                    </div>

                    <div
                      v-if="
                        application.customer_info.rm_information.isDhakaBank ==
                        'true'
                      "
                    >
                      <strong>DBL Employee ID : </strong>
                      {{
                        application.customer_info.rm_information.dbl_employee_id
                      }}
                    </div>
                    <div
                      v-if="
                        application.customer_info.rm_information.isAssisted ==
                        'true'
                      "
                    >
                      <p class="pm-0">
                        <strong>Assistant Mobile Number : </strong>
                        {{
                          application.customer_info.rm_information
                            .assisted_mobile_number
                        }}
                      </p>
                      <p class="pm-0">
                        <strong>Assistant Organization Name : </strong>
                        {{
                          application.customer_info.rm_information
                            .assisted_organization_name
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="border p-2 col-6">
              <div class="row">
                <strong style="font-size: 120%">Loan Booking Barnch</strong>

                <div class="col-lg-6">
                  <div v-if="application.customer_info">
                    <p class="pm-0">
                      <strong>Branch Name : </strong>
                      {{
                        application.customer_info.loan_booking_branch
                          .branch_name
                      }}
                    </p>

                    <p class="pm-0">
                      <strong>Branch Name : </strong>
                      {{
                        application.customer_info.loan_booking_branch
                          .sub_br_code
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="border p-2 col-6">
              <div class="row">
                <strong style="font-size: 120%">Delivery Address</strong>

                <div class="col-lg-6">
                  <div v-if="application.customer_info">
                    <p class="pm-0">
                      <strong> Address : </strong>
                      {{
                        application.customer_info.delivery_information
                          .delivery_address
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="border p-2 col-6">
              <div class="row">
                <strong style="font-size: 120%">Down Payment</strong>

                <div class="col-lg-6">
                  <div v-if="application.down_payment_info">
                    <p class="pm-0">
                      <strong> Cib Charge : </strong>
                      {{ application.down_payment_info.cib_charge }}
                    </p>

                    <p class="pm-0">
                      <strong> Processing Fee : </strong>
                      {{ application.down_payment_info.processing_fee }}
                    </p>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div v-if="application.down_payment_info">
                    <p class="pm-0">
                      <strong> Down Payment : </strong>
                      {{ application.down_payment_info.down_payment }}
                    </p>

                    <p class="pm-0">
                      <strong> Total Down Payment : </strong>
                      {{ application.down_payment_info.total_down_payment }}
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div class="border p-2 col-6">
              <div class="row">
                <strong style="font-size: 120%"> Loan Information</strong>

                <div class="col-lg-6">
                  <div v-if="application.emi_payable_info">
                    <p class="pm-0">
                      <strong> Total amount : </strong>
                      {{ application.emi_payable_info.initial_amount }}
                    </p>

                    <p class="pm-0">
                      <strong> Recommanded Loan : </strong>
                      {{ application.emi_payable_info.total_amount }}
                    </p>
                  </div>
                </div>
              </div>
            </div>


            </div>


           

    

           

            <!-- Device Information -->
            
            <!-- Residencial Information -->

         

            <!-- Refrence -->
         

            <!-- Rm Information -->
         

            <!-- Loan Bokking Barnch -->
           
            <!-- Delivery Address -->

       

            <!-- Down Payment -->

            
           
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header ">
                  <!-- <h3 class="card-title d-inline float-left text-white mt-2 btn-sc-sm">
                    Loan Application
                  </h3> -->
                  <!-- <a
                        class="btn-sc-sm float-right add-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#addModal"
                      >
                        <i class="fas fa-plus"></i>
                        <span style="font-size: 15px; font-weight: bold"> Add</span>
                      </a> -->
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
                          data-bs-toggle="modal"
                          data-bs-target="#editModal" 
                                  ><i class="fa-solid fa-pen-to-square"></i></a
                                >
      
                                <a  @click.prevent="deletedepartment(holiday.uuid)" class="-sm ml-2"
                                  ><i class="fa-solid fa-trash text-red"></i></a
                                >
                              </td>
                            </tr>
                          </tbody>
                        </table> -->

                  <!-- <DataTable
                        :data="loans"
                        class="display table table-striped table-bordered mt-2"
                      >
                        <thead style="font-size: 15px">
                          <tr>
                            <th>NID</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Updated Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody style="font-size: 15px">
                          <tr v-for="(loan, index) in loans" :key="index">
                            <td>{{ loan.nid }}</td>
                            <td>{{ loan.customerName }}</td>
                            <td>{{ loan.companyName }}</td>
                            <td>{{ loan.phoneNumber }}</td>
                            <td>{{ loan.email }}</td>
                            <td>{{ loan.updatedDate }}</td>
                            <td>
                              <button @click="handleAction(loan)">Action</button>
                            </td>
                          </tr>
                        </tbody>
                      </DataTable> -->

                  <!-- <DataTable
                        :data="emis"
                        class="display table table-striped table-bordered mt-2"
                      >
                        <thead style="font-size: 15px">
                          <tr>
                            <th>NID</th>
                            <th>Customer Name</th>
                            <th>Company Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Updated Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody style="font-size: 15px"></tbody>
                      </DataTable> -->

                  <div>
                    <DataTable
                      :data="applications"
                      class="display table table-striped table-bordered mt-2"
                    >
                      <thead style="font-size: 15px">
                        <tr>
                          <th>SL #</th>
                          <th>Br. code</th>
                          <th>Date</th>
                          <th>Application ID</th>
                          <th>Customer Name</th>
                          <th>Mobile Number</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody style="font-size: 15px"></tbody>
                    </DataTable>
                  </div>
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
            <button type="button" class="btn-pc-sm" data-bs-dismiss="modal">
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
      id="viewModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="viewModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Loan Application Details</h5>
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

            <div id="document_view" >
              <img :src = "show_image_url" style="height:100%; width: 100%;border-radius: 5px;">
              
            </div>
            <!-- Main content -->
            <section class="content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-3">
                    <!-- Profile Image -->
                    <div
                      style="height: 100%"
                      class="card card-primary card-outline"
                    >
                      <div class="card-body box-profile">
                        <div class="text-center">
                          <div v-if="application.customer_info">
                            <div
                              v-for="file in application.customer_info
                                .nid_information.documents_name"
                              :key="file"
                            >
                              <div  v-if=" file !=null &&  file.file_title == 'nid_photo'">
                                <img
                                  style="height: 100px; width: 100px"
                                  class="profile-user-img img-fluid img-circle"
                                  :src="
                                    image_url +
                                    'image/customer/' +
                                    application.customer_uuid +
                                    '/nid/' +
                                    file.file_name
                                  "
                                  alt="User profile picture"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <h3
                          v-if="application.customer_info"
                          class="profile-username text-center"
                        >
                          {{
                            application.customer_info.personal_information.name
                          }}
                        </h3>

                        <h3 v-else class="profile-username text-center"></h3>

                        <!-- <p class="text-muted text-center">Software Engineer</p> -->

                        <ul class="list-group list-group-unbordered mb-3">
                          <!-- <li class="list-group-item">
                                <b>Full Name</b> <a class="float-right">543</a>
                              </li> -->
                          <li class="list-group-item">
                            <b>Gender</b>
                            <a
                              v-if="application.customer_info"
                              class="float-right"
                            >
                              {{
                                application.customer_info.personal_information
                                  .gender
                              }}
                            </a>
                          </li>
                          <li class="list-group-item">
                            <b>Date of Birth</b>
                            <a v-if="application.customer_info" class="float-right">   {{
                                application.customer_info.personal_information
                                  .dob
                              }}</a>
                          </li>
                          <li class="list-group-item">
                            <b>Mobile No</b>
                            <a
                              v-if="application.customer_info"
                              class="float-right"
                            >
                              {{
                                application.customer_info.personal_information
                                  .phone
                              }}
                            </a>
                          </li>
                          <li class="list-group-item">
                            <b>Email</b>
                            <a
                              v-if="application.customer_info"
                              class="float-right"
                            >
                              {{
                                application.customer_info.personal_information
                                  .email
                              }}
                            </a>
                          </li>
                          <li class="list-group-item">
                            <b>Account Number</b>
                            <a
                              v-if="application.customer_info"
                              class="float-right"
                            >
                              {{
                                application.customer_info.account_information
                                  .AccountNo
                              }}
                            </a>
                          </li>
                          <li class="list-group-item">
                            <b>Customer ID</b>
                            <a
                              v-if="application.customer_info"
                              class="float-right"
                            >
                              {{
                                application.customer_info.account_information
                                  .CustomerId
                              }}
                            </a>
                          </li>

                          <li class="list-group-item">
                            <b>Application ID</b>
                            <a
                              v-if="application.customer_info"
                              class="float-right"
                            >
                              {{
                                application.application_id
                              }}
                            </a>
                          </li>
                        </ul>

                        <button
                          @click.prevent="download_assessment"
                          class="btn-sc-sm w-100  text-bold"
                        >
                          Assesment Report
                        </button>
                      </div>
                      <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                  </div>
                  <!-- /.col -->
                  <div class="col-md-9">
                    <div style="height: 100%" class="card loan-tab">
                      <div class="card-header p-2">
                        <ul
                          style="display: flex; justify-content: center"
                          class="nav nav-pills"
                        >
                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              v-bind:class="{
                                active: permissions.loan_details_view,
                              }"
                              class="nav-link active"
                              href="#nid_information"
                              data-bs-toggle="tab"
                              >NID Information</a
                            >
                          </li>

                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#device_information"
                              data-bs-toggle="tab"
                              >Device Information</a
                            >
                          </li>
                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#emi_information"
                              data-bs-toggle="tab"
                              >EMI Plan
                            </a>
                          </li>
                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#employment_information"
                              data-bs-toggle="tab"
                              >Employment & Income Details</a
                            >
                          </li>
                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#financial_information"
                              data-bs-toggle="tab"
                              >Financial Health & Liabilities</a
                            >
                          </li>

                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#residencial_information"
                              data-bs-toggle="tab"
                              >Residencial Information</a
                            >
                          </li>
                          <!-- <li class="nav-item">
                                <a
                                  class="nav-link"
                                  href="#nominee_information"
                                  data-bs-toggle="tab"
                                  >Nominee Information</a
                                >
                              </li> -->
                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#references"
                              data-bs-toggle="tab"
                              >References</a
                            >
                          </li>
                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#rm_information"
                              data-bs-toggle="tab"
                              >RM Information</a
                            >
                          </li>

                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#loan_booking_branch"
                              data-bs-toggle="tab"
                              >Loan Booking Branch</a
                            >
                          </li>

                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#device_delivery_address"
                              data-bs-toggle="tab"
                              >Device Delivery Address</a
                            >
                          </li>

                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#credit_score"
                              data-bs-toggle="tab"
                              >Credit Score
                            </a>
                          </li>

                          <li
                            v-if="permissions.loan_details_view"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#loan_information"
                              data-bs-toggle="tab"
                              >Loan Information</a
                            >
                          </li>

                          <li
                            v-if="permissions.loan_details_view"
                            @click="check_balance"
                            class="nav-item"
                          >
                            <a
                              class="nav-link"
                              href="#down_payment"
                              data-bs-toggle="tab"
                              >Down Payment</a
                            >
                          </li>

                          <li v-if="  permissions.cib_upload && application.status==1" class="nav-item">
                            <a
                              v-bind:class="{ active: is_cib }"
                              class="nav-link"
                              href="#cib"
                              data-bs-toggle="tab"
                              >CIB Information</a
                            >
                          </li>
                          <li v-if=" !check_cib && permissions.cib_upload && application.status==1" class="nav-item">
                            <a class="nav-link" href="#upload" data-bs-toggle="tab"
                              >Upload CIB Report</a
                            >
                          </li>

                          <li v-if=" check_cib && permissions.cib_view && application.status >= 2 " class="nav-item">
                            <a
                              class="nav-link"
                              href="#uploaded_cib"
                              data-bs-toggle="tab"
                              >Uploaded CIB</a
                            >
                          </li>

                          <li class="nav-item ">
                            <a
                              :class="{ active: is_remarks }"
                              class="nav-link remarks" 
                              href="#remarks"
                              data-bs-toggle="tab"
                              >Remarks</a
                            >
                          </li>
                          <li class="nav-item ">
                            <a
                              :class="{ active: is_remarks }"
                              class="nav-link remarks" 
                              href="#workflow"
                              data-bs-toggle="tab"
                              >Workflow</a
                            >
                          </li>
                          <li class="nav-item"></li>
                        </ul>
                      </div>
                      <!-- /.card-header -->
                      <div class="card-body">
                        <div class="tab-content">
                          <!-- <div class="active tab-pane" id="document">
                                <div class="post">
                                  <div
                                    class="user-block"
                                    style="display: flex; align-items: center"
                                  >
                                    <div
                                      style="text-align: center; margin-right: 30px"
                                    >
                                      <i
                                        class="fas fa-file-pdf"
                                        style="font-size: 50px; color: #e74c3c"
                                      ></i>
                                      <div style="font-size: 18px">NID</div>
                                    </div>
    
                                    <div
                                      style="text-align: center; margin-right: 30px"
                                    >
                                      <i
                                        class="fas fa-file-pdf"
                                        style="font-size: 50px; color: #3498db"
                                      ></i>
                                      <div style="font-size: 18px">
                                        Bank Statement
                                      </div>
                                    </div>
    
                                    <div
                                      style="text-align: center; margin-right: 30px"
                                    >
                                      <i
                                        class="fas fa-file-pdf"
                                        style="font-size: 50px; color: #f39c12"
                                      ></i>
                                      <div style="font-size: 18px">
                                        Others Document
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>
                              </div> -->

                          <div class="tab-pane" id="personal_information">
                            <!-- Post -->
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Personal Information
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Full Name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.name
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Father's Name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.father_name
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Mother's Name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.mother_name
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Spouse Name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.spouse_name
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Mobile Number : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.phone
                                      }}
                                    </span>
                                  </p>
                                </div>
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Date of Birth:</strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.dob
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Spouse Occupation : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information
                                          .spouse_occupation
                                      }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            v-bind:class="{ active: is_cib }"
                            class="tab-pane"
                            id="cib"
                          >
                            <!-- <h3 class="text-center">Customer Information</h3> -->

                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white mt-2"
                                >
                                  CIB Information
                                </h3>

                                <div class="float-right">
                                  <download-excel
                                    v-if="application.customer_info"
                                    class="btn btn-sm btn-success"
                                    :data="cib_data"
                                    worksheet="My Worksheet"
                                    type="xlsx"
                                    :name="
                                      application.customer_info
                                        .personal_information.name + '.xlsx'
                                    "
                                  >
                                    Download Data
                                  </download-excel>
                                </div>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Personal Information : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .account_information.accountnumber
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Mobile Number : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.phone
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Gender : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.gender
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong> NID : </strong>
                                     <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .nid_information.nidInput.nid_number
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Place of Birth:</strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information.permanent_address
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Permanent Address:</strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information.permanent_address
                                      }}
                                    </span>
                                  </p>
                                </div>
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Customer Name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.name
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Date of Birth:</strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.dob
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Father's Name:</strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.father_name
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Mother's Name:</strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.mother_name
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Sector code : </strong>
                                    dfffw343
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            v-bind:class="{
                              active: permissions.loan_details_view,
                            }"
                            class="tab-pane"
                            id="nid_information"
                          >
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  NID Information
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-4">
                                  <p class="mb-3">
                                    <strong>NID: </strong>
                                     <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .nid_information.nidInput.nid_number
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Father's Name: </strong>
                                     <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.father_name
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Mother's Name: </strong>
                                      <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.mother_name
                                      }}
                                    </span>
                                  </p>
                                </div>

                                <div class="col-md-4">
                                  <p class="mb-3">
                                    <strong>Date of Birth: </strong>   <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .nid_information.nidInput.dob
                                      }}
                                    </span>
                                  </p>
                                </div>

                                <div class="col-md-4">
                                
                                </div>


                                <div class="col-md-6" >
                                  <p class="font-size:130%">
                                    <strong>Attachment</strong>
                                  </p>

                                  <div style="display: flex; " v-if="application.customer_info">
                                    <div 
                                      v-for="file in application.customer_info
                                        .nid_information.documents_name"
                                      :key="file"
                                    >
                                      <span
                                        class="pe-2"
                                        v-if=" file != null && file.file_title == 'nid_front'"
                                      >
                                        <p class="mb-1">NID front :</p>

                                        <a  @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/nid/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/nid/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </span>

                                      <span v-if=" file != null && file.file_title == 'nid_back'">
                                        <p class="mb-1">NID Back :</p>

                                        <a  @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/nid/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/nid/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </span>
                                    </div>
                                  </div>


                                </div>

                                

                                



                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="account_information">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Dhaka Bank Account Information
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Account Number : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .account_information.accountnumber
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Customer Name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .account_information.customername
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Customer Number : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .account_information.customernumber
                                      }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="device_information">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Device Information
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-4">
                                  <p class="mb-3">
                                    <strong>Device ID : </strong>
                                    <span v-if="application.product_info">
                                      {{
                                        application.product_info
                                          .product_identity
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Device Name : </strong>
                                    <span v-if="application.product_info">
                                      {{ application.product_info.phone_name }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Model : </strong>
                                    <span v-if="application.product_info">
                                      {{ application.product_info.phone_name }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Price : </strong>
                                    <span
                                      v-if="application.product_selection_info"
                                    >
                                      {{
                                        application.product_selection_info
                                          .specification.basePrice
                                      }}
                                      BDT
                                    </span>
                                  </p>
                                </div>
                                <div class="col-md-4">
                                  <p class="mb-3">
                                    <strong>Verient : </strong>
                                    <span
                                      v-if="application.product_selection_info"
                                    >
                                      {{
                                        application.product_selection_info
                                          .specification.variant_name
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Brand : </strong>
                                    <span v-if="application.product_info">
                                      {{ application.product_info.brand_name }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="emi_information">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  EMI Plan
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">

                        <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Emi Tenure : </strong>
                                    <span v-if="application.emi_payable_info">
                                      {{ application.emi_payable_info.emi_duration }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Interest rate : </strong>
                                    <span v-if="application.emi_payable_info">
                                      {{
                                        application.emi_payable_info
                                          .interest_rate
                                      }}
                                      %
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Monthly Payable : </strong>
                                    <span v-if="application.emi_payable_info">
                                      {{
                                        application.emi_payable_info
                                          .monthly_amount
                                      }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="employment_information">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Employment & Income Details
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">

                                <pdf src=""></pdf>

                                <div class="col-md-4">
                                  <p class="mb-3">
                                    <strong>Profession : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .employment_information.profession
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Company name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .employment_information.company_name
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Desiganation : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .employment_information.designation
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Employment Type : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .employment_information
                                          .employment_type
                                      }}
                                    </span>
                                  </p>
                                </div>
                                <div class="col-md-4">
                                  <p class="mb-3">
                                    <strong>Date of Joining : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .employment_information
                                          .date_of_joining
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Company address : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .employment_information
                                          .company_address
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Monthly Income : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .employment_information.monthly_income
                                      }}
                                    </span>
                                  </p>
                                </div>

                                <div class="col-md-8">
                                  <p class="font-size:130%">
                                    <strong>Attachment</strong>
                                  </p>

                                  <div style="display: flex;" v-if="application.customer_info">
                                    <div class="pe-2"
                                      v-for="file in application.customer_info
                                        .employment_information.documents_name"
                                      :key="file"
                                    >
                                      <div
                                        v-if=" file != null &&  file.file_title == 'office_id'"
                                      >
                                        <p class="mb-1">Office ID :</p>

                                        <a @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/employment/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/employment/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </div>

                                      <div
                                        v-if=" file != null &&
                                          file.file_title == 'visiting_card'
                                        "
                                      >
                                        <p class="mb-1">Visting Card :</p>

                                        <a @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/employment/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/employment/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </div>

                                      <div
                                        v-if=" file != null &&
                                          file.file_title ==
                                          'salary_certificate'
                                        "
                                      >
                                        <p class="mb-1">Pay Slip :</p>

                                        <a @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/employment/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/employment/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="financial_information">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Financial Health & Liabilities
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-4">
                                  <p class="mb-3">
                                    <strong>Have previous loan : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information.have_loan
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>EMI :</strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information.loan_emi
                                      }} Month
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Loan outstandings :</strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information
                                          .loan_outstanding
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Loan Tenures : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information.loan_tenure
                                      }} Month
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Have car : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information.dps_car
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Car price : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information.car_price
                                      }}
                                    </span>
                                  </p>
                                </div>

                                <div class="col-md-4">
                                  <p class="mb-3">
                                    <strong>Have DPS : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information.have_dps
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>DPS amount : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information.dps_amount
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Have credit card : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information
                                          .have_credit_card
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Credit card quantity : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information
                                          .credit_card_quantity
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Credit limit : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .financial_information.credit_limit
                                      }}
                                    </span>
                                  </p>
                                </div>

                                <div class="col-md-12">
                                  <p class="font-size:130%">
                                    <strong>Attachment</strong>
                                  </p>

                                  <div  style="display: flex" v-if="application.customer_info">
                                    <div class="pe-3"
                                      v-for="file in application.customer_info
                                        .financial_information.documents_name"
                                      :key="file"
                                    >
                                      <div 
                                        v-if=" file !=null &&
                                           file.file_title == 'bank_statement'
                                        "
                                      >
                                        <p class="mb-1">Bank Statement :</p>

                                        <a  
                                          @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/financial/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/financial/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </div>

                                      <div
                                        v-if=" file !=null &&
                                          file.file_title == 'loan_statement'
                                        "
                                      >
                                        <p class="mb-1">
                                          Bank Statement (other):
                                        </p>

                                        <a 
                                          @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/financial/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/financial/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </div>

                                      <div
                                        v-if=" file !=null && file.file_title == 'dps_document'"
                                      >
                                        <p class="mb-1">Dps Document :</p>

                                        <a 
                                        @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/financial/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/financial/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </div>

                                      <div
                                        v-if=" file !=null &&
                                          file.file_title == 'tin_certificate'
                                        "
                                      >
                                        <p class="mb-1">Tin Certificate :</p>

                                        <a 
                                          @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/financial/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/financial/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="loan_information">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Loan Information
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Device Price : </strong>
                                    <span v-if="application.emi_payable_info">
                                      {{
                                        application.emi_payable_info
                                          .initial_amount
                                      }}
                                      tk
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Recommanded Loan : </strong>
                                    <span
                                      style="font-size: 120%"
                                      v-if="application.emi_payable_info"
                                    >
                                      {{
                                        application.emi_payable_info
                                          .total_amount
                                      }}
                                      tk
                                    </span>
                                  </p>
                                </div>
                                <div class="col-md-6"></div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="residencial_information">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Residencial Information
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-4">
                                  <strong style="font-size: 120%"
                                    >Present address : 
                                  </strong>

                                  <p class="mb-3 mt-2">
                                    <strong>Division : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information.present_division
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3 mt-23">
                                    <strong>City : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information.present_city
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3 mt-23">
                                    <strong>Area : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information.present_area
                                      }}
                                    </span>
                                  </p>



                                  <p class="mb-3">
                                    <strong>Address : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information.present_address
                                      }}
                                    </span>
                                  </p>
                                </div>
                                <div class="col-md-4">
                                  <strong style="font-size: 120%"
                                    >Permanent address :
                                  </strong>

                                  <p class="mb-3 mt-2">
                                    <strong>Division : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information.permanent_division
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3 mt-23">
                                    <strong>City : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information
                                          .permanent_city
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3 mt-23">
                                    <strong>Area : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information
                                          .permanent_area
                                      }}
                                    </span>
                                  </p>


                                  <p class="mb-3">
                                    <strong>Address : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .address_information.permanent_address
                                      }}
                                    </span>
                                  </p>
                                </div>

                                <div class="col-md-12">
                                  <p class="font-size:130%">
                                    <strong>Attachment</strong>
                                  </p>

                                  <div style="display: flex" v-if="application.customer_info">
                                    <div
                                      v-for="file in application.customer_info
                                        .address_information.documents_name"
                                      :key="file"
                                    >
                                      <div
                                        v-if=" file !=null && file.file_title == 'utility_bill'"
                                      >
                                        <p class="mb-1">Utility Bill :</p>

                                        <a 
                                          @mouseleave="hideImage"  @mouseover="showImage(image_url + 'image/customer/' + application.customer_uuid + '/address/' + file.file_name)"
                                          target="_blank"
                                          :href="
                                            image_url +
                                            'image/customer/' +
                                            application.customer_uuid +
                                            '/address/' +
                                            file.file_name
                                          "
                                          class="btn-sc-sm"
                                        >
                                          <i class="fas fa-download"></i>
                                          Download
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="references">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  References
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Name : </strong>

                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .reference_information.referee1_name
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Contact Number : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .reference_information
                                          .referee1_contact_number
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Company name : </strong>

                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .reference_information
                                          .referee1_company_name
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Designation : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .reference_information
                                          .referee1_designation
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Relation : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .reference_information
                                          .referee1_relation
                                      }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="rm_information">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  RM Information
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <div v-if="application.customer_info">
                                    <div
                                      v-if="
                                        application.customer_info.rm_information
                                          .isSelf == 'true'
                                      "
                                    >
                                      <strong>Applying Myself</strong>
                                    </div>

                                      <div
                                      v-if="
                                        application.customer_info.rm_information
                                          .isDhakaBank == 'true'
                                      "
                                    >
                                      <strong>RM Name : </strong>
                                      {{
                                        application.customer_info.rm_information
                                          .employee_name
                                      }}
                                    </div>


                                    <div
                                      v-if="
                                        application.customer_info.rm_information
                                          .isDhakaBank == 'true'
                                      "
                                    >
                                      <strong>DBL Employee ID : </strong>
                                      {{
                                        application.customer_info.rm_information
                                          .dbl_employee_id
                                      }}
                                    </div>

                                     <div
                                      v-if="
                                        application.customer_info.rm_information
                                          .isDhakaBank == 'true'
                                      "
                                    >
                                      <strong>RM Mobile Number : </strong>
                                      {{
                                        application.customer_info.rm_information
                                          .employee_mobile_number
                                      }}
                                    </div>
                                    <div
                                      v-if="
                                        application.customer_info.rm_information
                                          .isAssisted == 'true'
                                      "
                                    >
                                      <p>
                                        <strong
                                          >Assistant Mobile Number :
                                        </strong>
                                        {{
                                          application.customer_info
                                            .rm_information
                                            .assisted_mobile_number
                                        }}
                                      </p>
                                      <p>
                                        <strong
                                          >Assistant Organization Name :
                                        </strong>
                                        {{
                                          application.customer_info
                                            .rm_information
                                            .assisted_organization_name
                                        }}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="loan_booking_branch">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Loan Booking Branch
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Branch Name : </strong>

                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .loan_booking_branch.branch_name
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Branch Code : </strong>

                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .loan_booking_branch.branch_code
                                      }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="device_delivery_address">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Device Delivery Address
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Delivery Address :</strong>

                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .delivery_information.full_address
                                      }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="credit_score">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Credit Score
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-12">

                                  <table class="table table-striped table-bordered mt-2">
                                    <thead>
                                      <tr>
                                        <th>Parameter Name</th>
                                        <th>Achived Score</th>

                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="(key,value) in score.achieved_score"
                                        :key="key"
                                      > 

                                      <td>{{ value }}</td>

                                        <td>{{ key }}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                        
                                
                                </div>

                                <div class="col-md-12 d-flex justify-content-space-between">

                                  <p><strong>Final Score  : {{ score.final_score  }}  </strong></p>

                                  <p class=" ml-3"><strong>Recommended Loan from Credit Score : {{ score.recommanded_loan }}  </strong></p>

      

                      </div>

                              
                              </div>
                            </div>
                          </div>
                          <div  class="tab-pane" id="down_payment">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Down Payment
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>CIB Charge : </strong>

                                    <span v-if="application.customer_info">
                                      {{
                                        application.down_payment_info.cib_charge
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Processing Fee : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.down_payment_info
                                          .processing_fee
                                      }}
                                    </span>
                                  </p>
                                  <p class="mb-3">
                                    <strong>Down Payment : </strong>

                                    <span v-if="application.customer_info">
                                      {{
                                        application.down_payment_info
                                          .down_payment
                                      }}
                                    </span>
                                  </p>

                                  <p class="mb-3">
                                    <strong>Total Down Payment : </strong>
                                    <span
                                      class="text-size : 120%"
                                      v-if="application.down_payment_info"
                                    >
                                      {{
                                        application.down_payment_info
                                          .total_down_payment
                                      }}
                                    </span>
                                  </p>

                                  <p style="font-size: 140%" class="mb-3">
                                    <strong>Account Balance: </strong>
                                    <span class="text-size : 120%">
                                      {{ balance }}
                                    </span>
                                  </p>

                                  <div v-if="application.down_payment_info && balance">
                                    <span
                                      v-if="
                                        parseInt(balance) >=
                                        application.down_payment_info
                                          .total_down_payment
                                      "
                                      style="font-size: 120%; color: green"
                                    >
                                      Down Payment is available !</span
                                    >

                                    <span
                                      v-else
                                      style="font-size: 120%; color: red"
                                    >
                                      Min amount required to approve the loan
                                      !</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div :class="{'active' : is_remarks}" class="tab-pane remarks" id="remarks">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Remarks
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">

                                <div class="col-md-12">


                                  <lable class="font-weight-bold mt-2  text-danger">Decline Reason(If Decline)</lable>

<select v-model="note" class="form-select mt-2" >

  <option disabled value="null">Select a option</option>
  <option  value="Unstable Employment: Employment history lacks stability or continuity">Unstable Employment: Employment history lacks stability or continuity.</option>
  <option  value="Salary Not Deposited in Bank: Salary is not routed through a verified bank account.">Salary Not Deposited in Bank: Salary is not routed through a verified bank account.</option>
  <option  value="Irregular Salary Deposits: Salary credits are inconsistent or irregular.">Irregular Salary Deposits: Salary credits are inconsistent or irregular.</option>
  <option  value="Employment Type Not Eligible: Applicant’s employment category is ineligible.">Employment Type Not Eligible: Applicant’s employment category is ineligible.</option>
  <option  value="NID Copy Missing: National ID (NID) copy not submitted or illegible.">NID Copy Missing: National ID (NID) copy not submitted or illegible.</option>
  <option  value="Visiting Card Missing: Office/business visiting card not submitted.">Visiting Card Missing: Office/business visiting card not submitted.</option>
  <option  value="TIN Certificate Missing: Tax Identification Number (TIN) document not provided.">TIN Certificate Missing: Tax Identification Number (TIN) document not provided.</option>
  <option  value="Bank Statement Not Provided: Bank statement for income verification is missing">Bank Statement Not Provided: Bank statement for income verification is missing.</option>
  <option  value="Loan/DPS/FDR Statement Required: Proof of deposits/loans not submitted.">Loan/DPS/FDR Statement Required: Proof of deposits/loans not submitted.</option>
  <option  value="Incorrect Current Address: Address provided does not match records.">Incorrect Current Address: Address provided does not match records.</option>
  <option  value="UBS Name Mismatch: Name on NID does not match bank records.">UBS Name Mismatch: Name on NID does not match bank records.</option>
  <option  value="Negative CIB Report: Poor credit history reported by Credit Information Bureau.">Negative CIB Report: Poor credit history reported by Credit Information Bureau.</option>
  <option  value="Existing Loan with Other Bank: Active loan detected at another institution.">Existing Loan with Other Bank: Active loan detected at another institution.</option>
  <option  value="Liability Mismatch: Existing liabilities exceed eligibility limits.">Liability Mismatch: Existing liabilities exceed eligibility limits.</option>
  <option  value="Incomplete Bank Statement: Bank statement is unclear or incomplete.">Incomplete Bank Statement: Bank statement is unclear or incomplete.</option>
  <option  value="Not Interested: Applicant withdrew the application.">Not Interested: Applicant withdrew the application.</option>
  <option  value="Product/Loan Change Requested: Loan type/terms altered post-submission.">Product/Loan Change Requested: Loan type/terms altered post-submission.</option>
  <option  value="Age Limit Exceeded: Applicant’s age outside permissible range.">Age Limit Exceeded: Applicant’s age outside permissible range.</option>
  <option  value="Inappropriate Photo: Profile photo violates guidelines.">Inappropriate Photo: Profile photo violates guidelines.</option>
  <option  value="Address Verification Failed: Address proof is invalid or outdated.">Address Verification Failed: Address proof is invalid or outdated.</option>  
  <option  value="Economic Risk: Application declined due to market/risk factors.">Economic Risk: Application declined due to market/risk factors.</option>  
  <option  value="Updated FDR/DPS Statement required">Updated FDR/DPS Statement required </option>  
  <option  value="Updated Salary Statement required">Updated Salary Statement required</option>  
  <option  value="Account Blocked: Attempted faking picture and documents">Account Blocked: Attempted faking picture and documents</option>  




</select>
<span id="note" class="error"></span>


<input  class="form-control mt-2" type="text" placeholder="Remarks" v-model="remarks">





                                </div>


                          
                              
                              </div>
                            </div>
                          </div>
                          <div  class="tab-pane " id="workflow">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Work Flow
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">

                                <div v-if="workflow.length== 0" class="col-md-4 p-3  border" >


                                  <p class="text-bold text-danger mt-2">Application Under Review</p>



                                </div>
                                

                                <div v-for="w in workflow" :key="w"  class="col-md-4 p-3  border" >
                                    

                                  <p class="text-bold text-success pm-0" ><b class="text-black">Activity :  </b> {{w.activity}}</p>
                                   
                                  <p class="pm-0" ><b>Employee Name :  </b> {{  w.user_name }}</p>
                                  <p class="pm-0"><b>Employee ID :  </b> {{  w.employee_id }}</p>
                                  <p class="pm-0" ><b>Role :  </b> {{  w.role }}</p>
                                  <p class="pm-0"><b>Time :  </b> {{  w.time }}</p>





                                </div>

                                
                                <p v-if="application.loan_creation_details !=null" class="text-bold text-black   p-2  mt-2 border" >Loan Account Number : <span class="text-success"> {{ application.loan_creation_details.loanaccno }}</span></p>

                              

                                <p class="text-bold text-black   p-2  mt-2 border" >Processing Time : <span class="text-success"> {{ processing_time }}</span></p>

                              </div>

                            </div>
                          </div>

                          <div class="tab-pane" id="notes">
                            <form class="form-horizontal">
                              <div class="form-group row">
                                <label
                                  for="inputExperience"
                                  class="col-sm-2 col-form-label"
                                  >Notes</label
                                >
                                <div class="col-sm-10">
                                  <textarea
                                    class="form-control"
                                    id="inputExperience"
                                    placeholder="Notes"
                                  ></textarea>
                                </div>
                              </div>

                              <div class="form-group row">
                                <div class="offset-sm-2 col-sm-10">
                                  <button type="submit" class="btn btn-danger">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>

                          <div class="tab-pane row" id="category">
                            <div class="container mt-4">
                              <p class="text-danger font-weight-bold">
                                Please Select Customer Category as Appropriate
                              </p>

                              <div class="form-group row">
                                <!-- Sector Code -->
                                <div class="col-md-4">
                                  <div class="d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="sectorCode"
                                      class="mr-2"
                                    />
                                    <label for="sectorCode" class="mr-2"
                                      >Sector Code</label
                                    >
                                  </div>
                                  <select class="form-control mt-1">
                                    <option value="">Select Sector Code</option>
                                    <option value="code1">Code 1</option>
                                    <option value="code2">Code 2</option>
                                  </select>
                                </div>

                                <!-- Eco Code -->
                                <div class="col-md-4">
                                  <div class="d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="ecoCode"
                                      class="mr-2"
                                    />
                                    <label for="ecoCode" class="mr-2"
                                      >Eco Code</label
                                    >
                                  </div>
                                  <select class="form-control mt-1">
                                    <option value="">Select Eco Code</option>
                                    <option value="code1">Code 1</option>
                                    <option value="code2">Code 2</option>
                                  </select>
                                </div>

                                <!-- Security Code -->
                                <div class="col-md-4">
                                  <div class="d-flex align-items-center">
                                    <input
                                      type="checkbox"
                                      id="securityCode"
                                      class="mr-2"
                                    />
                                    <label for="securityCode" class="mr-2"
                                      >Security Code</label
                                    >
                                  </div>
                                  <select class="form-control mt-1">
                                    <option value="">
                                      Select Security Code
                                    </option>
                                    <option value="code1">Code 1</option>
                                    <option value="code2">Code 2</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div v-if="!check_cib" class="tab-pane" id="upload">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Choose CIB Report
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="form-group row">
                                  <div class="col-sm-6">
                                    <input
                                      type="file"
                                      accept=".pdf"
                                      id="documentUpload"
                                      class="form-control"
                                      @change="fileSelect"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div v-if="check_cib" class="tab-pane" id="uploaded_cib">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Uploaded CIB
                                </h3>
                              </div>

                              <!-- form start -->
                              <div
                                v-if="application.cib_information"
                                class="row card-body"
                              >
                                <a
                                  :href="
                                    file_url_MZ +
                                    'image/customer/' +
                                    application.customer_uuid +
                                    '/cib/' +
                                    application.cib_information.file_name
                                  "

                                  style="width: 100px;"

                                  class="btn-sc-sm  text-left d-inline " 
                                >
                                  <i class="fas fa-file-pdf text-danger"></i>
                                  Download
                                </a>

                                <!-- <iframe
    :src="  file_url_MZ +
                                    'image/customer/' +
                                    application.customer_uuid +
                                    '/cib/' +
                                    application.cib_information.file_name"
    width="100%"
    height="300px"
    style="border: none;"
  ></iframe> -->
             

                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="history">
                            <table
                              class="display table table-striped table-bordered mt-2"
                            >
                              <thead>
                                <tr>
                                  <th>Loan Application ID</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="history in histories"
                                  :key="history.nid"
                                >
                                  <td>{{ history.nid }}</td>
                                  <td>{{ history.customerName }}</td>

                                  <td>
                                    <div class="action-buttons">
                                      <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#addMOdal"
                                        @click="editEMI(history)"
                                        class="btn btn-warning btn-sm mr-2"
                                      >
                                        <i class="fas fa-eye"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div class="tab-pane" id="loandetails">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white mt-2"
                                >
                                  Loan Details
                                </h3>

                                <div class="float-right">
                                  <button class="btn btn-success btn-sm mr-2">
                                    <i class="fas fa-file-download"></i>
                                    <span
                                      style="font-size: 15px; font-weight: bold"
                                    >
                                      Download</span
                                    >
                                  </button>
                                </div>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Loan Account Number:</strong>
                                    {{ customerNumber }}
                                  </p>

                                  <p class="mb-3">
                                    <strong>Loan Amount : </strong>
                                    {{ mobileNumber }}
                                  </p>

                                  <p class="mb-3">
                                    <strong>EMI Duration :</strong> {{ nid }}
                                  </p>

                                  <p class="mb-3">
                                    <strong>Process Fee : </strong>
                                    {{ nid }}
                                  </p>
                                </div>
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Loan Product : </strong>
                                    {{ customerName }}
                                  </p>
                                  <p class="mb-3">
                                    <strong>EMI:</strong> {{ altNo }}
                                  </p>

                                  <p class="mb-3">
                                    <strong>Number of EMI : </strong>
                                    {{ dateOfBirth }}
                                  </p>

                                  <p class="mb-3">
                                    <strong>Interest Rate : </strong>
                                    {{ altNo }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="empdetails">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Employment Details
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Company Name:</strong>
                                    {{ customerNumber }}
                                  </p>
                                  <p class="mb-3">
                                    <strong>Designation:</strong>
                                    {{ customerName }}
                                  </p>
                                  <!-- <p class="mb-3">
                                        <strong>Employer Name:</strong>
                                        {{ mobileNumber }}
                                      </p> -->
                                </div>
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Working Status:</strong> {{ altNo }}
                                  </p>

                                  <!-- <p class="mb-3">
                                        <strong>Designation:</strong>
                                        {{ dateOfBirth }}
                                      </p>
    
                                      <p class="mb-3">
                                        <strong>NID:</strong> {{ altNo }}
                                      </p> -->
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="bankdetails">
                            <div class="card card-primary">
                              <div class="card-header">
                                <h3
                                  class="card-title d-inline float-left text-white"
                                >
                                  Customer Bank Details
                                </h3>
                              </div>

                              <!-- form start -->
                              <div class="row card-body">
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Bank Name:</strong>
                                    {{ customerNumber }}
                                  </p>
                                  <p class="mb-3">
                                    <strong>Branch Code:</strong>
                                    {{ customerName }}
                                  </p>
                                  <!-- <p class="mb-3">
                                        <strong>Employer Name:</strong>
                                        {{ mobileNumber }}
                                      </p> -->
                                </div>
                                <div class="col-md-6">
                                  <p class="mb-3">
                                    <strong>Account Number:</strong> {{ altNo }}
                                  </p>

                                  <!-- <p class="mb-3">
                                        <strong>Designation:</strong>
                                        {{ dateOfBirth }}
                                      </p>
    
                                      <p class="mb-3">
                                        <strong>NID:</strong> {{ altNo }}
                                      </p> -->
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane" id="assessmentreport">
                            <div class="modal-footer">
                              <button
                                @click.prevent="downloadExcel"
                                type="button"
                                class="btn-excel"
                              >
                                <i class="fas fa-file-excel fa-lg"></i>
                                Download Excel
                              </button>

                              <button
                                @click.prevent="exportToPDF"
                                type="button"
                                class="btn-pdf"
                              >
                                <i class="fas fa-file-pdf fa-lg"></i>
                                Export to PDF
                              </button>
                            </div>
                            <div class="section-box">
                              <h6 class="section-heading">
                                Bank Account Information
                              </h6>
                              <hr />
                              <div class="row">
                                <div class="col-md-6">
                                  <p>
                                    <strong>Account Number : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .account_information.accountnumber
                                      }}
                                    </span>
                                  </p>

                                  <p>
                                    <strong>Customer Number : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .account_information.customernumber
                                      }}
                                    </span>
                                  </p>
                                  <p>
                                    <strong>Account Name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .account_information.customername
                                      }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <!-- Personal Information -->
                            <div class="section-box">
                              <h6 class="section-heading">
                                Personal Information
                              </h6>
                              <hr />
                              <div class="row">
                                <div class="col-md-6">
                                  <p>
                                    <strong>Applicant’s Name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.name
                                      }}
                                    </span>
                                  </p>
                                  <p><strong>National ID:</strong> 987654321</p>
                                  <p>
                                    <strong>Mobile Number : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.phone
                                      }}
                                    </span>
                                  </p>
                                  <p>
                                    <strong>Email Address : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.email
                                      }}
                                    </span>
                                  </p>
                                  <p>
                                    <strong>Date of Birth:</strong> 01/01/1980
                                  </p>
                                  <p>
                                    <strong>Gender:</strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.gender
                                      }}
                                    </span>
                                  </p>
                                  <p>
                                    <strong>Customer Current Age:</strong> 44
                                    years
                                  </p>
                                </div>
                                <div class="col-md-6 border-left">
                                  <p>
                                    <strong>Highest Education : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information
                                          .highest_education
                                      }}
                                    </span>
                                  </p>
                                  <p>
                                    <strong>Sopuse name : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information.spouse_name
                                      }}
                                    </span>
                                  </p>

                                  <p>
                                    <strong>Sopuse occupation : </strong>
                                    <span v-if="application.customer_info">
                                      {{
                                        application.customer_info
                                          .personal_information
                                          .spouse_occupation
                                      }}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <!-- Customer Profession/Income -->
                            <div class="section-box">
                              <h6 class="section-heading">
                                Customer Profession/Income
                              </h6>
                              <hr />
                              <div class="row">
                                <div class="col-md-6">
                                  <p>
                                    <strong>Profession:</strong> Software
                                    Engineer
                                  </p>
                                  <p>
                                    <strong>Designation:</strong> Senior
                                    Developer
                                  </p>
                                  <p><strong>Monthly Income:</strong> $5000</p>
                                </div>
                                <div class="col-md-6 border-left">
                                  <p>
                                    <strong>Company Name & Address:</strong>
                                    Tech Solutions, 789, High Tech Park, Dhaka
                                  </p>
                                  <p>
                                    <strong>Nature of Service/Business:</strong>
                                    IT Services
                                  </p>
                                  <p>
                                    <strong>Length of Service/Business:</strong>
                                    10 years
                                  </p>
                                </div>
                              </div>
                            </div>

                            <!-- Reference / Guarantor Information -->
                            <div class="section-box">
                              <h6 class="section-heading">
                                Reference / Guarantor Information
                              </h6>
                              <hr />
                              <div class="row">
                                <div class="col-md-6">
                                  <p>
                                    <strong>Reference / Guarantor:</strong>
                                    Kamal Khan
                                  </p>
                                  <p>
                                    <strong
                                      >One Is Nominee Guarantor/Spouse:</strong
                                    >
                                    Guarantor
                                  </p>
                                </div>
                                <div class="col-md-6 border-left">
                                  <p>
                                    <strong>Emergency Contact:</strong>
                                    +8809876543210
                                  </p>
                                  <p>
                                    <strong>National ID:</strong> 1122334455
                                  </p>
                                  <p><strong>Relationship:</strong> Brother</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- /.tab-pane -->
                          <div class="tab-pane" id="timeline">
                            <!-- The timeline -->
                            <div class="timeline timeline-inverse">
                              <!-- timeline time label -->
                              <div class="time-label">
                                <span class="bg-danger"> 10 Feb. 2014 </span>
                              </div>
                              <!-- /.timeline-label -->
                              <!-- timeline item -->
                              <div>
                                <i class="fas fa-envelope bg-primary"></i>

                                <div class="timeline-item">
                                  <span class="time"
                                    ><i class="far fa-clock"></i> 12:05</span
                                  >

                                  <h3 class="timeline-header">
                                    <a href="#">Support Team</a> sent you an
                                    email
                                  </h3>

                                  <div class="timeline-body">
                                    Etsy doostang zoodles disqus groupon greplin
                                    oooj voxy zoodles, weebly ning heekya
                                    handango imeem plugg dopplr jibjab, movity
                                    jajah plickers sifteo edmodo ifttt zimbra.
                                    Babblely odeo kaboodle quora plaxo ideeli
                                    hulu weebly balihoo...
                                  </div>
                                  <div class="timeline-footer">
                                    <a href="#" class="btn btn-primary btn-sm"
                                      >Read more</a
                                    >
                                    <a href="#" class="btn btn-danger btn-sm"
                                      >Delete</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <!-- END timeline item -->
                              <!-- timeline item -->
                              <div>
                                <i class="fas fa-user bg-info"></i>

                                <div class="timeline-item">
                                  <span class="time"
                                    ><i class="far fa-clock"></i> 5 mins
                                    ago</span
                                  >

                                  <h3 class="timeline-header border-0">
                                    <a href="#">Sarah Young</a> accepted your
                                    friend request
                                  </h3>
                                </div>
                              </div>
                              <!-- END timeline item -->
                              <!-- timeline item -->
                              <div>
                                <i class="fas fa-comments bg-warning"></i>

                                <div class="timeline-item">
                                  <span class="time"
                                    ><i class="far fa-clock"></i> 27 mins
                                    ago</span
                                  >

                                  <h3 class="timeline-header">
                                    <a href="#">Jay White</a> commented on your
                                    post
                                  </h3>

                                  <div class="timeline-body">
                                    Take me to your leader! Switzerland is small
                                    and neutral! We are more like Germany,
                                    ambitious and misunderstood!
                                  </div>
                                  <div class="timeline-footer">
                                    <a
                                      href="#"
                                      class="btn btn-warning btn-flat btn-sm"
                                      >View comment</a
                                    >
                                  </div>
                                </div>
                              </div>
                              <!-- END timeline item -->
                              <!-- timeline time label -->
                              <div class="time-label">
                                <span class="bg-success"> 3 Jan. 2014 </span>
                              </div>
                              <!-- /.timeline-label -->
                              <!-- timeline item -->
                              <div>
                                <i class="fas fa-camera bg-purple"></i>

                                <div class="timeline-item">
                                  <span class="time"
                                    ><i class="far fa-clock"></i> 2 days
                                    ago</span
                                  >

                                  <h3 class="timeline-header">
                                    <a href="#">Mina Lee</a> uploaded new photos
                                  </h3>

                                  <div class="timeline-body">
                                    <img
                                      src="https://placehold.it/150x100"
                                      alt="..."
                                    />
                                    <img
                                      src="https://placehold.it/150x100"
                                      alt="..."
                                    />
                                    <img
                                      src="https://placehold.it/150x100"
                                      alt="..."
                                    />
                                    <img
                                      src="https://placehold.it/150x100"
                                      alt="..."
                                    />
                                  </div>
                                </div>
                              </div>
                              <!-- END timeline item -->
                              <div>
                                <i class="far fa-clock bg-gray"></i>
                              </div>
                            </div>
                          </div>
                          <!-- /.tab-pane -->

                          <div class="tab-pane" id="settings">
                            <form class="form-horizontal">
                              <div class="form-group row">
                                <label
                                  for="inputName"
                                  class="col-sm-2 col-form-label"
                                  >Name</label
                                >
                                <div class="col-sm-10">
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="inputName"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div class="form-group row">
                                <label
                                  for="inputEmail"
                                  class="col-sm-2 col-form-label"
                                  >Email</label
                                >
                                <div class="col-sm-10">
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="inputEmail"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div class="form-group row">
                                <label
                                  for="inputName2"
                                  class="col-sm-2 col-form-label"
                                  >Name</label
                                >
                                <div class="col-sm-10">
                                  <input
                                    type="text" 
                                    class="form-control"
                                    id="inputName2"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div class="form-group row">
                                <label
                                  for="inputExperience"
                                  class="col-sm-2 col-form-label"
                                  >Experience</label
                                >
                                <div class="col-sm-10">
                                  <textarea
                                    class="form-control"
                                    id="inputExperience"
                                    placeholder="Experience"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="form-group row">
                                <label
                                  for="inputSkills"
                                  class="col-sm-2 col-form-label"
                                  >Skills</label
                                >
                                <div class="col-sm-10">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="inputSkills"
                                    placeholder="Skills"
                                  />
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="offset-sm-2 col-sm-10">
                                  <div class="checkbox">
                                    <label>
                                      <input type="checkbox" /> I agree to the
                                      <a href="#">terms and conditions</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="offset-sm-2 col-sm-10">
                                  <button type="submit" class="btn btn-danger">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          <!-- /.tab-pane -->
                        </div>
                        <!-- /.tab-content -->
                    
                      </div>
                      <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->
              </div>
              <!-- /.container-fluid -->
            </section>
          </div>
          <div class="modal-footer">
            <!-- <download-excel  class="btn btn-sm btn-primary"
    :data="process_data"
    worksheet="My Worksheet"
    type="xlsx"
    name="{{application.customer_info.personal_information.name}}">
    Download Data
  </download-excel>
   -->

            <button
              style="display: none;"
              v-if="permissions.send_back && application.status == 3"
              @click.prevent="send_back"
              class="btn-dn-sm"
            >
              Send Back
            </button>


              <button

             style="display: none;"

            
              @click.prevent="test"
              class="btn-dn-sm"
            >
              Test
            </button>

         
            <button

              v-if="permissions.loan_disverse && application.status == 3  &&  parseInt(balance) >=
                                        application.down_payment_info
                                          .total_down_payment "
          
              @click.prevent="loan_create_check"
              class="btn-sc-sm"
            >
              Disburse
            </button>

               <button

              v-if="permissions.loan_disverse && application.status == 7  && (application.profee == null || application.cib == null || application.tcsa ==null) &&  parseInt(balance) >=
                                        application.down_payment_info
                                          .total_down_payment  "
          
              @click.prevent="retry_disburse"
              class="btn-sc-sm"
            >
              Retry Disburse
            </button>




            <button
              v-if="permissions.loan_approve && (application.status == 0 || application.status == 6)"
              @click.prevent="cib_require"
              class="btn-sc-sm"
            >
              CIB Required
            </button>

            <button
              v-if=" !check_cib && permissions.cib_upload && application.status == 1"
              @click.prevent="cib_upload"
              class="btn-sc-sm"
            >
              Upload CIB
            </button>

            <button
              v-if="permissions.loan_approve && application.status <= 2"
              @click.prevent="application_reject"
              class="btn-dn-sm"
            >
              Decline
            </button>
            <button
              v-if="permissions.loan_approve && application.status == 2"
              @click.prevent="application_approve"
              class="btn-sc-sm"
            >
              Approve
            </button>
            <button type="button" class="btn-pc-sm" data-bs-dismiss="modal">
              Cancel
            </button>
            <!-- <button
                  @click.prevent="updateemi(emi.uuid)"
                  type="button"
                  class="btn-sc-sm"
                >
                  Update
                </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import $ from "jquery";
import axios from "axios";
import { Validator } from "@/other/Validator";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net-bs5";
import jsPDF from "jspdf";
import moment from "moment"; 



DataTable.use(DataTablesCore);

DataTable.use(DataTablesCore);
export default {
  components: { DataTable},

  data() {
    return {
      applications: [],
      is_cib : false,
      errors: {},
      tes_data: [],
      show_image_url : '',

      emi: {},
      application_uuid: "",
      application: {},
      file: null,
      file_name: "",
      check_cib: false,
      process_data: [],
      popup_status: null,
      image_url: process.env.VUE_APP_FILE_URL_DMZ,
      file_url_MZ:process.env.VUE_APP_FILE_URL_MZ,
      loader: document.getElementById("loader"),
      selected_status: "",
      role: "",
      balance: "",
      confirmation: false,
      cib_data: "",
      permission: [],
      score: "",
      note : null,
      activeParameters: [],
      inactiveParameters: [],
      user : "",
      is_remarks : false,
      permissions: {},
      moment : moment,
      workflow: [],
      loan_account_no : null,

      processing_time : "",
    };
  },

  props: {
    dataFromMaster: {
      type: String,
      required: true,
    },
  },

  watch: {
    dataFromMaster(newValue) {
      this.confirmation = newValue;
     



      

      if (this.confirmation == true) {


         if (this.selected_status == "test") {
        alert("confirm");

       }

      
        if (this.selected_status == "cib_require") {

         
          this.updateStatus(this.application.uuid, 1, "CIB Required");


        }

        if (this.selected_status == "cib_upload") {



          this.updateCIB(2, "CIB Uploaded");
        }

        if (this.selected_status == "reject") {

          this.createAssesmentReport(5,"Declined");
        }

        if (this.selected_status == "approve") {
          this.updateStatus(this.application.uuid, 3, "Approved");


        }
        if (this.selected_status == "loan_create_check") {
          this.loan_create();


        }
      }
    },
  },

  methods: {
    getApplications() {
      this.loader.style.visibility = "visible";
      axios
        .get("application")
        .then((response) => {
          this.loader.style.visibility = "hidden";

          if (response) {
            this.applications = [];
            var sl = 0;
            var applications = response.data.data;
            for (var application of applications) {
              sl++;

              var uuid = application.uuid;
              var id = application.application_id;
              var customer_name = application.customer_info.name;
              var phone_number = application.customer_info.phone;
              var br_code = application.branch_info.branch_code;
              var created_at = application.created_at;

              var splited = created_at.split("T");

              var date = splited[0];

              var format_date = date.split("-");

              var year = format_date[0];
              var month = format_date[1];
              var day = format_date[2];

              var full_date = day + "-" + month + "-" + year;

              var status;

              if (application.status == 0) {
                status = "<span class='text-blue' >Under Review</span>";
              }

              if (application.status == 1) {
                status = "<span class='text-secondary' >CIB Required</span>";
              }

              if (application.status == 2) {
                status = "<span class='text-primary' >CIB Uploaded</span>";
              }

              if (application.status == 3) {
                status = "<span class='text-success' >Approved</span>";
              }

              if (application.status == 5) {
                status = "<span class='text-danger' >Rejected</span>";
              }

              if (application.status == 6) {
                status = "<span class='text-warning' >Resubmit</span>";
              }

              if (application.status == 7) {
                status = "<span class='text-status-loan-create' >Loan Created</span>";
              }

              if (application.status == 8) {
                status = "<span class='text-status-loan-profee' >Profee Disbursed</span>";
              }

              if (application.status == 9) {
                status = "<span class='text-status-loan-cib' >CIB Disbursed</span>";
              }

              if (application.status == 10) {
                status = "<span class='text-status-loan-tcsa' >All Disbursed</span>";
              }

              if (application.status == 11) {
                status = "<span class='text-status-loan-updated' >Updated</span>";
              }

              var action =
                "<a href='#' onclick='getApplication(" +
                '"' +
                uuid +
                '"' +
                ")' ' data-bs-toggle='modal' data-bs-target='#viewModal'> <i  class='text-black icon icon-eye'></i></a> ";
              this.applications.push([
                sl,
                 br_code,
                full_date,
                id,
                customer_name,
                phone_number,
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
    getApplication(uuid) {
      this.loader.style.visibility = "visible";

      axios
        .get("/application/" + uuid)
        .then((response) => {
          if (response) {
            this.loader.style.visibility = "hidden";

            this.application = response.data.data;

            this.score=this.application.credit_score_info;

             if( this.application.loan_creation_details !=null){
               this.loan_account_no= this.application.loan_creation_details.loanaccno
             }


           

            if( this.application.workflow !=null){
            this.workflow =this.application.workflow

            const startTime = moment(this.workflow[0].time);
            const endTime = moment(this.workflow[this.workflow.length-1].time);
            const duration = moment.duration(endTime.diff(startTime));

// const hours = duration.asHours();
            const minutes = duration.asMinutes(); 
            const seconds = duration.asSeconds();
         
            this.processing_time= Math.round(minutes)  + " Minutes" + " " + Math.round(seconds) + " Seconds";
           
        }else{

            this.workflow =[]
        }
            this.application_uuid = uuid;
            this.process_data = [
              {
                personal_information: this.formatedString(
                  this.application.customer_info.personal_information
                ),
                financial_information: this.formatedString(
                  this.application.customer_info.personal_information
                ),
                account_information: this.formatedString(
                  this.application.customer_info.account_information
                ),
                nid_information: this.formatedString(
                  this.application.customer_info.nid_information
                ),
                nominee_information: this.formatedString(
                  this.application.customer_info.nominee_information
                ),
                reference_information: this.formatedString(
                  this.application.customer_info.reference_information
                ),
                address_information: this.formatedString(
                  this.application.customer_info.address_information
                ),
                employment_information: this.formatedString(
                  this.application.customer_info.employment_information
                ),
                emi_information: this.formatedString(
                  this.application.customer_info.emi_information
                ),
                cib_information: this.formatedString(
                  this.application.customer_info.cib_information
                ),
                loan_information: this.formatedString(
                  this.application.customer_info.loan_information
                ),
              },
            ];

            this.cib_data = [
              {
                CUST_AC_NO:
                  this.application.customer_info.account_information.AccountNo,
                NID:this.application.customer_info.nid_information.nidInput.nid_number,
                AC_DESC:
                  this.application.customer_info.personal_information.name,
                GENDER:
                  this.application.customer_info.personal_information.gender,
                DATE_OF_BIRTH:
                  this.application.customer_info.personal_information.dob,
                MOBILE_NUMBER:
                  this.application.customer_info.personal_information.phone,
                PLACE_OF_BIRTH:
                  this.application.customer_info.address_information
                    .permanent_address,
                FATHER_NAME:
                  this.application.customer_info.personal_information
                    .father_name,
                MOTHER_NAME:
                  this.application.customer_info.personal_information
                    .mother_name,
                P_ADDRESS:
                  this.application.customer_info.address_information
                    .permanent_address,
                SECTOR_CODE: 911000,
              },
            ];

            //   console.log(
            //     this.formatedString(
            //       this.application.customer_info.personal_information
            //     )
            //   );

            if (this.application.customer_info.cib_information) {
              this.check_cib = true;
            } else {
              this.check_cib = false ;
            }

            if (this.application.status == null) {
              this.popup_status =
                "<span class='text-warning' >Under Review</span>";
            }

            if (this.application.status == 1) {
              this.popup_status =
                "<span class='text-secondary' >Approved</span>";
            }

            if (this.application.status == 2) {
              this.popup_status = "<span class='text-danger' >Rejected</span>";
            }

            if (this.application.status == 3) {
              this.popup_status = "<span class='text-primary' >Created</span>";
            }

            if (this.application.status == 4) {
              this.popup_status =
                "<span class='text-success' >Disbursed</span>";
            }
            
            if (this.application.status == 6) {
              this.popup_status =
                "<span class='text-success' >Resubmit</span>";
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    check_balance() {

      this.loader.style.visibility = "visible";

      var account_no =
        this.application.customer_info.account_information.AccountNo;

      axios
        .post("bank_api/account_balance", {
          account_number: account_no,
        })
        .then((response) => {
          if (response) {
            this.balance = response.data.data.balance;
            this.loader.style.visibility = "hidden";

          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    send_back() {

      this.loader.style.visibility = "visible";

      this.updateStatus(this.application.uuid, 6);
    },

    loan_create() {

      this.loader.style.visibility = "visible";

      var loan_sim_details = this.application.customer_info.loan_sim_details;
      var account_information =
        this.application.customer_info.account_information;
      var emi_payable_info = this.application.emi_payable_info;
      var days = emi_payable_info.emi_duration * 30;
      var date = moment().add(days, 'days').calendar()
      var formated_date = moment(date).format('YYYY-MM-DD')
      var data = {
        custid: loan_sim_details.custid,
        valdt: moment().format("YYYY-MM-DD"),
        matdt: formated_date,
        amtfinanced: loan_sim_details.loanamount,
        crprodac: account_information.AccountNo,
        tenor: emi_payable_info.emi_duration,
        loanbrncode: loan_sim_details.branch,
        externalinput: "1234",
        userreferenceno: this.application.user_ref_no,
        application_uuid: this.application.uuid,
        customer_uuid: this.application.customer_uuid,
      };

      axios
        .post("bank_api/loan_create", data)
        .then((response) => {
          if (response) {

            this.$emit("get_message", "Loan Created Successfully");

            this.updateStatus(this.application.uuid, 7, "Loan Created");

            var loan_account_no = response.data.data.loanaccno;

            if(loan_account_no){

              this.loan_disburse_profee(loan_account_no);



            }

          }
        })
        .catch((error) => {
          
          console.log(error);

          this.$emit("get_message", "Loan Creation Failed");

          this.loader.style.visibility = "hidden";




        });
    },

    cib_upload() {
      if (this.file != null) {

        this.selected_status = "cib_upload";
        this.$emit("delete_message", "Do you want to upload?");
      } else {
        this.$emit("get_message", "Choose CIB Report");
      }
    },
   test() {

    this.selected_status = "test";

            this.$emit("delete_message", "Do you want to test?");

     
   },


    loan_create_check() {
        this.selected_status = "loan_create_check";
        this.$emit("delete_message", "Do you want to Disburse?");
      
    },

    cib_require() {


      this.selected_status = "cib_require";
      this.$emit("delete_message", "Do you want to transfer to CIB team?");
    },

    application_approve() {
      this.selected_status = "approve";
      this.$emit("delete_message", "Do you want to approve?")
    },

    application_reject() {

      $('.nav-link').removeClass('active');
      $('.tab-pane').removeClass('active');
      $('.remarks').addClass('active');
      this.is_remarks = true;

      var validator = new Validator();
      var error = validator.validated([
        { field: "note", value: this.note, type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        this.selected_status = "reject";

        this.$emit("delete_message", "Do you want to Decline?");
      }
    },



    downloadxl(uuid) {
      console.log(uuid);
    },

    formatedString(data) {
      var string = "";
      for (const key in data) {
        string += `${key}: ${data[key]},`;
        string += "\n";
      }

      return string;
    },

    // Helper function to flatten nested JSON
    flattenJSON(data, prefix = "") {
      const result = {};
      for (const key in data) {
        const value = data[key];
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === "object" && !Array.isArray(value)) {
          Object.assign(result, this.flattenJSON(value, newKey));
        } else {
          result[newKey] = value;
        }
      }
      return result;
    },

  

    fileSelect(event) {
      this.file = event.target.files[0];
      this.file_name = this.file.name;
    },

    updateCIB(status,activity) {
      var form_data = new FormData();

      var cib_info = {
        customer_account_number:
          this.application.customer_info.account_information.accountnumber,
        mobile_number:
          this.application.customer_info.personal_information.phone,
        gender: this.application.customer_info.personal_information.gender,
        nid: this.application.customer_info.nid_information,
        place_of_birth:
          this.application.customer_info.address_information.permanent_address,
        permanent_address:
          this.application.customer_info.address_information.permanent_address,
        date_of_birth: this.application.customer_info.personal_information.dob,
        customer_name:
          this.application.customer_info.account_information.customername,
        father_name:
          this.application.customer_info.personal_information.father_name,
        mother_name:
          this.application.customer_info.personal_information.mother_name,
        sector_code: "",
        file_name: this.file_name,
      };

      var loan_info = {

        total_amount:this.application.emi_payable_info.initial_amount,
        recommanded_amount : this.application.emi_payable_info.total_amount,

           

      }
      form_data.append("customer_uuid", this.application.customer_uuid);
      form_data.append("loan_information",JSON.stringify(loan_info));
      form_data.append("uuid", this.application.uuid);
      form_data.append("cib_information", JSON.stringify(cib_info));
      form_data.append("note", this.note + "\n\n" + this.remarks);
      form_data.append("status", status);
      form_data.append("workflow", JSON.stringify(this.workflow));
      if (this.file != null) {
        form_data.append("file", this.file);
      }

      axios
        .post("application/cib", form_data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res) {

            $("#viewModal .close").click();

            this.updateStatus(this.application.uuid, status,activity);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },


    

    updateStatus(uuid, status,activity = null) {

      this.loader.style.visibility = "visible";

      if(this.application){

        if( this.application.workflow !=null){
            this.workflow =this.application.workflow
           
        }


        var data = {
            user_id : this.user.id,
            user_name : this.user.name,
            employee_id : this.user.employee_id,
            role : this.user.role.name,
            time : new Date(),
            activity : activity,
            status : status,

          }

          this.workflow.push(data);



      }

      axios
        .put("update_status/application", {
          uuid: uuid,
          status: status,
          workflow : JSON.stringify(this.workflow),
        })
        .then((response) => {
          if (response) {
            $("#viewModal .close").click();

            this.getApplications();
            this.loader.style.visibility = "hidden";

          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    hideImage(){
      document.getElementById("document_view").style.visibility = "hidden";

    },

    getScore(uuid){

      axios
        .get("dbl/score/" + uuid)
        .then((response) => {
          if (response) {

            this.score = response.data.data;
          }
        }).catch((error) => {
          console.log(error);
        })


    },


    loan_disburse_profee(loan_account_no){ 

      this.loader.style.visibility = "visible";


       var data= {
            
       charge : this.application.customer_info.loan_sim_details.processing_Fee_Value,
       vat : this.application.customer_info.loan_sim_details.processing_Fee_VAT,
       debitAccountNo : this.application.customer_info.account_information.AccountNo,
       loanAccountNo : loan_account_no,
       userreferenceno :  this.application.user_ref_no,
       application_uuid :  this.application.uuid,

      }

      axios
        .post("bank_api/loan_disburse_profee", data)
        .then((response) => {
          if (response) {


          this.loader.style.visibility = "hidden";

          this.updateStatus(this.application.uuid, 8,"Processing fee Disbursed");

          this.$emit("get_message", "Processing fee  Disbursed Successfully");
          this.loan_disburse_cib(loan_account_no);

          }
        })
        .catch((error) => {
          console.log(error);

          this.loader.style.visibility = "hidden";

          this.$emit("get_message", "Processing fee  Disbursed Failed");




        });
          


    },

    loan_disburse_cib(loan_account_no){ 

var data= {
     
charge : this.application.customer_info.loan_sim_details.ciB_Charge_Value,
vat : this.application.customer_info.loan_sim_details.ciB_Charge_VAT,
debitAccountNo : this.application.customer_info.account_information.AccountNo,
loanAccountNo : loan_account_no,
userreferenceno :  this.application.user_ref_no,
application_uuid :  this.application.uuid,

}

axios
 .post("bank_api/loan_disburse_cib", data)
 .then((response) => {
   if (response) {

    this.loader.style.visibility = "hidden";

    this.updateStatus(this.application.uuid, 9,"CIB charge Disbursed");

   
     this.$emit("get_message", "CIB charge  Disbursed Successfully");

     this.loan_disburse_tcsa(loan_account_no);

   }
 })
 .catch((error) => {
   console.log(error);

   this.loader.style.visibility = "hidden";



    this.$emit("get_message", "CIB charge  Disbursed Failed");
 });
   


},


loan_disburse_tcsa(loan_account_no){ 

var data= {
     
charge : this.application.customer_info.loan_sim_details.ciB_Charge_Value,
vat : this.application.customer_info.loan_sim_details.ciB_Charge_VAT,
deviceAmount : this.application.product_selection_info.specification.basePrice,
debitAccountNo : this.application.customer_info.account_information.AccountNo,
loanAccountNo : loan_account_no,
userreferenceno :  this.application.user_ref_no,
application_uuid :  this.application.uuid,

}

axios
 .post("bank_api/loan_disburse_tcsa", data)
 .then((response) => {
   if (response) {

    this.loader.style.visibility = "hidden";

    $("#viewModal .close").click();



     this.$emit("get_message", "TCSA  Disbursed Successfully");

     this.updateStatus(this.application.uuid, 10,"TCSA Disbursed");


   }
 })
 .catch((error) => {
   console.log(error);

   this.loader.style.visibility = "hidden";

   this.$emit("get_message", "TCSA Disbursed Failed");
 });
   


},

/**
 * retry to disburse the loan
 * if loan_account_no is not found, display error message
 * else call loan_disburse_profee with loan_account_no
 */

retry_disburse(){ 

  if(  this.loan_account_no != null){ 
    this.loan_disburse_profee(this.loan_account_no);
  }else{

    this.$emit("get_message", "loan account no not found");

  }


 
  

},





showImage(image_url) {


  document.getElementById("document_view").style.visibility = "visible";
  this.show_image_url = image_url


},

    download_assessment() {
      var pdf2 = new jsPDF("p", "pt", "a4");


      pdf2.html(document.getElementById("assesment_report")).then(() => {
        pdf2.save("assessment_" + this.application.application_id + ".pdf");
      });
    },
  },
  mounted: function () {


    window.getApplication = this.getApplication;
    this.getApplications();
    var user = JSON.parse(localStorage.getItem("user")).user;
    this.user = user;
    this.permissions = JSON.parse(user.role.permissions);

    if(user.role.name == "CIB"){
      this.is_cib = true
    }
    this.role = user.role.name;


  },
};
</script>
    
    <style>
@import "datatables.net-bs5";
</style>
    