import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/index.scss'

import HomeSponsors from './components/HomeSponsors.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import SvgImage from './components/SvgImage.vue'

export default Object.assign({
    ...Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
            'home-features-after': () => h(HomeSponsors),
            'aside-ads-before': () => h(AsideSponsors),
        })
    },
    enhanceApp({ app }) {
        // register global components
        app.component('SvgImage', SvgImage)
    }
})
