<template>
  <a id="btn-github" href="https://github.com/yangukmo/Loset" @click="analytics" target="_blank">
    <i class="fa fa-github"></i>
  </a>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class GithubButton extends Vue {
    analytics(): void {
      this.$gtag.event('move_page', {
        event_label: 'github'
      })
    }
  }
</script>

<style lang="scss" scoped>
  #btn-github {
    color: #CCC;
    text-decoration: none;

    &:hover {
      color: #FFF;
    }

    .fa-github {
      font-size: 30px;
    }
  }
</style>
