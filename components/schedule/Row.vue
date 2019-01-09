<template>
  <tr>
    <td>
      <nuxt-link :to="link" v-if="!noLink">{{ info.shortName }}</nuxt-link>
      <span v-else>{{info.shortName}}</span>
    </td>
    <!-- 1st sunday -->
    <td>{{ info.location }}</td>
    <schedule-date
      v-for="month in 12"
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
    'year',
    'noLink'
  ],
  computed: {
    link: function () {
      return "/clubs#" + this.info.shortName
    },
  },
  components: {
    ScheduleDate
  }
}
</script>
