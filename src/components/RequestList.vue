<template>
  <div></div>
<!--  <div>-->
<!--    <div class="card" style="width: 18rem;">-->
<!--      <b-card-->
<!--          title="Card Title"-->
<!--          img-src="https://picsum.photos/600/300/?image=25"-->
<!--          img-alt="Image"-->
<!--          img-top-->
<!--          tag="article"-->
<!--          style="max-width: 20rem;"-->
<!--          class="mb-2"-->
<!--      >-->
<!--        <b-card-text>-->
<!--          <request-item v-for="userRequest in listUserRequests" :key="userRequest.id" :userRequest="userRequest">-->
<!--            {{userRequest.id}}-->
<!--            {{userRequest.requester}}-->
<!--            {{userRequest.requestType}}-->
<!--            {{userRequest.requestedDate}}-->
<!--            {{userRequest.status}}-->
<!--          </request-item>-->
<!--        </b-card-text>-->
<!--      </b-card>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
// import RequestItem from "@/components/RequestItem";
// import gql from "graphql-tag";
//
// const GET_REQUESTS = gql`
//   query getRequests {
//     listUserRequests {
//       id
//       requester
//       project
//       cluster
//       database
//       requestType
//       requestedDate
//       status
//       role
//     }
//   }
// `;
//
// export default {
//   name: "RequestList",
//   components: {RequestItem},
//   comments: { RequestItem },
//   data() {
//     return {
//
//       listUserRequests: []
//
//     };
//   },
//   apollo: {
//     listUserRequests: {
//       query: GET_REQUESTS
//     }
//   }
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>