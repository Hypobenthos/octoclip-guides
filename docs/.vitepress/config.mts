import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcExclude: ["/README*.md", "/CONTRIBUTING*.md"],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/hypobenthos/octoclip-guides",
			},
		],

		footer: {
			copyright: "© 2025 Syncto, Inc. All rights reserved.",
		},
	},
	locales: {
		root: {
			label: "English",
			lang: "en",
			title: "Octoclip",
			description: "Copy Here, Paste Anywhere",

			themeConfig: {
				nav: [
					{ text: "Home", link: "/" },
					{ text: "Get Started", link: "/getting-started/installation" },
					{ text: "Features", link: "/features/overview" },
					{ text: "Advanced", link: "/advanced/settings" },
					{ text: "Support", link: "/support/faq" },
				],

				sidebar: {
					"/getting-started/": [
						{
							text: "Getting Started",
							items: [
								{
									text: "Installation",
									link: "/getting-started/installation",
								},
								{
									text: "First Steps",
									link: "/getting-started/first-steps",
								},
								{
									text: "FAQ",
									link: "/getting-started/faq",
								},
							],
						},
					],

					"/features/": [
						{
							text: "Overview",
							items: [
								{ text: "Features Overview", link: "/features/overview" },
							],
						},
						{
							text: "Basics",
							items: [{ text: "Clip History", link: "/features/clip-history" }],
						},
						{
							text: "Clip Sources",
							items: [
								{
									text: "Clipboard",
									link: "/features/source/clipboard",
								},
								{
									text: "Background Monitoring",
									link: "/features/source/background-monitoring",
								},
								{
									text: "SMS",
									link: "/features/source/sms",
								},
								{
									text: "Screenshots",
									link: "/features/source/screenshots",
								},
							],
						},
						{
							text: "Sync",
							items: [
								{ text: "Nearby Sync", link: "/features/nearby-sync" },
								{ text: "Cloud Sync", link: "/features/cloud-sync" },
								{
									text: "Cross-device Paste",
									link: "/features/cross-device-paste",
								},
							],
						},
						{
							text: "Everyday Tips",
							items: [
								{ text: "Pin Clips", link: "/features/pin-clips" },
								{ text: "Quick Input", link: "/features/quick-input" },
								{ text: "Aliases", link: "/features/quick-input-alias" },
								{ text: "Temporary Clip", link: "/features/temp-clip" },
							],
						},
						{
							text: "Extensions",
							items: [{ text: "Plugins", link: "/features/plugins" }],
						},
					],

					"/advanced/": [
						{
							text: "Advanced",
							items: [
								{ text: "Settings", link: "/advanced/settings" },
								{
									text: "Platform Differences",
									link: "/advanced/platform-differences",
								},
								{ text: "Performance", link: "/advanced/performance" },
								{
									text: "Privacy & Security",
									link: "/advanced/privacy-security",
								},
							],
						},
						{
							text: "Windows",
							items: [
								{
									text: "Replace Win+V Shortcut",
									link: "/advanced/windows/win-v-shortcut/",
								},
							],
						},
					],

					"/support/": [
						{
							text: "Support",
							items: [
								{ text: "FAQ", link: "/support/faq" },
								{
									text: "Troubleshooting",
									link: "/support/troubleshooting",
								},
								{ text: "Feedback", link: "/support/feedback" },
							],
						},
					],

					"/community/": [
						{
							text: "Community",
							items: [
								{
									text: "Plugin Dev Guide",
									link: "/community/plugin-dev",
								},
								{ text: "Examples", link: "/community/examples" },
								{
									text: "Contributing",
									link: "/community/contributing",
								},
							],
						},
					],

					"/": [
						{
							text: "Welcome",
							items: [
								{
									text: "Get Started",
									link: "/getting-started/installation",
								},
								{ text: "Features", link: "/features/overview" },
								{ text: "Support", link: "/support/faq" },
							],
						},
					],
				},
			},
		},

		zh: {
			label: "中文",
			lang: "zh",
			title: "章鱼速贴",
			description: "随心复制，随处粘贴",

			themeConfig: {
				nav: [
					{ text: "首页", link: "/zh/" },
					{
						text: "快速开始",
						link: "/zh/getting-started/installation",
					},
					{ text: "功能", link: "/zh/features/overview" },
					{ text: "高级", link: "/zh/advanced/settings" },
					{ text: "支持", link: "/zh/support/faq" },
				],

				sidebar: {
					"/zh/getting-started": [
						{
							text: "快速开始",
							items: [
								{ text: "安装", link: "/zh/getting-started/installation" },
								{ text: "首次上手", link: "/zh/getting-started/first-steps" },
								{ text: "常见问题", link: "/zh/getting-started/faq" },
							],
						},
					],

					"/zh/features/": [
						{
							text: "总览",
							items: [{ text: "功能概览", link: "/zh/features/overview" }],
						},
						{
							text: "基础功能",
							items: [{ text: "剪贴历史", link: "/zh/features/clip-history" }],
						},
						{
							text: "剪贴来源",
							items: [
								{
									text: "剪贴板",
									link: "/zh/features/source/clipboard",
								},
								{
									text: "剪贴板后台监控",
									link: "/zh/features/source/background-monitoring",
								},
								{
									text: "短信",
									link: "/zh/features/source/sms",
								},
								{
									text: "屏幕截图",
									link: "/zh/features/source/screenshots",
								},
							],
						},
						{
							text: "同步",
							items: [
								{ text: "附近同步", link: "/zh/features/nearby-sync" },
								{ text: "云同步", link: "/zh/features/cloud-sync" },
								{
									text: "跨设备粘贴",
									link: "/zh/features/cross-device-paste",
								},
							],
						},
						{
							text: "常用技巧",
							items: [
								{ text: "固定剪贴", link: "/zh/features/pin-clips" },
								{ text: "快速输入", link: "/zh/features/quick-input" },
								{ text: "剪贴别名", link: "/zh/features/quick-input-alias" },
								{ text: "临时剪贴", link: "/zh/features/temp-clip" },
							],
						},
						{
							text: "扩展功能",
							items: [{ text: "插件", link: "/zh/features/plugins" }],
						},
					],

					"/zh/advanced/": [
						{
							text: "高级使用",
							items: [
								{ text: "设置项总览", link: "/zh/advanced/settings" },
								{
									text: "跨平台差异",
									link: "/zh/advanced/platform-differences",
								},
								{
									text: "性能优化",
									link: "/zh/advanced/performance",
								},
								{
									text: "隐私与安全",
									link: "/zh/advanced/privacy-security",
								},
							],
						},
						{
							text: "Windows",
							items: [
								{
									text: "替换 Win+V 快捷键",
									link: "/zh/advanced/windows/win-v-shortcut/",
								},
							],
						},
					],

					"/zh/support/": [
						{
							text: "帮助中心",

							items: [
								{ text: "常见问题", link: "/zh/support/faq" },
								{
									text: "故障排查",
									link: "/zh/support/troubleshooting",
								},
								{ text: "反馈与日志", link: "/zh/support/feedback" },
							],
						},
					],

					"/zh/community/": [
						{
							text: "社区",
							items: [
								{
									text: "插件开发",
									link: "/zh/community/plugin-dev",
								},
								{ text: "示例集", link: "/zh/community/examples" },
								{
									text: "贡献指南",
									link: "/zh/community/contributing",
								},
							],
						},
					],

					// 默认：进入任何未匹配前缀的页面时的侧边栏
					"/zh/": [
						{
							text: "欢迎",
							items: [
								{
									text: "快速开始",
									link: "/zh/getting-started/installation",
								},
								{ text: "功能", link: "/zh/features/overview" },
								{ text: "支持", link: "/zh/support/faq" },
							],
						},
					],
				},
			},
		},
	},
});
