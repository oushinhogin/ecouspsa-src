<template>
  <section class="section">
    <div class="container content">
      <div class="clubInfo">
        <h1>ECO Section</h1>
        <p>
          <strong>Section Coordinator:</strong>
          <a href="mailto:rezman@hotmail.com">Charlie Perez</a>
          &mdash; 303-882-6728
        </p>
      </div>

      <club-info
        v-for="club in clubs"
        :club="club"
        :key="club.id"
        />
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
