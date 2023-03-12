import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        icons: {
            iconfont: 'mdiSvg',
        },
        defaults: {
            icons: {
                iconfont: 'mdiSvg',
            },
            VCard: {
                VBtn: { elevation: 0 },
            },
            VBtn: { elevation: 0 },
            VTextField: { elevation: 0 },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})