<template>
  <div>
    <navbar/>
    <div class="main-content-area">
      <nuxt/>
    </div>
    <foot/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    Navbar,
    Foot
  }
}
</script>

<style lang='scss'>
.is-centered {
  text-align: center;
}
$super-classifier: $link;
$section-qualifier: $danger;
$major: $success;
.has-something {
  font-weight: bold;
  &:after {
    content: '';
    display: block;
    height: 5px;
    border-radius: 3px;
    background: $section-qualifier;
  }
}
.section-qualifier {
  @extend .has-something;
  &:after {
    background: $section-qualifier;
  }
}
.super-classifier {
  @extend .has-something;
  &:after {
    background: $super-classifier;
  }
}
.major {
  @extend .has-something;
  &:after {
    background: $major;
  }
}
.main-content-area {
  min-height: calc(100vh - 254px);
}
.qualifier {
  background-color: rgb(255, 0, 255);
  font-weight: bold;
}
.superclassifier {
  background-color: rgb(153, 204, 255);
  font-weight: bold;
}
.majormatch {
  background-color: rgb(32, 224, 32);
  font-weight: bold;
}
</style>
