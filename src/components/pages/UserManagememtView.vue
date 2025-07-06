<template>
  <div class="wrapper">
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper bg-white">
      <!-- Content Header (Page header) -->
       <div class="content-header">
        <div class="container-fluid">
          <h3 class="m-0 pc-bg text-white p-3 pl-3 title-round">User Management</h3>

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
            <div class="col-lg-8">
              <div class="card h-100">
                <div class="card-header ">
                  <h3 class="card-title d-inline float-left text-black mt-2">
                   <strong>User Creation </strong> 
                  </h3>
                  <a
                    class="btn-sc-sm float-right add-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#add_user_modal"
                  >
                    <span  class="cd" style="font-size: 15px; font-weight: bold; "> 

                      <span class="mt-1">Add</span>
                   
                          <i style="height: 20px ; width: 20px; margin-left: 10px;" class="icon icon-plus "></i>


                    </span>
                  </a>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <DataTable
                    :data="users"
                    class="display table table-striped table-bordered mt-2"
                  >
                    <thead style="font-size: 15px">
                      <tr>
                        <th>SL</th>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
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

            <div class="col-lg-4">
              <div class="card h-100">
                <div class="card-header ">
                 <h3 class="card-title d-inline float-left text-black mt-2">
                   <strong>Role</strong> 
                  </h3>
                  <!-- <a
                    class="btn-sc-sm float-right add-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#add_role_modal"
                  >
                    <i class="fas fa-plus"></i>
                    <span style="font-size: 15px; font-weight: bold"> Add</span>
                  </a> -->
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <DataTable
                    :data="roles"
                    class="display table table-striped table-bordered mt-2"
                  >
                    <thead style="font-size: 15px">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>

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

    <!-- Modal start -->
    <div
      class="modal fade"
      id="add_user_modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="add_user_modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add new user</h5>
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
                <div class="col-lg-5">
                  <div class="form-group">
                    <label style="font-size: 18px">Employee ID</label>
                    <input
                      type="text"
                      v-model="employee_id"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="form-group">
                    <label style="font-size: 18px">Name </label>
                    <input type="text" v-model="name" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label style="font-size: 18px">User name </label>
                    <input
                      type="text"
                      v-model="user_name"
                      class="form-control"
                    />
                    <p id="user_name" class="text-danger mt-1"></p>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label style="font-size: 18px">Email</label>
                    <input type="email" v-model="email" class="form-control" />
                    <p id="email" class="text-danger mt-1"></p>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label style="font-size: 18px">Mobile Number</label>
                    <input type="number" v-model="phone" class="form-control" />
                    <p id="email" class="text-danger mt-1"></p>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label style="font-size: 18px">Role</label>

                    <select v-model="role_id" class="form-select">
                      <option disabled value="null">Select a option</option>
                      <option
                        v-for="role in raw_roles"
                        :value="role.id"
                        :key="role"
                      >
                        {{ role.name }}
                      </option>
                    </select>

                    <p id="role_id" class="text-danger mt-1"></p>
                  </div>
                </div>

                <!-- <div class="col-lg-6">
                  <div class="form-group">
                    <label style="font-size: 18px">Password</label>
                    <input
                      type="password"
                      v-model="password"
                      class="form-control"
                    />
                    <p id="password" class="text-danger mt-1"></p>
                  </div>
                </div> -->
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-pc-sm" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              @click.prevent="create_user"
              type="button"
              class="btn-sc-sm"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="edit_user_modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="add_edit_modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit user</h5>
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
                <div class="col-lg-5">
                  <div class="form-group">
                    <label style="font-size: 18px">Employee ID</label>
                    <input
                      type="text"
                      v-model="user.employee_id"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="form-group">
                    <label style="font-size: 18px">Name </label>
                    <input
                      type="text"
                      v-model="user.name"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label style="font-size: 18px">Mobile Number</label>
                    <input
                      type="number"
                      v-model="user.phone"
                      class="form-control"
                    />
                    <p id="email" class="text-danger mt-1"></p>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <label style="font-size: 18px">Role</label>

                    <select v-model="user.role_id" class="form-select">
                      <option disabled value="null">Select a option</option>
                      <option
                        v-for="role in raw_roles"
                        :value="role.id"
                        :key="role"
                      >
                        {{ role.name }}
                      </option>
                    </select>

                    <p id="edit_role_id" class="text-danger mt-1"></p>
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
              @click.prevent="update_user(user.id)"
              type="button"
              class="btn-sc-sm"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="add_role_modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="add_user_modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add new role</h5>
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
                    <label style="font-size: 18px">Name</label>
                    <input type="text" v-model="name" class="form-control" />
                    <p id="name" class="text-danger mt-1"></p>
                  </div>
                </div>

                <div style="font-size: 120%" class="col-lg-12">
                  <label style="font-size: 18px">Permission </label>

                  <div class=" ">
                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.loan_details_view"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Loan Details view
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.loan_list_view"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Loan List view
                      </label>
                    </div>


                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.cib_view"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        CIB view
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.cib_upload"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        CIB upload
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.cib_download"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        CIB Download
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.loan_approve"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Loan Approve/Reject
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.loan_disverse"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Loan Disverse
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.send_back"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Loan Send Back
                      </label>
                    </div>
                  </div>

                  <div class="mt-3">
                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.user_management"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        User management
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.csm"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        CSM
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-pc-sm" data-bs-dismiss="modal">
              Canccel
            </button>
            <button
              @click.prevent="create_role"
              type="button"
              class="btn-sc-sm"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="edit_role_modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="add_user_modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit role</h5>
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
                  <!-- <div class="form-group">
                    <label style="font-size: 18px">Name</label>
                    <input
                      type="text"
                      v-model="role.name"
                      class="form-control"
                    />
                    <p id="name_edit" class="text-danger mt-1"></p>
                  </div> -->
                </div>

                <div style="font-size: 120%" class="col-lg-12">
                  <label style="font-size: 18px">Permission </label>

                  <div class=" ">
                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.loan_details_view"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Loan Details view
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.loan_list_view"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" >
                        Loan List view
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.cib_view"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        CIB view
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.cib_upload"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        CIB upload
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.cib_download"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        CIB Download
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.loan_approve"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Loan Approve/Reject
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.loan_disverse"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Loan Disverse
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.send_back"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Loan Send Back
                      </label>
                    </div>
                  </div>

                  <div class="mt-3">
                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.user_management"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        User management
                      </label>
                    </div>

                    <div class="form-check ms-2 d-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="permission.csm"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        CSM
                      </label>
                    </div>
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
              @click.prevent="update_role"
              type="button"
              class="btn-sc-sm"
            >
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
import { Validator } from "@/other/Validator";
DataTable.use(DataTablesCore);
export default {
  components: { DataTable },

  data() {
    return {
      errors: {},
      raw_roles: [],
      raw_users: [],
      role: {},
      permission: {
        loan_details_view: false,
        loan_list_view: false,
        cib_view: false,
        cib_upload: false,
        cib_download: false,
        loan_approve: false,
        loan_disverse: false,
        send_back: false,
        user_management: false,
        csm: false,
      },
      role_id: null,
      users: [],
      user: {},

      edit_icon :   '<font-awesome-icon icon="pen" />'

    };
  },
  methods: {
    create_role() {
      var permissions = this.permission;
      var validator = new Validator();
      var error = validator.validated([
        { field: "name", value: this.name, type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        axios
          .post("/dbl/role", {
            name: this.name,
            permissions: JSON.stringify(permissions),
          })
          .then((response) => {
            if (response) {
              this.getroles();

              $("#add_role_modal .close").click();
            }
          });
      }
    },

    getUsers() {
      axios
        .get("user/list")
        .then((response) => {
          if (response) {
            this.users = [];
            var users = response.data.data;
            var sl =0;
            this.raw_users = users;
            for (var user of users) {
              sl++;
              var id = user.id;
              var name = user.name;
              var email = user.email;
              var employee_id = user.employee_id;
              // var phone = user.phone;
              var role_name = "";
              var user_name = user.user_name;


              if (user.role != null) {
                role_name = user.role.name;
              }
            

              var action =
                "<a href='#' onclick='show_user(" +
                '"' +
                id +
                '"' +
                ")' ' data-bs-toggle='modal' data-bs-target='#edit_user_modal'><i  class='icon text-black icon-edit'></i></a>   ";

               

              if( user_name == "super_admin" || user_name == "api_admin"){

                action =""


              }



              this.users.push([sl,employee_id, name, user_name, email, role_name, action]);



            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    create_user() {
      var validator = new Validator();
      var error = validator.validated([
        { field: "user_name", value: this.user_name, type: "required" },
        { field: "email", value: this.email, type: "required|email" },
        { field: "role_id", value: this.role_id, type: "required" },
        { field: "password", value: "erd1234", type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        axios
          .post("user/create", {
            employee_id: this.employee_id,
            name: this.name,
            user_name: this.user_name,
            email: this.email,
            phone: this.phone,
            role_id: this.role_id,
            password: "erd1234",
          })
          .then((response) => {
            if (response) {
              this.getUsers();

              this.employee_id = "";
              this.name = "";
              this.user_name = "";
              this.email = "";
              this.phone = "";
              this.role_id = "";

              $("#add_user_modal .close").click();
            }
          })
          .catch((error) => {
            if (error.response && error.response.data.errors) {
              if (error.response.data.errors.email) {
                $("#email")
                  .css("display", "block")
                  .html(error.response.data.errors.email[0]);
              }
              if (error.response.data.errors.password) {
                $("#password")
                  .css("display", "block")
                  .html(error.response.data.errors.password[0]);
              }
              if (error.response.data.errors.user_name) {
                $("#user_name")
                  .css("display", "block")
                  .html(error.response.data.errors.user_name[0]);
              }
            }
          });
      }
    },

    update_user(id) {
      var validator = new Validator();
      var error = validator.validated([
        { field: "edit_role_id", value: this.user.role_id, type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        axios
          .put("user/update/" + id, {
            employee_id: this.user.employee_id,
            name: this.user.name,
            phone: this.user.phone,
            role_id: this.user.role_id,
          })
          .then((response) => {
            if (response) {
              this.getUsers();

              $("#edit_user_modal .close").click();
            }
          })
          .catch((error) => {
            if (error.response && error.response.data.errors) {
              if (error.response.data.errors.email) {
                $("#email")
                  .css("display", "block")
                  .html(error.response.data.errors.email[0]);
              }
              if (error.response.data.errors.password) {
                $("#password")
                  .css("display", "block")
                  .html(error.response.data.errors.password[0]);
              }
              if (error.response.data.errors.user_name) {
                $("#user_name")
                  .css("display", "block")
                  .html(error.response.data.errors.user_name[0]);
              }
            }
          });
      }
    },

    show_user(id) {
      axios
        .get("user/show/" + id)
        .then((response) => {
          if (response) {
            this.user = response.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

  

    update_role() {
      var permissions = this.permission;

      var validator = new Validator();
      var error = validator.validated([
        { field: "name_edit", value: this.role.name, type: "required" },
      ]);

      if (error) {
        console.log(error);
      } else {
        axios
          .put("role/" + this.role.id, {
            name: this.role.name,
            permissions: JSON.stringify(permissions),
          })
          .then((response) => {
            if (response) {
              this.getroles();

              $("#edit_role_modal .close").click();
            }
          });
      }
    },

    getroles() {
      axios
        .get("role")
        .then((response) => {
          if (response) {
            this.roles = [];
            var roles = response.data.data;
            this.raw_roles = roles;
            for (var role of roles) {
              var id = role.id;
              var name = role.name;
              var action =
                "<a href='#' onclick='show_role(" +
                '"' +
                id +
                '"' +
                ")' ' data-bs-toggle='modal' data-bs-target='#edit_role_modal'> <i  class='icon text-black icon-edit'></i></a>"

                if( name == "Super-admin" || name == "Api Admin"){
                  action = ""
                }
              this.roles.push([id, name, action]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    show_role(id) {
      axios
        .get("role/" + id)
        .then((response) => {
          if (response) {
            this.role = response.data.data;
            this.permission = JSON.parse(response.data.data.permissions);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    delete_role(id) {
      axios
        .delete("role/" + id)
        .then((response) => {
          if (response) {
            this.getroles();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    delete_user(id) {
      axios
        .delete("user/delete/" + id)
        .then((response) => {
          if (response) {
            this.getUsers();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted: function () {
    this.getroles();
    window.show_role = this.show_role;
    window.show_user = this.show_user;
    this.getUsers();
    window.delete_role = this.delete_role;
    window.delete_user = this.delete_user;
  },
};
</script>
  
  <style>
@import "datatables.net-bs5";
</style>
  