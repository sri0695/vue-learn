<template>
  <form class="create-tweet-panel" @submit.prevent="createNewTweet">
    <label for="newTweet">
      <strong>New Tweet</strong>
    </label>
    <textarea id="newTweet" rows="4" v-model="state.newTweetContent" />
    <div class="create-tweet-panel_submit">
      <div class="create-tweet-type">
        <label for="tweetType">
          <strong>Type:</strong>
        </label>
        <select id="tweetType" v-model="state.selectedTweetType">
          <option
            :value="option.value"
            v-for="(option,index) in state.tweetTypes"
            :key="index"
          >{{option.name}}</option>
        </select>
      </div>
      <button>Tweet !</button>
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "CreateTweetPanel",
  setup(props,context) {
    const state = reactive({
      newTweetContent: "",
      selectedTweetType: "instant",
      tweetTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant Tweet" }
      ]
    });
    function createNewTweet() {
      if (state.newTweetContent && state.selectedTweetType !== "draft") {
        context.emit("add-tweet", state.newTweetContent);
        state.newTweetContent = "";
      }
    }

    return {
      state,
      createNewTweet
    };
  }
};
</script>

<style lang="scss" scoped>
.create-tweet-panel {
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  textarea {
    border: 1px solid #dfe3e8;
    border-radius: 5px;
  }
  .create-tweet-panel_submit {
    display: flex;
    justify-content: space-between;
    .create-tweet-type {
      padding: 10px 0;
    }
    button {
      padding: 5px 20px;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      background-color: dodgerblue;
      color: white;
      font-weight: bold;
    }
  }
}
</style>