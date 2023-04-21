
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
          Raleway: {
            wght: [100, 900],
          },
          'Open Sans': {
            wght: [100, 400, 700],
          }
        }
      },
    plugins:['@/plugins/antd'],
    vite: {
      plugins: [
        Components({
          // add option {resolveIcons: true} as parameter for resolving problem with icons
          resolvers: [AntDesignVueResolver({resolveIcons: true})],
        }),
      ],
      ssr: {
        noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue','@ant-design/icons-vue'],
      },  
    },
})