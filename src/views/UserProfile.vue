<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">@{{state.user.username}}</h1>
      <div class="user-profile_admin-badge" v-if="state.user.isAdmin">Admin</div>
      <div class="user-profile_followers-count">
        <strong>Followers:</strong>
        {{state.followers}}
      </div>
      <CreateTweetPanel @add-tweet="addTweet" />
    </div>
    <div class="user-profile_tweets_wrapper">
      <TweetItem
        v-for="tweet in state.user.tweets"
        :key="tweet.id"
        :username="state.user.username"
        :tweet="tweet"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import {useRoute} from 'vue-router'
import {users} from '../assets/users'
import TweetItem from "../components/TweetItem";
import CreateTweetPanel from "../components/CreateTweetPanel";
export default {
  name: "UserProfile",
  components: { TweetItem, CreateTweetPanel },

  setup() {
    const route = useRoute();
    const userId = computed(()=>route.params.userId);



    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0]
    });

    function addTweet(tweet) {
      state.user.tweets.unshift({
        id: state.user.tweets.length + 1,
        content: tweet
      });
    }

    return {
      state,
      addTweet,
      userId
    };
  }
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;

  .user-profile_user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

    .user-profile_admin-badge {
      background: dodgerblue;
      color: white;
      margin-right: auto;
      padding: 2px 8px;
      border-radius: 5px;
      font-weight: bold;
    }
  }
  .user-profile_tweets_wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }
}
</style>