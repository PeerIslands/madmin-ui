<template>
  <form @submit="submit">
    <div class="container-fluid">
    <b-modal ref="my-modal" hide-footer centered hide-header hide-header-close>
      <div class="text-center">
        <p>The request with ID {{ uuidUniqueId}} is created.</p>
      </div>
      <div class="submit-btn">
      <b-button  class="btn btn-primary" block @click="hideModal">Ok</b-button>
      </div>
    </b-modal>
    <div class="page-header"> Create New Request</div>
      <div class="row g-3">
        <div class="col-md-12">
          <label for="requester" align="left" class="form-label"
            >Requester</label
          >
          <input
            class="form-control"
            type="email"
            placeholder="Requester Name"
            id="requester"
            v-model="requester"
          />
        </div>
        <div class="col-md-4">
          <label for="requestType" class="form-label">Request Type</label>
          <select
            id="requestType"
            class="form-select"
            v-model="requestType"
            @change="displayInputFields"
          >
            <option selected value="USER-ACCESS">USER-ACCESS</option>
            <option value="NETWORK-ACCESS">NETWORK-ACCESS</option>
            <!-- <option value="NEW-INFRA">NEW-INFRA</option> -->
          </select>
        </div>

        <div
          class="form-row"
          v-for="(inputField, index) in inputFields"
          :key="index"
        >
          <div class="col-md-4">
            <label>{{ inputField.label }}</label>
            <input
              v-model="inputField.id"
              id="{inputFields[${index}][id]}"
              :name="`inputFields[${index}][label]`"
              type="text"
              class="form-control"
            />
          </div>
        </div>

        <div class="col-12 submit-btn">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";
import { uuid } from "vue-uuid"; // Import uuid

const ADD_REQUEST = gql`
  mutation addRequest(
    $id: ID
    $groupId : String
    $requester: String
    $requestType: String
    $status: String
    $requestedDate: String
    $requestDetails: String
  ) {
    createUserRequestArgs(
      id: $id
      groupId : $groupId
      requester: $requester
      requestType: $requestType
      status: $status
      requestedDate: $requestedDate
      requestDetails: $requestDetails
    ) {
      returnVal
    }
  }
`;

export default {
  name: "AddRequest",
  apollo: {},
  data() {
    return {
      inputFields: [],
      id: "",
      requester: "",
      requestType: "",
      role: "",
      status: "",
      requestedDate: "",
      requestDetails: "",
      uuidUniqueId:""
    };
  },
  methods: {
    displayInputFields() {
      if (this.requestType === "USER-ACCESS") {
        this.inputFields = [];
        this.inputFields.push(
          {
            label: "Database Name",
            id: "databaseName",
            placeholder:'Please enter Database Name'
          },
          {
            label: "Role",
            id: "role",
            placeholder:'Please enter Group Id'
          },
          {
            label: "User Name",
            id: "userName",
            placeholder:'Please enter User Name'
          },
          {
            label: "Password",
            id: "password",
            placeholder:'**********'
          },
          {
            label: "Group ID",
            id: "groupId",
            placeholder:'Please enter Group Id'
          }
        );
      } else if (this.requestType === "NETWORK-ACCESS") {
        this.inputFields = [];
        this.inputFields.push(
          {
            label: "CIDR/IP",
            id: "cidr",
            placeholder:'0.0.0.0/32'
          },
          {
            label: "Comment",
            id: "comment",
            placeholder:'Please enter comments'
          },
          {
            label: "Group ID",
            id: "groupId",
            placeholder:'Please enter Group Id'
          }
        );
      } else if (this.requestType === "NEW-INFRA") {
        this.inputFields = [];
        this.inputFields.push(
          {
            label: "Database Name",
            id: "databaseName",
          },
          {
            label: "Cloud Provider",
            id: "cloudProvider",
          },
          {
            label: "Region",
            id: "region",
          },
          {
            label: "Number of Shards",
            id: "shards",
          },
          {
            label: "Instance size",
            id: "instanceSize",
          }
        );
      }
    },
     showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      const dateTime = date + " " + time;

      return dateTime;
    },
    submit(e) {
      let requestJSON = new Object();
      let uniqueId = uuid.v1()
      e.preventDefault();
      const { requester, requestType } = this.$data;
      if (this.requestType === "USER-ACCESS") {
        let roleDbObj = new Object();
        roleDbObj.databaseName = this.inputFields[0].id;
        roleDbObj.role = this.inputFields[1].id;
        let arrayObj = [];
        arrayObj.push(roleDbObj);
        requestJSON.roles = arrayObj;
        requestJSON.userName = this.inputFields[2].id;
        requestJSON.password = this.inputFields[3].id;
        requestJSON.groupId = this.inputFields[4].id;
      } else if (this.requestType === "NETWORK-ACCESS") {
        requestJSON.ipcidr = this.inputFields[0].id;
        requestJSON.comment = this.inputFields[1].id;
        requestJSON.groupId = this.inputFields[2].id;
      } else if (this.requestType === "NEW-INFRA") {
        requestJSON.databaseName = this.inputFields[0].id;
        requestJSON.cloudProvider = this.inputFields[1].id;
        requestJSON.region = this.inputFields[2].id;
        requestJSON.shards = this.inputFields[3].id;
        requestJSON.instanceSize = this.inputFields[4].id;
      }

        this.uuidUniqueId = uniqueId
  
        this.$apollo.mutate({
          mutation: ADD_REQUEST,
          variables: {
            id: uniqueId,
            groupId :requestJSON.groupId,
            requester,
            requestType,
            role: this.role,
            status: "OPEN",
            requestedDate: this.currentDateTime(),
            requestDetails: JSON.stringify(requestJSON),
          }
        }).then((data) => {
            console.log(JSON.stringify(data))
            this.showModal()
            this.requestType = null
            this.requester = ""
            this.inputFields = []
          });
 },
  },
};
</script>

<style>
.page-header{
  font-size: 24px;
  color: #116149;
  margin-bottom:15px;
}

.submit-btn{
  display:flex;
  justify-content:center;
}
.submit-btn .btn{
  font-size:14px;
  background-color: #13aa52 !important;
  color: #fff !important;
  border-color: #13aa52 !important;

}

</style>
