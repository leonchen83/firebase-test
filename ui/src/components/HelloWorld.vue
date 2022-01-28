<template>
  <div class="hello">
    <h1>Happy counting!</h1>
    <p style="font-size:40px">{{count}} </p>
  </div>
</template>

<script>
import axios from 'axios'
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWRp8LuQwBsvUajKdS3XdBSCNdRLfddsI",
  authDomain: "web-test-9f920.firebaseapp.com",
  projectId: "web-test-9f920",
  storageBucket: "web-test-9f920.appspot.com",
  messagingSenderId: "659923416702",
  appId: "1:659923416702:web:154d2a04bc8c44087d4a2f",
  measurementId: "G-77R50E4DVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default {
  name: 'HelloWorld',
  data: ()=> {
   return{ count:0
   }
  },
  mounted:  async function () {
  
    console.log("Created")    ;
    console.log(process.env)
    await this.loadCount();
  },
  methods:{
    loadCount:  async function () {
      let result= await axios.get(`${process.env.VUE_APP_APIURL}/count`);
      this.count=result.data.changed;
      logEvent(analytics, 'crash_event', {version : '1.1.0', account_id : '178187273', user_agent : 'chrome', company : '1', route : 'express', env : 'test', });
      setTimeout(this.loadCount,3000);
    }
  }
}
</script>
