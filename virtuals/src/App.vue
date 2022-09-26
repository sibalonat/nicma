<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
// import axios from "axios";
import useAuth from "./auth/useAuth";
// axios.post()

const { login, getAuthenticated: authenticated, getUser: user, errors } = useAuth()

// reactive
const form = reactive({
    email: '',
    password: '',
})


onMounted(() => {
  login
})

</script>

<template>

  <div>
    <div v-if="authenticated">
        hey {{ user.name }}
    </div>
    <form @submit.prevent="login(form)">
      <!-- label 1 -->
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="form.email">
        <div v-if="errors.email">
            {{ errors.email[0] }}
        </div>
      </div>
      <!-- label 2 -->
      <div>
        <label for="password">Password</label>
        <input type="text" name="password" id="password" v-model="form.password">
        <div v-if="errors.password">
            {{ errors.password[0] }}
        </div>
      </div>
      <!-- btn -->
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>

</template>


