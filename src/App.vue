<template>
  <div id="app">
    <download-button/>
  </div>
</template>

<script lang="ts">
  import DownloadButton from '@/components/DownloadButton.vue'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      DownloadButton,
    },
  })
  export default class App extends Vue {
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
