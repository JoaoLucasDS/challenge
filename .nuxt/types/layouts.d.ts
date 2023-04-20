import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "landing-page"
declare module "/Users/joaolucasdantassilva/Documents/Codes/challenge/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}