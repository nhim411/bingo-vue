<template>
  <section class="section">
    <div class="columns box is-flex-direction-column">
      <div
        class="chatgroup__box chatgroup__message"
        style="overflow-y: auto, max-height: 400px"
        ref="chatgroup"
      >
        <template v-for="(item, index) in messages">
          <article class="media" :key="index">
            <figure class="media-left">
              <p class="image is-64x64">
                <img :src="`https://i.pravatar.cc/150?u=${item.user}`" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ item.user }}</strong>
                  <br />
                  {{ item.text }}
                </p>
              </div>
            </div>
          </article>
        </template>
      </div>
      <div class="">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea
                  class="textarea"
                  placeholder="Add a comment..."
                  v-model="textSendMessage"
                ></textarea>
              </p>
            </div>
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <a class="button is-info" @click="sendMessage">Submit</a>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <label class="checkbox">
                    <input type="checkbox" /> Press enter to submit
                  </label>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChatGroup",
  data() {
    return {
      messages: [],
      textSendMessage: "",
    };
  },
  sockets: {
    message: function (data) {
      if (data?.user && data?.text) {
        this.messages.push({
          user: data.user,
          text: data.text,
        });
      }
      console.log(`Received message: ${JSON.stringify(data)}`);
    },
  },
  watch: {
    messages() {
      this.$refs.chatgroup.scrollTop = 9999;
    },
  },
  methods: {
    sendMessage() {
      this.$socket.emit("sendMessage", {
        user: "Nam LH",
        message: this.textSendMessage,
        token: localStorage.getItem("jwt"),
      });
    },
  },
};
</script>

<style scroped>
.chatgroup__box {
  overflow-y: auto;
  height: 300px;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
}

.container {
  margin: 0;
}
</style>
