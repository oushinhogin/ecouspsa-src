<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="is-centered">
          <h1 class="title">USPSA Matches {{year}}</h1>
          <h2 class="subtitle">
            (past schedules:
            <nuxt-link to="/past-schedules/2018">2018</nuxt-link>,
            <nuxt-link to="/past-schedules/2019">2019</nuxt-link>,
            <nuxt-link to="/past-schedules/2020">2020</nuxt-link>)
          </h2>
          <h2 class="subtitle">
            <nuxt-link to="/schedule-2022">2022 Schedule</nuxt-link>
          </h2>
        </div>

        <schedule-table :year="year" />

          <div class="notification is-warning">
            All early spring, late fall, and winter matches are subject to
            advance cancelation due to range conditions, weather, or weather
            forecasts. Keep an eye on the <nuxt-link
                                            to="results#googlegroup">Google Group</nuxt-link> for updates.
          </div>
          <div class="content">
            <h4>Colorado Major Matches</h4>
            <ol>
              <li>6/4/21 - 6/6/21 Rocky Mountain 300 Weld, CO</li>
              <li>6/25/21 - 6/27/21 Colorado State - Big Horn Classic Grand Junction, CO</li>
              <li>7/16/21 - 7/18/21 Mile High Showdown Ramah, CO</li>
            </ol>
            <h4>USPSA Nationals</h4>
            <ul>
              <li>5/7/21 - 5/9/21 LoCap Nationals (Prod, SS, L10, Revo) Talladega, AL</li>
              <li>10/16/21 - 10/18/21 Carry Optics / PCC Nationals Talladega, AL</li>
              <li>10/22/21 - 10/24/21 Limited/Open Nationals Talladega, AL</li>
            </ul>
            <h4>Nearby Area Matches</h4>
            <ul>
              <li>7/30/21 - 8/1/21 Area 3 Championship Grand Island, NE</li>
              <li>8/6/21 - 8/8/21 Area 1 Championship Puyallup, WA</li>
              <li>11/11/21 - 11/14/21 Area 2 Championship Mesa, AZ</li>
            </ul>
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
      year: 2021,
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
