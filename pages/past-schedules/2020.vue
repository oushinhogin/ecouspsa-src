<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="is-centered">
          <h1 class="title">USPSA Matches {{year}}</h1>
          <h2 class="subtitle">
            (past schedules:
            <nuxt-link to="/past-schedules/2013">2013</nuxt-link>,
            <nuxt-link to="/past-schedules/2014">2014</nuxt-link>,
            <nuxt-link to="/past-schedules/2015">2015</nuxt-link>,
            <nuxt-link to="/past-schedules/2016">2016</nuxt-link>,
            <nuxt-link to="/past-schedules/2017">2017</nuxt-link>,
            <nuxt-link to="/past-schedules/2018">2018</nuxt-link>,
            <nuxt-link to="/past-schedules/2019">2019</nuxt-link>)
          </h2>
        </div>

        <schedule-table :year="year" />

          <div class="notification is-warning">
            All BRC matches are canceled until further notice.
            <br />
            <br />
            All early spring, late fall, and winter matches are subject to
            advance cancelation due to range conditions, weather, or weather
            forecasts. Keep an eye on the <nuxt-link
                                            to="results#googlegroup">Google Group</nuxt-link> for updates.
          </div>
          <div class="content">

            <h4>Colorado Major Matches</h4>
            <ol>
              <li>Rocky Mountain 300 – Oct. 9-11, 2020 – Weld County</li>
              <li>Mile High Showdown &mdash; Sept. 18-20, 2020 &mdash; HPPS</li>
            </ol>
            <h4>USPSA Nationals</h4>
            <ul>
              <li>
                <strong>June 11-14, 2020</strong> &mdash; Multi-gun – Frostproof, FL
              </li>
              <li>
                <strong>June 18-21, 2020</strong> &mdash; PCC – Frostproof, FL
              </li>
              <li>
                <strong>Sept. 2-5, 2020</strong> &mdash; SS – Talladega, AL
              </li>
              <li>
                <strong>Sept. 6, 2020</strong> &mdash; Rev/L10 – Talladega, AL
              </li>
              <li>
                <strong>Sept. 23-27, 2020</strong> &mdash; Steel Challenge World Speed Shooting Chanpionship – Talladega, AL
              </li>
              <li>
                <strong>Oct. 18-20, 2020</strong> &mdash; Production/Carry Optics – Frostproof, FL
              </li>
              <li>
                <strong>Oct. 22-24, 2020</strong> &mdash; Limited/Open – Frostproof, FL
              </li>
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
      year: 2020,
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
