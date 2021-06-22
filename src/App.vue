<template>
  <div id="app">
  <header class="header">
    <div class="header-section">
        <div class="app-brand">
         <img src="./assets/peerislands_logo.png" alt="Peerislands.io"/>
         <span class="splitter"></span>
         <span class="brand-name">mAdmin</span>
        </div>
       
    </div>
 </header>
<section>
<div  class="card-layout">
    <add-request/>
    <request-list/>
    </div>
</section>
   
  </div>
</template>

<script>

import RequestList from "./components/RequestList.vue";
import AddRequest from "./components/AddRequest.vue";

export default {
  name: "app",
  components: {
    RequestList,
    AddRequest
  }
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size:14px;
}
.modal-body{
 font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size:14px;
}
.header{
  display: flex;
  align-items: center;
  min-height:70px;
  margin-bottom: 1rem;
  min-height: 70px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgb(0 0 0 / 1%), 0 10px 30px rgb(0 0 0 / 8%);
  position: sticky;
  width: 100%;
  padding: 0.5rem 1rem;
}

.header-section .app-brand{
  display: flex;
  margin-top: -12px;
}

.header-section .splitter{
    border-right: 3px solid #444;
    height: 32px;
    margin-top: 14px;
    margin-bottom: 0;
    margin-left: 9px;
    margin-right: 9px;
}

.header-section .brand-name{
    color: #13aa52;
    font-size: 24px;
    font-weight: 700;
    margin-top: 13px;
}

.header img{
  height: 50px;
}

.card-layout{
  padding: 15px;
  margin:15px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  padding-bottom: 30px;
}
</style>
