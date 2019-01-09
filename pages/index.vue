<template>
  <div>
    <div class="hero">
      <div class="hero-body">
        <div class="flex">
          <div class="copy">
            <h1 class="title is-1">Welcome to Popper!</h1>
            <h2 class="subtitle">Serving the Eastern Colorado USPSA Section</h2>
          </div>
          <div class="uspsa">
            <a href="http://www.uspsa.org" target="_blank"><img src="/diamond-logo-tranparent-back1.png"></a>
          </div>
        </div>
      </div>
    </div> <!-- hero unit -->
    <section class="section">
      <div class="container">
        <!-- stereotypical Bootstrap three call-outs -->
        <div class="columns">
          <div class="column is-half-tablet is-one-quarter-desktop">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h3 class="title is-4">Getting Started</h3>
                  <p>
                    Information on getting started shooting USPSA in Eastern Colorado.
                    Start here if you're new to Practical Shooting!
                  </p>
                  <p><nuxt-link class="button is-link" to="getting_started">Learn More »</nuxt-link></p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half-tablet is-one-quarter-desktop">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h3 class="title is-4">Safety Program</h3>
                  <p>
                    Ready to start shooting?
                    Check out our required safety program.
                  </p>
                  <p><nuxt-link class="button is-link" to="safety_program">Learn More »</nuxt-link></p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-half-tablet is-one-quarter-desktop">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h3 class="title is-4">Match Schedule</h3>
                  <p>
                    Schedule of this year's USPSA and SCSA matches.  Includes dates
                    for Section Qualifier and Super Classifier matches, as well as
                    major matches hosted by the ECO Section.  Also information about
                    non-USPSA matches in the area such as 3-Gun, GSSF, IDPA, etc.
                  </p>
                  <p><nuxt-link class="button is-link" to="schedule">Schedule »</nuxt-link></p>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-half-tablet is-one-quarter-desktop">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h3 class="title is-4">Match Results</h3>
                  <p>
                    Where to find match results, and how to get on the Google Group
                    so you can get results by email.
                  </p>
                  <p><nuxt-link class="button is-link" to="results">Results »</nuxt-link></p>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- row of 3 things -->
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    background: transparent url('/background.jpg') repeat scroll center center;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
      padding: 20px;
    }
  }
  .columns { flex-wrap: wrap; }
  @media (max-width: 798px) {
    .flex {
      flex-direction: column-reverse;
    }
  }
  section.section {
    min-height: calc(100vh - 591px);
  }
</style>
