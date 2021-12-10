<template>
  <h1>Login to Your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signIn">Submit</button></p>
</template>

<script setup>
import { ref } from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import { useRouter } from "vue-router"; // import router
const email = ref("");
const password = ref("");
const router = useRouter(); // get a reference to our vue router
const signIn = () => {
  // we also renamed this method
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
    .then(() => {
      console.log("Successfully logged in!");
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
