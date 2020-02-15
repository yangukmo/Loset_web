<template>
  <div id="app">
    <img id="logo" src="../assets/images/loset-120x163.svg" alt="Logo"/>
    <p class="desc">Run applications in batches easily.</p>
    <download-button id="btn-download"/>
    <img id="screenshot" src="../assets/images/screenshot.webp" alt="Screenshot"/>
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
  export default class Home extends Vue {
  }
</script>

<style lang="scss">
  #app {
    font-family: Nunito Sans, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 0;

    #logo {
      margin-bottom: 1rem;
      width: 160px;
      height: 217px;
    }

    #btn-download {
      margin-bottom: 3rem;
    }

    #screenshot {
      width: 100%;
      max-width: 800px;
    }

    .desc {
      margin-bottom: 2rem;
      font-size: 18px;
    }
  }
</style>
