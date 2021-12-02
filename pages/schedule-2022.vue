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
            forecasts. Keep an eye on the <nuxt-link
                                            to="results#googlegroup">Google Group</nuxt-link> for updates.
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
                <tr>
                  <td>3/30 - 4/3</td>
                  <td>Multigun Nationals</td>
                  <td>Clinton, SC</td>
                  <td>$295</td>
                </tr>

                <tr>
                  <td>4/20 - 4/24</td>
                  <td>Colorado State - Big Horn Classic</td>
                  <td>Palisade, CO</td>
                  <td>$150</td>
                </tr>

                <tr>
                  <td>5/20 - 5/22</td>
                  <td>Classic Nationals (SS, L10, Revo)</td>
                  <td>Talladega, AL</td>
                  <td>$250</td>
                </tr>

                <tr>
                  <td>6/2 - 6/5</td>
                  <td>Area 1 Championship</td>
                  <td>Nampa, ID</td>
                  <td>$200</td>
                </tr>

                <tr>
                  <td>6/9 - 6/12</td>
                  <td>2-Gun PCC/Pistol Nationals</td>
                  <td>Palisade, CO</td>
                  <td>$295</td>
                </tr>

                <tr>
                  <td>6/10 - 6/12</td>
                  <td>Rocky Mountain 300</td>
                  <td>Weld, CO</td>
                  <td>$99</td>
                </tr>

                <tr>
                  <td>8/11 - 8/14</td>
                  <td>Area 3 Championship</td>
                  <td>Alda, NE</td>
                  <td></td>
                </tr>

                <tr>
                  <td>9/1 - 9/4</td>
                  <td>Utah State</td>
                  <td>Salt Lake City, UT</td>
                  <td>$160</td>
                </tr>

                <tr>
                  <td>9/7 - 9/11</td>
                  <td>Carry Optics Nationals</td>
                  <td>Talladega, AL</td>
                  <td>$285</td>
                </tr>

                <tr>
                  <td>9/22 - 9/25</td>
                  <td>Area 4 Championship</td>
                  <td>Tulsa, OK</td>
                  <td>$185</td>
                </tr>

                <tr>
                  <td>9/23/2 - 9/25</td>
                  <td>US IPSC Nationals</td>
                  <td>Frostproof, FL</td>
                  <td>$210</td>
                </tr>

                <tr>
                  <td>10/11 - 10/16</td>
                  <td>Open/Limited/PCC/Production Nationals</td>
                  <td>Palisade, CO</td>
                  <td>$295</td>
                </tr>

                <tr>
                  <td>11/10 - 11/13</td>
                  <td>Area 2 Championship</td>
                  <td>Mesa, AZ</td>
                  <td>$330</td>
                </tr>
              </tbody>
            </table>
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

