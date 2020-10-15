<template>
  <div class="home">
    <h1>Login</h1>
    <div class="user-list">
      <div class = "user-list-name">
      <input type="text" v-model="state.username" placeholder="Username" />
      </div>
      <div class="user-list-pass">
      <input type="password" v-model="state.password" placeholder="Password" />
      </div>
      <div class="user-list-btn">
      <button @click="loginFunc">Login</button>
      </div>
      <div><h2 v-if="state.invalidUser"> Invalid user </h2></div>
      <router-link v-for="user in users" :key="user.id" :to="{ name: 'UserProfile', params: { userId: user.id } }">
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from "../assets/users";
import { reactive } from "vue";
import  router from '../router'
export default {
  name: "Home",
  setup() {
    const state = reactive({
      username: "",
      password: "",
      invalidUser: false
    });
   function loginFunc(){
    

   let validUser=users.filter(function(user){
      return (user.username === state.username)?user:undefined;
     })
   
     if(validUser.length>0){
      console.log(validUser[0].id);
            router.push({
            name:'UserProfile',
            params:{userId:validUser[0].id}
          })
     } else{
      //  console.log('false');
       state.invalidUser =true;
     }

    }
    return {
      state,
      users,
      loginFunc
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;
  .user-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    .user-list-name{
      padding: 15px;
    }
    .user-list-pass{
      padding-bottom: 15px;
    }
    .user-list-btn{
      padding-bottom: 15px;
    }
  }
}
</style>
