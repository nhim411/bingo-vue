<template>
  <div class="admn-view">
    <AppHeader />
    <section>
      <div class="columns mt-4">
        <div class="column is-2">
          <div class="box" style="height: 100vh">
            <div class="content">
              Top trung thuong
              <ol>
                <li>Nam</li>
                <li>Nam</li>
                <li>Nam</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="column is-8" style="height: 100vh">
          <b-table
            :data="isEmpty ? [] : data"
            hoverable="true"
            :loading="isLoading"
            focusable="true"
            mobile-cards="true"
            class="box"
          >
            <div class="title is-centered">Danh sách vòng quay</div>
            <b-table-column
              field="first_name"
              label="Tên vòng quay"
              :td-attrs="columnTdAttrs"
              v-slot="props"
            >
              {{ props.row.first_name }}
            </b-table-column>

            <b-table-column
              field="last_name"
              label="Tổng giải thưởng"
              :td-attrs="columnTdAttrs"
              v-slot="props"
            >
              {{ props.row.last_name }}
            </b-table-column>

            <b-table-column
              field="date"
              label="Thời gian quay"
              :th-attrs="dateThAttrs"
              :td-attrs="columnTdAttrs"
              centered
              v-slot="props"
            >
              16h00
            </b-table-column>

            <b-table-column
              field="date"
              label="Trạng thái"
              :th-attrs="dateThAttrs"
              :td-attrs="columnTdAttrs"
              centered
              v-slot="props"
            >
              <span class="tag is-success"> Mở </span>
              <span class="tag is-danger"> Đóng </span>
            </b-table-column>

            <b-table-column
              label="Join"
              :td-attrs="columnTdAttrs"
              v-slot="props"
            >
              <b-button type="is-success" size="is-small">Join now</b-button>
            </b-table-column>

            <template #empty>
              <div class="has-text-centered">No records</div>
            </template>
          </b-table>
          <div class="content box">Lịch sử quay</div>
        </div>
        <div class="column is-2">
          <div class="box" style="height: 100vh">
            <div class="content">
              Top mua ve
              <ol>
                <li>Nam</li>
                <li>Nam</li>
                <li>Nam</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";

export default {
  name: "TheDashboard",
  components: { AppHeader },
  data() {
    const data = [
      {
        id: 1,
        first_name: "Jesse",
        last_name: "10",
        date: "2016/10/15 13:43:27",
        gender: "Male",
      },
      {
        id: 2,
        first_name: "John",
        last_name: "11",
        date: "2016/12/15 06:00:53",
        gender: "Male",
      },
      {
        id: 3,
        first_name: "Tina",
        last_name: "12",
        date: "2016/04/26 06:26:28",
        gender: "Female",
      },
      {
        id: 4,
        first_name: "Clarence",
        last_name: "13",
        date: "2016/04/10 10:28:46",
        gender: "Male",
      },
      {
        id: 5,
        first_name: "Anne",
        last_name: "14",
        date: "2016/12/06 14:38:38",
        gender: "Female",
      },
    ];

    return {
      data,
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
    };
  },
};
</script>

<style>
.admin-view {
  background: #fc466b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3f5efb,
    #fc466b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3f5efb,
    #fc466b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
