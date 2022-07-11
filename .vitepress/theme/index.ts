import { h, App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './styles/index.scss'
import Footer from './components/Footer.vue'

import './js/nav.js'


export default Object.assign({
    ...DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'layout-bottom': () => h(Footer)
        })
    },
    enhanceApp({ app }) {
        // register global components
    }
})