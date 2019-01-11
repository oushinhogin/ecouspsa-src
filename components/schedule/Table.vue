<template>
  <div>
    <table class="table is-fullwidth is-bordered">
      <thead>
        <tr>
          <th>Club</th>
          <th>Location</th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
        </tr>
      </thead>
      <tbody>
        <club-schedule
          v-if="!otherClubs"
          v-for="club in clubs"
          :info="club"
          :year="year"
          :key="club.id"
          />
        <club-schedule
          v-if="otherClubs"
          v-for="club in otherClubs"
          :info="club"
          :year="year"
          :no-link="true"
          :key="club.id"
          />
      </tbody>
    </table>
    <div class="key" v-if="!otherClubs">
      <table class="table is-bordered">
        <tbody>
          <tr>
            <td class="section-qualifier">
              <tooltip tip="Click for more information">
                <nuxt-link to="qualifier-series">Section Qualifier</nuxt-link>
              </tooltip>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table is-bordered">
        <tbody>
          <tr>
            <td class="super-classifier">
              <tooltip tip="Click for more information">
                <nuxt-link to="super-classifiers">Super Classifier</nuxt-link>
              </tooltip>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table is-bordered">
        <tbody>
          <tr>
            <td class="major">
              Major Match
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ClubSchedule from '~/components/schedule/Row.vue'
import Tooltip from '~/components/Tooltip.vue'
export default {
  props: [
    'year',
    'otherClubs',
  ],
  computed: {
    clubs () {
      return this.$store.state.clubs.list
    }
  },
  components: {
    ClubSchedule,
    Tooltip
  }
}
</script>

<style lang="scss" scoped>
</style>
