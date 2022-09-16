<template>
  <section class="section">
    <div
      class="columns is-mobile is-centered is-justify-content-center is-align-items-center box"
      style="overflow-x: scroll"
    >
      <template v-for="item in 20">
        <div class="column" :key="item">
          <div class="square"><TheTicketItem /></div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import TheTicketItem from "./TheTicketItem.vue";
export default {
  name: "TheTickets",
  components: { TheTicketItem },
};
</script>

<style scoped>
.square {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
