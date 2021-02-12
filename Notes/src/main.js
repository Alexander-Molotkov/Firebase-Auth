import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase'

import 'firebase/auth'

firebase.initializeApp(firebaseConfig);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBl5Qxc4nNIj40WHIXRxzwhxZ_GmfGlNSM",
    authDomain: "cs493-2021-447a0.firebaseapp.com",
    projectId: "cs493-2021-447a0",
    storageBucket: "cs493-2021-447a0.appspot.com",
    messagingSenderId: "333857233380",
    appId: "1:333857233380:web:72305514b3b7d6a064cff1",
    measurementId: "G-091CT3LKDR"
};

Vue.config.productionTip = true;

console.log(firebase);

new Vue({
    render: h => h(App)
}).$mount('#app');
