module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/reset.scss";
          @import "@/assets/styles.scss";`,
      },
    },
  },
}
