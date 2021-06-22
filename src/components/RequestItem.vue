<template>
  <div :key="userRequest.id">
    <h3>{{ userRequest.requester }}</h3>
    <p>{{ userRequest.requestType }}</p>
    <p>{{ userRequest.requestedDate }}</p>
    <p>{{ userRequest.status }}</p>
  </div>
</template>

<script>
export default {
  name: "RequestItem",
  props: ["userRequest"]
};
</script>