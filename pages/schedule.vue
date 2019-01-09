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
            <nuxt-link to="/past-schedules/2017">2018</nuxt-link>)
          </h2>
        </div>

        <schedule-table v-bind:year="2019" />

          <div class="notification is-warning">
            All early spring, late fall, and winter matches are subject to
            advance cancellation due to range conditions, weather, or weather
            forecasts. Keep an eye on the <nuxt-link
                                            to="results#googlegroup">Google Group</nuxt-link> for updates.
          </div>
          <div class="content">

            <h4>ECO Major Matches</h4>
            <ol>
              <li>Rocky Mountain 300 – 1st weekend June – Weld County</li>
              <li>2019 Colorado State USPSA Championship (date tentative) – Colorado Rifle Club</li>
            </ol>
            <h4>National Matches</h4>
            <ul>
              <li>
                <strong>04/03/19</strong> &mdash; USPSA SIG Sauer Multi Gun Nationals – Frostproof, FL
              </li>
              <li>
                <strong>09/22/19</strong> &mdash; USPSA “HICAP” Nationals Open &amp; PCC Division – Washington, UT
              </li>
              <li>
                <strong>09/26/19</strong> &mdash; USPSA “HICAP” Nationals Carry Optics &amp; Limited – Wasington, UT
              </li>
              <li>
                <strong>11/03/19</strong> &mdash; USPSA “LOCAP” Nationals Production &amp; L10 Divisions – Frostproof, FL
              </li>
              <li>
                <strong>11/07/19</strong> &mdash; USPSA “LOCAP” Nationals Single Stack &amp; Revolver – Frostproof, FL
              </li>
              <li>
                <strong>11/06/17</strong> &mdash; Springfield Armory  Desert Classic Area 2 Championship – Mesa, AZ
              </li>
            </ul>
          </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="is-centered">
          <h2 class="title">Other matches</h2>
        </div>
        <div class="tabs is-boxed is-fullwidth">
          <ul>
            <li v-for="info, type in otherMatches" :class="{'is-active': activeTab == type}"><a @click="activeTab = type">{{type}}</a></li>
          </ul>
        </div>
        <div v-for="info, type in otherMatches" v-if="activeTab == type" class="content">
          <h3 class="is-centered">{{type}}</h3>
          <div v-if="info">
            <div v-html="info.intro" class="content"></div>
            <schedule-table :other-clubs="info.clubs" :year="year" />
            <ol v-if="info.majors.length > 0">
              <li v-for="m in info.majors" v-html="m"></li>
            </ol>
          </div>
          <div v-else>
            <div class="notification is-warning">
              Please contact the Eastern Colorado USPSA Section Coordinator Gene Bray to get
              your match dates and information listed here. <a href="mailto:genebray@fastmail.com">genebray@fastmail.com</a> &mdash; 719-439-9859
            </div>
          </div>
        </div>
        <div class="more-info notification is-info" v-if="!activeTab">
          Select one of the match types above to see general and schedule information.
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
      year: 2019,
      activeTab: '',
      otherMatches: {
        'Multi-Gun': false,
        'Rifle': false,
        'Steel Challenge': false,
        'IDPA': false,
        'USPSA Rifle': {
          intro: '<p>For 2019, the USPSA rifle matches will return to CRC. These will be run under the USPSA MG rules with Hit Factor scoring. Planning on running 4 stages each month, one of which will be a standards/classifier stage. About 100 to 120 rounds. Planning on offering Open, Tactical and Limited divisions.</p>',
          clubs: [
            {
              shortName: "CRCPS",
              location: "Byres",
              schedules: {
                2019: {
                  dayOfWeek: 7,
                  weekOfMonth: 1,
                  omit: [1,12],
                  majors: {
                    m9: '13-15<sup>1</sup>,'
                  }
                }
              },
            },
          ],
          majors: [
            'State match 13-15 September',
          ]
        },
      }
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

</style>
