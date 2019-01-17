<template>
  <td class="day" v-bind:class="specialDayClasses" v-html="day"></td>
</template>

<script>
export default {
  props: [
    'clubInfo',
    'month',
    'year'
  ],
  computed: {
    scheduleInfo () {
      return this.clubInfo.schedules[this.year]
    },
    specialDayClasses () {
      return {
        'section-qualifier': this.month == this.scheduleInfo.sectionQualifier,
        'super-classifier': this.scheduleInfo.superClassifiers && this.scheduleInfo.superClassifiers.indexOf(this.month) >= 0,
        'major': this.isMajor,
        'iffy': this.isIffy
      }
    },
    day () {
      if (this.isMajor) {
        var majorKey = "m" + this.month
        return this.scheduleInfo.majors[majorKey]
      } else if (this.isOmitted) {
        return ''
      } else {
        var day_of_week = this.scheduleInfo.dayOfWeek - 1
        var week_of_month = this.scheduleInfo.weekOfMonth - 1
        var start_of_month = new Date(this.year, this.month - 1).getDay()
        var first_instance_of_day_of_week = ((day_of_week - start_of_month)) + 1
        if (first_instance_of_day_of_week <= 0) {
          first_instance_of_day_of_week += 7
        }
        return first_instance_of_day_of_week + 7 * week_of_month
      }
    },
    isMajor () {
      if (!this.scheduleInfo.majors) {
        return false
      }
      var majorKey = "m" + this.month
      return this.scheduleInfo.majors.hasOwnProperty(majorKey)
    },
    isIffy () {
      if (!this.scheduleInfo.iffy) {
        return false
      }
      return this.scheduleInfo.iffy.indexOf(this.month) >= 0
    },
    isOmitted () {
      if (!this.scheduleInfo.omit) {
        return false
      }
      return this.scheduleInfo.omit.indexOf(this.month) >= 0
    },
  }
}
</script>

<style scopped>
  td.day {
    text-align: center;
    vertical-align: middle;
  }
  td.iffy {
    background: #e7e7e7;
  }
</style>
