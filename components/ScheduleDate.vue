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
    specialDayClasses: function () {
      return {
        'section-qualifier': this.month + 1 == this.clubInfo.sectionQualifier,
        'super-classifier': this.clubInfo.superClassifiers && this.clubInfo.superClassifiers.indexOf(this.month + 1) >= 0,
        'major': this.isMajor,
        'iffy': this.isIffy
      }
    },
    day: function () {
      if (this.isMajor) {
        var majorKey = "m" + (this.month + 1)
        return this.clubInfo.majors[majorKey]
      } else if (this.isOmitted) {
        return ''
      } else {
        var day_of_week = this.clubInfo.dayOfWeek - 1
        var week_of_month = this.clubInfo.weekOfMonth - 1
        var start_of_month = new Date(this.year, this.month).getDay()
        var first_instance_of_day_of_week = ((day_of_week - start_of_month)) + 1
        if (first_instance_of_day_of_week <= 0) {
          first_instance_of_day_of_week += 7
        }
        return first_instance_of_day_of_week + 7 * week_of_month
      }
    },
    isMajor: function () {
      if (!this.clubInfo.majors) {
        return false
      }
      var majorKey = "m" + (this.month + 1)
      return this.clubInfo.majors.hasOwnProperty(majorKey)
    },
    isIffy: function () {
      if (!this.clubInfo.iffy) {
        return false
      }
      return this.clubInfo.iffy.indexOf(this.month+1) >= 0
    },
    isOmitted: function () {
      if (!this.clubInfo.omit) {
        return false
      }
      return this.clubInfo.omit.indexOf(this.month+1) >= 0
    }
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
