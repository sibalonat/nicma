<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
// import axios from "axios";
import useAuth from "./auth/useAuth";
// axios.post()

const { login, getAuthenticated: authenticated, getUser: user } = useAuth()

// reactive
const form = reactive({
    email: '',
    password: '',
})

// const login = async () => {
//   console.log('submit');
//   await axios.get('/sanctum/csrf-cookie')
//   await axios.post('/login', form)
// }

onMounted(() => {
  login
})

</script>

<template>

  <div>
    <div v-if="authenticated">
        hey {{ user.name }}
    </div>
    <!-- {{ authenticated }} {{ user }} -->
    <form @submit.prevent="login(form)">
      <!-- label 1 -->
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="form.email">
      </div>
      <!-- label 2 -->
      <div>
        <label for="password">Password</label>
        <input type="text" name="password" id="password" v-model="form.password">
      </div>
      <!-- btn -->
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>

</template>


