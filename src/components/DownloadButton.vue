<template>
  <button type="button" @click="downloadFile">
    <span class="title">Download <span class="version" v-text="version"/> for Mac</span>
  </button>
</template>

<script lang="ts">
  import axios from 'axios'
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class DownloadButton extends Vue {
    private version!: string
    private downloadUrl!: string
    private size!: number
    private updatedAt: string

    constructor() {
      super()
      this.version = ''
      this.downloadUrl = ''
      this.size = 0
      this.updatedAt = ''
    }

    created(): void {
      this.getReleaseInfo()
    }

    downloadFile(): void {
      this.$gtag.event('download_app', {
        event_category: 'version',
        event_label: this.version,
      })
      window.location.assign(this.downloadUrl)
    }

    private async getReleaseInfo(): Promise<void> {
      const { data } = await axios.get('https://api.github.com/repos/yangukmo/Loset/releases')
      const [latestRelease] = data
      const [asset] = latestRelease.assets

      this.version = latestRelease.tag_name.replace('v', '')
      this.downloadUrl = asset.browser_download_url
      this.size = asset.size

      const updatedAt = new Date(asset.updated_at)
      this.updatedAt = `${updatedAt.getFullYear()}-${(`0${updatedAt.getMonth() + 1}`).slice(-2)}-${updatedAt.getDate()}`
    }
  }
</script>

<style lang="scss" scoped>
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      margin-top: 0;
      font-weight: 600;
      font-size: 20px;

      .version {
        display: inline-block;
        min-width: 50px;
      }
    }

    .updated-at {
      height: 15px;
      font-size: 12px;
    }
  }
</style>
