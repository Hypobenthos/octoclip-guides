// Given from https://vitepress.dev/guide/extending-default-theme

import DefaultTheme from "vitepress/theme";
import ShortcutConverter from "./components/ShortcutConverter.vue";
import PlatformBadge from "./components/PlatformBadge.vue";	
import {
	PhAppleLogo,
	PhAndroidLogo,
	PhWindowsLogo,
	PhLinuxLogo,
} from "@phosphor-icons/vue";
import './custom.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component("ShortcutConverter", ShortcutConverter);
		app.component("PhAppleLogo", PhAppleLogo);
		app.component("PhAndroidLogo", PhAndroidLogo);
		app.component("PhWindowsLogo", PhWindowsLogo);
		app.component("PhLinuxLogo", PhLinuxLogo);
		app.component("PlatformBadge", PlatformBadge);
	},
};
