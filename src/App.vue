<template>
  <div id="app">
    <nav>
      <router-link to="/">
      <div class="navigation_logo">Twotter</div>
      </router-link>
      <div class="navigation_user">{{user.username}}</div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';


export default {
  name: "App",

  setup() {
           const store = useStore();
           const user = computed(()=> store.state.user);
    return {
          user
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: dodgerblue;
    color: white;

    .navigation_logo {
  
      font-weight: bold;
   
    }

    .navigation_user {
      font-weight: bold;
    }
  }

  .router-view{
    margin-top: 20%;
  }
}
</style>
