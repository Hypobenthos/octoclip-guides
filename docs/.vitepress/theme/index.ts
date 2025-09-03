// Given from https://vitepress.dev/guide/extending-default-theme

import DefaultTheme from 'vitepress/theme';
import ShortcutConverter from './components/ShortcutConverter.vue';

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('ShortcutConverter', ShortcutConverter);
    }
};