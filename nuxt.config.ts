
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
          Raleway: {
            wght: [100, 900],
          }// Enable Raleway font
        }
      },
    plugins:['@/plugins/antd'],
    
    
})