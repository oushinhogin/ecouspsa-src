<template>
  <tr>
    <td><nuxt-link :to="link">{{ info.shortName }}</nuxt-link></td>
    <!-- 1st sunday -->
    <td>{{ info.location }}</td>
    <schedule-date
      v-for="month in months"
      v-bind:month="month"
      v-bind:year="year"
      v-bind:club-info="info"
      />
  </tr>
</template>

<script>
import ScheduleDate from '~/components/schedule/Date.vue'
export default {
  props: [
    'info',
    'year'
  ],
  computed: {
    link: function () {
      return "/clubs#" + this.info.shortName
    },
  },
  data: function () {
    return {
      months: [0,1,2,3,4,5,6,7,8,9,10,11]
    }
  },
  components: {
    ScheduleDate
  }
}
</script>
