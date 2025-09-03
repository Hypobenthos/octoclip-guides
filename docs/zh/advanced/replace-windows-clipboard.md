---
title: 使用 Octoclip 替换 Windows 系统剪贴板管理器
---

# {{ $frontmatter.title }}

---

::: warning
本文操作仅适用于 Windows 操作系统。
:::

# 目录

[[toc]]


## 使用 AutoHotKey

### 第一步：下载并安装 AutoHotKey

到 [AutoHotKey 官方网站](https://www.autohotkey.com/) 下载安装 AutoHotKey

![下载 AutoHotKey](/replace-windows-clipboard/zh/001-download-autohotkey.webp)

![安装 AutoHotKey](/replace-windows-clipboard/zh/002-install-autohotkey.webp)

### 第二步：自定义你的脚本

请在下面填写您的剪贴板快捷触发键，然后点击转换。

<details>

<summary>剪贴板快捷触发键在哪？</summary>

![Octoclip 设置界面](/replace-windows-clipboard/zh/003-show-clipboard-shortcut-key.webp)

</details>

<ShortcutConverter lang="zh" />

推荐你点击【一键下载生成脚本】按钮直接可下载生成好的脚本；或亦可以手动新建一个扩展名为 `ahk` 的脚本文件，并将生成脚本内容拷贝进去保存。

![下载或者保存的脚本](/replace-windows-clipboard/zh/004-save-script.webp)

接着双击运行该脚本，此时你的 `Windows` 任务栏会出现一个 `H` 的图标，这表示该脚本已经正常运行了。

![任务栏显示脚本运行状态](/replace-windows-clipboard/zh/005-script-status.webp)

这时候 `Win + v` 就替换成了你设置的剪贴板快捷触发键啦~

<details>

<summary>对应按键映射规则</summary>

| **符号** | **对应按键** | **说明**         |
|----------|--------------|------------------|
| `^`      | `Ctrl`       | Control 键       |
| `+`      | `Shift`      | Shift 键         |
| `!`      | `Alt`        | Alt 键           |
| `#`      | `Win`        | Windows 徽标键   |

</details>

### 第三步：配置脚本开机自启动（可选）

如你配置了这一步脚本就会在你的设备开机的时候默默启动，无需在手动运行。

首先按下键盘 `Win + R` 快捷键，然后再弹出的启动工具里面输入 `shell:startup` 在点击确定。

![打开开机自启动文件夹](/replace-windows-clipboard/zh/006-run-open-shell-startup.webp)

然后将上面生成的脚本复制进去即可。

![复制脚本至开机自启动文件夹](/replace-windows-clipboard/zh/007-copy-script-to-startup.webp)

这样操作完成以后下一次开机就会启动该脚本。


## 使用 PowerToys（推荐）

### 第一步：下载安装 PowerToys

你可以直接在 Windows 应用商店找到它，或者可以通过[此处](https://aka.ms/installpowertoys)下载它。

![Windows 商店安装 PowerToys](/replace-windows-clipboard/zh/008-install-powertoys.webp)

### 第二步：配置键盘管理器

安装完毕后，找到键盘管理器功能内的重映射快捷键选项。

![开启 Keyboard Manager 功能](/replace-windows-clipboard/zh/009-open-keyboard-manager.webp)

进入到配置功能界面

![配置 Keyboard Manager 映射](/replace-windows-clipboard/zh/010-configuration-keyboard-manager.webp)

1. 将 `Win + v` 作为替换键位
2. 按 `Win + v` 会触发什么键位，这里需要配置成你的剪贴板快捷触发键

<details>

<summary>剪贴板快捷触发键在哪？</summary>

![Octoclip 设置界面](/replace-windows-clipboard/zh/003-show-clipboard-shortcut-key.webp)

</details>

配置完成后，你的 `Win + v` 就替换成了你设置的剪贴板快捷触发键啦~