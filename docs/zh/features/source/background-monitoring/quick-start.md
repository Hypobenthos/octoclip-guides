# 剪贴板后台监听快速开启指南

只聚焦“怎么开”。原理说明见[后台监控原理说明](../background-monitoring.md)。

## 开启路径

- **macOS / Windows**：打开应用即开始后台监听
- **Android**：在设置中选择授权方式（**Shizuku 推荐** / 无障碍 / Root），按指引完成授权
- **iOS**：通过「系统分享」或「快捷指令」把复制内容发送到章鱼速贴（仅前台触发）

## 平台差异（速览）

| 平台 | 自动后台监听 | 如何启用 | 关键限制 |
| ---- | ------------ | -------- | -------- |
| iOS | 否 | 系统分享 / 快捷指令 / 打开 App 触发读取 | 无法持续后台读取（规划剪贴键盘、PiP 临时后台） |
| Android | 是 | Shizuku / 无障碍 / Root（三选一） | Android 10+ 需授权；授权可能被系统回收，需按子页保活 |
| macOS | 是 | 打开应用即启用 | 系统级后台运行 |
| Windows | 是 | 打开应用即启用 | 系统级后台运行 |

## 入口与链接

- **Android 授权方式**
  - Shizuku（推荐）：[启用剪贴板后台监听（Shizuku）](/zh/features/source/background-monitoring/android/shizuku/)
  - 无障碍模式：[启用剪贴板后台监听（无障碍）](/zh/features/source/background-monitoring/android/accessibility/)
  - Root 模式：[启用剪贴板后台监听（Root）](/zh/features/source/background-monitoring/android/root/)
- **iOS 触发入口**
  - [系统分享与快捷指令](/zh/features/background-monitoring/ios/shortcuts/)
