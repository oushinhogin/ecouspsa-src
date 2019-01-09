<template>
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


      <div class="content">
        <h2>What is the Section Qualifier series? / How are Nationals slots awarded?</h2>
        <p>The Section Qualifier series is how the ECO section awards slots to USPSA Nationals. Every year, one match at each club is designated a Section Qualifier match. You must score in at least <b>3</b> such matches -- <i>in the same division</i> -- to be ranked in that year's Qualifier series. Your best 3 scores (as match percentages) from the series are averaged to produce your Qualifier series score. Once all scores are tallied, slots are offered to competitors in rank order.</p>
        <p>The section receivers a varying number of slots in each division each year, depending on how many total slots are available, how the divisions are scheduled at Nationals, and the level of participation in the section in that division that year. Limited is consistently the most popular division in ECO and tends to be awarded the most slots, followed by Open and Production.</p>
        <p>Note that just because we are awarded e.g. 9 slots to Open Nationals, it isn't necessarily true that the top 9 finishers in the Qualifier series will be the ones to get them! Attending Nationals is a significant committment of time and money, and not everyone who earns a slot will be able to use it. If a competitor declines their slot, it will be offered to the next highest ranked competitor, all the way down the list to last place! It is not uncommon for 20th place to be awarded a slot in this way, so if you want to go to Nationals it pays to shoot 3 Qualifiers even if you do not expect to rank highly. If slots remain after the rankings are exhausted, they will be offered to the section on a first-come first-served basis.</p>
        <p>If, at the conclusion of the Qualifier series, you did not win a slot, or if you wish to attend another National match (in another division), get on the waiting list as soon as it opens. Not every USPSA section awards slots in the same way, and some sections end up with some or all of their slots un-awarded. These slots are returned to USPSA and offered to people on the waiting list on a first-come first-served basis.</p>
        <h2>What are Super Classifier matches?</h2>
        <p>At our ordinary monthly matches, we shoot one Classifier stage. A Super Classifier match is a special match held with the permission of USPSA HQ which includes 4 or more Classifier stages. Super Classifier matches are a great way to get classified in a new division (since 4 Classifiers is the minimum you need), or raise your classification in a division you don't often shoot. Sometimes competitors shooting a division they don't usually shoot are willing to lend out their usual gear to another competitor who wants to try something different. This is a great way to get a day's experience shooting Limited or Open without spending big bucks, so ask around!</p>

      </div>
    </div>
  </section>
</template>

<script>
import ScheduleTable from '~/components/schedule/Table.vue'
export default {
  components: {
    ScheduleTable
  },
  data: function () {
    return {
      year: 2019,
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
</style>
