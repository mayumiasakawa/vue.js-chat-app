import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCtPlol0mcZsljhHM9EOO67M-3BKvEmy8s",
    authDomain: "chat-app-b699f.firebaseapp.com",
    databaseURL: "https://chat-app-b699f-default-rtdb.firebaseio.com",
    projectId: "chat-app-b699f",
    storageBucket: "chat-app-b699f.appspot.com",
    messagingSenderId: "1024775436806",
    appId: "1:1024775436806:web:9e3742c1f04fafeecb6187"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


new Vue({
  render: h => h(App),
}).$mount('#app')
