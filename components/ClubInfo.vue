<template>
  <div class="clubInfo" :id="club.shortName" v-if="club.name">
    <h2 v-html="club.name"></h2>
    <div class="columns">
      <div class="column">
        <table class="table is-narrow is-bordered">
          <tbody>
            <tr>
              <th>Club code:</th>
              <td>{{club.code}}</td>
            </tr>
            <tr v-if="club.hostClub">
              <th>Hosted by:</th>
              <td><a :href="club.hostClub.url" v-html="club.hostClub.name"></a></td>
            </tr>
            <tr>
              <th colspan="2" class="is-dark">
                Personnel
              </th>
            </tr>
            <tr v-for="c in club.contacts">
              <th>{{c.position}}:</th>
              <td>
                <a :href="c.email|mailto" v-if="c.email">{{c.name}}</a>
                <span v-if="!c.email">{{c.name}}</span>
                <span v-if="c.phone">&mdash; {{c.phone}}</span>
              </td>
            </tr>
            <tr>
              <th colspan="2" class="is-dark">
                Match Day Schedule
              </th>
            </tr>
            <tr v-for="time, title in club.times">
              <th>
                <span v-html="title"></span>:
              </th>
              <td v-html="time"></td>
            </tr>
            <tr>
              <th colspan="2" class="is-dark">
                {{"Fee" | pluralize(Object.keys(club.fees).length)}}
              </th>
            </tr>
            <tr v-for="amount, title in club.fees">
              <th>{{title}}:</th>
              <td>{{amount}}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div class="select">
            <select v-model="year">
              <option v-for="year in years">{{year}}</option>
            </select>
          </div>
          <a
            class="button is-link"
            target="_BLANK"
            :href="resultsLink(club)"
            >{{club.shortName}} Results</a>
        </div>
      </div>

      <div class="column is-narrow">
        <iframe
          frameborder="0"
          height="365"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          :src="club.googleMapsIframeUrl"
          width="365"
          ></iframe>
        <br />
        <a
          class="button is-link"
          :href="club.googleMapLink">View Larger Map</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'club'
  ],
  data () {
    return {
      'year': (new Date).getFullYear(),
      'years': [...Array(5).keys()].map((i) => (new Date).getFullYear() - i)
    }
  },
  filters: {
    pluralize (i, n) {
      if (n==1) {
        return i;
      } else {
        return i + 's';
      }
    }
  },
  methods: {
    resultsLink (club) {
      return 'https://uspsa.org/match-results-listing?club='+club.code+'&year='+this.year+'&year2=0'
    }
  }
}
</script>

<style>
.content .clubInfo p {
  margin-bottom: 0.375em;
}
.clubInfo {
  border-bottom: 1px solid #efefef;
  padding: 30px 0;
}
.clubInfo:last-child {
  padding-bottom: 0;
  border-bottom: 0 none;
}
iframe {
  margin-bottom: 10px;
}
</style>
