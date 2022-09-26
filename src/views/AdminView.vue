<template>
  <div class="admin-view" style="height: 100vh">
    <AppHeader />
    <section class="section">
      <div class="columns box">
        <div class="column">
          <h1 class="title">Create new spinner</h1>
          <b-field label="Select datetime">
            <b-datetimepicker
              v-model="selected"
              rounded
              placeholder="Click to select..."
              icon="calendar-today"
              :icon-right="selected ? 'close-circle' : ''"
              icon-right-clickable
              @icon-right-click="clearDateTime"
              :locale="locale"
              :first-day-of-week="firstDayOfWeek"
              :datepicker="{ showWeekNumber }"
              :timepicker="{ enableSeconds, hourFormat }"
              horizontal-time-picker
            >
            </b-datetimepicker>
          </b-field>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns box">
        <div class="column">
          <h1 class="title">History</h1>
          <b-table :data="data1" :columns="columns1"></b-table>
        </div>
      </div>
    </section>
    <UploadExcel />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import UploadExcel from "../components/UploadExcel.vue";

export default {
  name: "AdminView",
  components: { AppHeader, UploadExcel },
  data() {
    return {
      selected: new Date(),
      showWeekNumber: false,
      enableSeconds: false,
      hourFormat: "24",
      locale: undefined, // Browser locale
      firstDayOfWeek: 1, // 0 - Sunday
      data1: [
        {
          id: 1,
          first_name: "Jesse",
          last_name: "Simmons",
          date: "2016-10-15 13:43:27",
          gender: "Male",
        },
        {
          id: 2,
          first_name: "John",
          last_name: "Jacobs",
          date: "2016-12-15 06:00:53",
          gender: "Male",
        },
        {
          id: 3,
          first_name: "Tina",
          last_name: "Gilbert",
          date: "2016-04-26 06:26:28",
          gender: "Female",
        },
        {
          id: 4,
          first_name: "Clarence",
          last_name: "Flores",
          date: "2016-04-10 10:28:46",
          gender: "Male",
        },
        {
          id: 5,
          first_name: "Anne",
          last_name: "Lee",
          date: "2016-12-06 14:38:38",
          gender: "Female",
        },
      ],
      columns1: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true,
        },
        {
          field: "first_name",
          label: "First Name",
        },
        {
          field: "last_name",
          label: "Last Name",
        },
        {
          field: "date",
          label: "Date",
          centered: true,
        },
        {
          field: "gender",
          label: "Gender",
        },
      ],
    };
  },
  methods: {
    clearDateTime() {
      this.selected = null;
    },
  },
};
</script>

<style>
.admin-view {
  background: #36d1dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #5b86e5,
    #36d1dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #5b86e5,
    #36d1dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
