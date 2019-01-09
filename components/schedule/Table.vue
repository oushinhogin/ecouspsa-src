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
          v-for="club in clubs"
          v-bind:info="club"
          v-bind:year="year"
          />
      </tbody>
    </table>
    <div class="key">
      <table class="table is-bordered">
        <tbody>
          <tr>
            <td class="section-qualifier">
              Section Qualifier
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table is-bordered">
        <tbody>
          <tr>
            <td class="super-classifier">
              Super Classifier
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
export default {
  props: [
    'year'
  ],
  computed: {
    clubs () {
      return this.$store.state.clubs.list
    }
  },
  components: {
    ClubSchedule
  }
}
</script>

<style lang="scss" scoped>
</style>
