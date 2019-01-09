<template>
  <section class="section">
    <div class="container content">
      <div class="clubInfo">
        <h1>ECO Section</h1>
        <p>
          <strong>Section Coordinator:</strong>
          <a href="mailto:genebray@fastmail.com">Gene Bray</a>
          &mdash; 719-439-9859
        </p>
      </div>

      <club-info v-for="club in clubs" v-bind:club="club" />
    </div>
  </section>
</template>
<script>
import ClubInfo from '~/components/ClubInfo.vue'
export default {
  components: {
    ClubInfo
  },
  computed: {
    clubs () {
      return this.$store.state.clubs.list
    }
  },
}
</script>
