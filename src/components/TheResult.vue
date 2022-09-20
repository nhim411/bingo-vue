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
      <div class="column">
        <nav
          class="pagination is-rounded"
          role="navigation"
          aria-label="pagination"
        >
          <ul class="pagination-list">
            <li>
              <a class="pagination-link" aria-label="Page 1" aria-current="page"
                >1</a
              >
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 2">01</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">22</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">32</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">54</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">53</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">63</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">63</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">27</a>
            </li>
            <li>
              <a class="pagination-link is-current" aria-label="Goto page 3"
                >12</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheResult",
  data() {
    return {
      isCardModalActive: false,
      total: 0,
      coin: 0,
    };
  },
  computed: {
    getTotalCoin() {
      return this.total * this.coin;
    },
  },
};
</script>

<style></style>
