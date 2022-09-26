<template>
  <section class="section">
    <div
      class="columns box is-centered is-align-items-center is-flex-direction-column"
    >
      <div class="buttons">
        <b-button
          label="Buy Ticket"
          type="is-info"
          @click="isCardModalActive = true"
        />
      </div>
      <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Mua ticket</p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <b-icon icon="ticket"> </b-icon>
              </span>
            </button>
          </header>

          <div class="card-content">
            <b-field label="Số lượng vé" :label-position="labelPosition">
              <b-numberinput
                placeholder="99"
                :min="0"
                :max="10"
                v-model="total"
              ></b-numberinput>
            </b-field>
            <b-field label="Số coin đặt" :label-position="labelPosition">
              <b-numberinput
                placeholder="99"
                :min="0"
                :max="100"
                v-model="coin"
              ></b-numberinput>
            </b-field>
            <div class="content">Tổng: {{ getTotalCoin }}</div>
            <div class="buttons is-justify-content-flex-end">
              <b-button type="is-info" icon-right="bitcoin"> Buy </b-button>
            </div>
          </div>
        </div>
      </b-modal>
      <div class="cloumn"><span class="is-size-4">Kết quả quay số:</span></div>
      <div class="column" style="align-self: start">
        <nav
          class="pagination is-rounded"
          role="navigation"
          aria-label="pagination"
        >
          <transition-group
            name="group-list"
            tag="ul"
            class="pagination-list"
            enter-active-class="animated fadeInRight"
            style="gap: 3px"
          >
            <li v-for="(item, index) in listResult" :key="item.id">
              <a
                :class="[
                  'pagination-link',
                  { 'is-current': index === listResult.length - 1 },
                ]"
                :aria-label="item"
                >{{ item.value }}
              </a>
            </li></transition-group
          >
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "TheResult",
  data() {
    return {
      isCardModalActive: false,
      total: 0,
      coin: 0,
      listResult: [],
      labelPosition: "center",
    };
  },
  computed: {
    getTotalCoin() {
      return this.total * this.coin;
    },
  },
  methods: {
    uniqueKey() {
      return uuidv4();
    },
  },
  mounted() {
    let _this = this;
    let i = 1;
    setInterval(function () {
      _this.listResult.push({
        value: i,
        id: uuidv4(),
      });
      i++;
      if (i == 21) {
        i = 1;
        _this.listResult = [];
      }
    }, 1000);
  },
};
</script>

<style></style>
