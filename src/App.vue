<template>
  <div id="app">
    <img id="logo" src="./assets/images/loset-120x163.svg" alt="Logo"/>
    <p class="desc">Run applications in batches easily.</p>
    <download-button id="btn-download"/>
    <img id="screenshot" src="./assets/images/screenshot.png" alt="Screenshot"/>
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

<style lang="scss">
  body {
    background-color: #0e0037;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23080c29'/%3E%3Cstop offset='1' stop-color='%23080c29' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23071738'/%3E%3Cstop offset='1' stop-color='%23071738' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2301232a'/%3E%3Cstop offset='1' stop-color='%2301232a' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230e0037'/%3E%3Cstop offset='1' stop-color='%230e0037' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2301181b'/%3E%3Cstop offset='1' stop-color='%2301181b' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23002d38'/%3E%3Cstop offset='1' stop-color='%23002d38' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-repeat: repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;

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
  }
</style>
