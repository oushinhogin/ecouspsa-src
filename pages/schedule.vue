<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="is-centered">
          <h1 class="title">USPSA Matches {{year}}</h1>
          <h2 class="subtitle">
            (past schedules:
            <nuxt-link to="/past-schedules/2019">2019</nuxt-link>,
            <nuxt-link to="/past-schedules/2020">2020</nuxt-link>,
            <nuxt-link to="/past-schedules/2021">2021</nuxt-link>)
          </h2>
        </div>

        <schedule-table :year="year" />

        <div class="notification is-warning">
          All early spring, late fall, and winter matches are subject to
          advance cancelation due to range conditions, weather, or weather
          forecasts. Keep an eye on the
          <nuxt-link to="results#googlegroup">Google Group</nuxt-link> for updates.
        </div>
        <div class="content">
          <h2>Major USPSA Matches</h2>
          <table>
            <thead>
              <tr>
                <th>Dates</th>
                <th>Match Name</th>
                <th>Location</th>
                <th>Fee</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="match in majors[year]" v-key="match.title">
                <td>{{match.start}} - {{match.end}}</td>
                <td>{{match.title}}</td>
                <td>{{match.location}}</td>
                <td><span v-if="match.price">${{match.price}}</span></td>
              </tr>
            </tbody>
          </table>
          <h2>Steel Challenge Matches</h2>
          <schedule-table :year="year" :other-clubs="scsa" />
          <h4>Colorado Major Matches</h4>
          <ol>
            <li>Colorado State SCSA Championship</li>
            <li>Colorado Rimfire Challenge Shooting Association</li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import ScheduleTable from '~/components/schedule/Table.vue'
export default {
  components: {
    ScheduleTable
  },
  data () {
    return {
      year: 2022,
      scsa: this.$store.state.clubs.scsa,
      majors: this.$store.state.clubs.majors,
    }
  }
}
</script>

<style lang="scss" scopped>
.is-centered {
  margin-bottom: 30px;
}
.key {
  display: flex;
  justify-content: center;
  table {
    margin: 0 20px;
  }

}
.more-info {
  margin-bottom: 25px;
}
.additional-club-info {
  @extend .column;
  flex-basis: 25%;
}
.tab-content {
  margin-bottom: 50px;
}
</style>

