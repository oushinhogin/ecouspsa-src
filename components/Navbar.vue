<template>
  <nav class="navbar is-dark">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="/colorado_flag.png" />
          ECO USPSA
        </nuxt-link>

        <a role="button" class="navbar-burger burger" v-bind:class="menuIsOpen" @click="open ^= true">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div class="navbar-menu" v-bind:class="menuIsOpen">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" @click.native="captureClick" exact-active-class="is-active" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" @click.native="captureClick" active-class="is-active" to="/getting_started">Getting Started</nuxt-link>
          <nuxt-link class="navbar-item" @click.native="captureClick" active-class="is-active" to="/safety_program">Safety Program</nuxt-link>
          <nuxt-link class="navbar-item" @click.native="captureClick" active-class="is-active" to="/schedule">Schedule</nuxt-link>
          <nuxt-link class="navbar-item" @click.native="captureClick" active-class="is-active" to="/results">Results</nuxt-link>
          <nuxt-link class="navbar-item" @click.native="captureClick" active-class="is-active" to="/clubs">Club Info &amp; Maps</nuxt-link>
          <nuxt-link class="navbar-item" @click.native="captureClick" active-class="is-active" to="/sectioninfo">Section Info</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        open: false
      }
    },
    computed: {
      menuIsOpen () {
        return {
          'is-active': this.open
        }
      }
    },
    methods: {
      captureClick () {
        this.open = false
      }
    }
  }
</script>


<style lang="scss" scoped>
nav.navbar {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
.navbar-brand .navbar-item img {
  margin-right: 10px;
}
</style>
