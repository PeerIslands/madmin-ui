import Vue from 'vue'
import App from './App.vue'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import VueApollo from 'vue-apollo';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueBootstrapToasts from "vue-bootstrap-toasts";

import UUID from 'vue-uuid'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(UUID);

Vue.use(VueBootstrapToasts);

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'http://localhost:4000'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
});
