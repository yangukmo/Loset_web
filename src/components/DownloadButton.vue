<template>
  <div>
    <button type="button" id="btn-download" @click="downloadFile">
      <span class="title">Download for Mac</span>
      <span class="name" v-show="fileName">{{ fileName }}</span>
    </button>
  </div>
</template>

<script lang="ts">
  import axios from 'axios'
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class DownloadButton extends Vue {
    private version!: string
    private downloadUrl!: string
    private fileName!: string
    private size!: number

    constructor() {
      super()
      this.version = ''
      this.downloadUrl = ''
      this.fileName = ''
      this.size = 0
    }

    created(): void {
      this.getReleaseInfo()
    }

    downloadFile(): void {
      window.open(this.downloadUrl)
    }

    private async getReleaseInfo(): Promise<void> {
      const { data } = await axios.get('https://api.github.com/repos/yangukmo/Loset/releases')
      const [latestRelease] = data
      const [asset] = latestRelease.assets

      this.version = latestRelease.tag_name
      this.downloadUrl = asset.browser_download_url
      this.fileName = asset.name
      this.size = asset.size
    }
  }
</script>

<style lang="scss" scoped>
  #btn-download {
    border: 0;
    background-color: #22C4D6;
    color: #FFF;
    outline: none;
    padding: 1rem 1.5rem;
    cursor: pointer;

    span {
      display: block;
    }

    .title {
      margin-top: 0;
      margin-bottom: .5rem;
      font-weight: 600;
      font-size: 20px;
    }
  }
</style>
