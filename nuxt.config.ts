// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'meymed',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],

            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.lineicons.com/4.0/lineicons.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css'
                },
            ]
        }
    },
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
