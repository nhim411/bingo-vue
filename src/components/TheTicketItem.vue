<template>
  <div class="ticket__group">
    <div
      class="columns is-mobile is-multiline is-gapless is-centered has-text-centered is-justify-content-centerd"
    >
      <template v-for="(item, index) in getRandomListNumber">
        <div
          v-if="index === 12"
          class="column is-one-fifth ticket__item"
          :key="index"
        >
          <div class="">
            <!-- <img src="@/assets/logomenu.png" class="ticket__img" alt="logo" /> -->
            <figure class="image is-16x16">
              <img class="is-rounded" src="@/assets/logomenu.png" />
            </figure>
          </div>
        </div>
        <div class="column is-one-fifth" :key="index">
          <div
            :class="[
              'ticket__item',
              getRandomListActive.includes(item) ? 'ticket__item--active' : '',
            ]"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTicketItem",
  computed: {
    getRandomListNumber() {
      let arr = [];
      while (arr.length < 24) {
        let r = Math.floor(Math.random() * 99) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      return arr;
    },
    getRandomListActive() {
      let arr = [];
      while (arr.length < 10) {
        let r = Math.floor(Math.random() * 99) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      return arr;
    },
  },
};
</script>

<style scoped>
.ticket__group {
  --width: 130px;
  width: var(--width);
  height: var(--width);
}

.ticket__item {
  border: 1px solid #333;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ticket__img {
  width: 100%;
  height: auto;
}

.ticket__item--active {
  font-weight: bold;
  background-color: lightskyblue;
}
</style>
