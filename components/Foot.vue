<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>&copy; Eastern Colorado USPSA 2012-{{year}}</p>
      <p class="is-size-7"><nuxt-link to="/dq-report" class="hidden">Problems?</nuxt-link> Suggestions? <a href="mailto:webmaster@ecouspsa.com">webmaster@ecouspsa.com</a></p>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    year () {
      const d = new Date();
      return d.getFullYear();
    }
  }
}
</script>
<style>
a.hidden {
  color: #4a4a4a;
}
</style>
