<template>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>   
  
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:8000/api/token/',   
   {
            username: this.username,
            password: this.password,
          });
  
          // Armazenar o token
          localStorage.setItem('token', response.data.access_token);
  
          // Redirecionar para a página inicial (ou outra página)
          this.$router.push('/');
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>