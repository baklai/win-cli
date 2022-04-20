import theme from '@nuxt/content-theme-docs';

export default theme({
  telemetry: false,

  ssr: false,

  docs: {
    primaryColor: '#00A2E9'
  },

  css: ['~~/assets/main.css'],

  overrides: {
    footer: '/components/global/AppFooter.vue'
  }
});
