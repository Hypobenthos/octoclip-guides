---
title: Replacing Windows Clipboard Manager with Octoclip
---

# {{ $frontmatter.title }}

---

::: warning
This operation is only applicable to Windows operating systems.
:::

# Table of Contents

[[toc]]


## Using AutoHotKey

### Step 1: Download and Install AutoHotKey

Go to the [AutoHotKey official website](https://www.autohotkey.com/) to download and install AutoHotKey

![Download AutoHotKey](/replace-windows-clipboard/en/001-download-autohotkey.webp)

![Install AutoHotKey](/replace-windows-clipboard/en/002-install-autohotkey.webp)

### Step 2: Customize Your Script

Please fill in your clipboard shortcut trigger key below, then click convert.

<details>

<summary>Where is the clipboard shortcut trigger key?</summary>

![Octoclip Settings Interface](/replace-windows-clipboard/en/003-show-clipboard-shortcut-key.webp)

</details>

<ShortcutConverter lang="en" />

We recommend clicking the [Download Generated Script] button to directly download the generated script; or you can manually create a script file with the extension `.ahk` and copy the generated script content into it to save.

![Download or Save Script](/replace-windows-clipboard/en/004-save-script.webp)

Then double-click to run the script. At this point, an `H` icon will appear in your Windows taskbar, indicating that the script is running normally.

![Taskbar Showing Script Status](/replace-windows-clipboard/en/005-script-status.webp)

Now `Win + v` has been replaced with your set clipboard shortcut trigger key~

<details>

<summary>Corresponding Key Mapping Rules</summary>

| **Symbol** | **Corresponding Key** | **Description**         |
|------------|------------------------|-------------------------|
| `^`        | `Ctrl`                 | Control key             |
| `+`        | `Shift`                | Shift key               |
| `!`        | `Alt`                  | Alt key                 |
| `#`        | `Win`                  | Windows logo key        |

</details>

### Step 3: Configure Script Auto-start on Boot (Optional)

If you configure this step, the script will automatically start silently when your device boots up, without needing to manually run it.

First press the `Win + R` keyboard shortcut, then type `shell:startup` in the startup tool that appears and click OK.

![Open Startup Folder](/replace-windows-clipboard/en/006-run-open-shell-startup.webp)

Then copy the generated script into this folder.

![Copy Script to Startup Folder](/replace-windows-clipboard/en/007-copy-script-to-startup.webp)

After completing these operations, the script will start automatically on the next boot.


## Using PowerToys (Recommended)

### Step 1: Download and Install PowerToys

You can find it directly in the Windows Store, or download it from [here](https://aka.ms/installpowertoys).

![Install PowerToys from Windows Store](/replace-windows-clipboard/en/008-install-powertoys.webp)

### Step 2: Configure Keyboard Manager Remap Function

After installation, find the keyboard shortcut mapping option in the Keyboard Manager feature.

![Enable Keyboard Manager Feature](/replace-windows-clipboard/en/009-open-keyboard-manager.webp)

Enter the configuration interface

![Configure Keyboard Manager Mapping](/replace-windows-clipboard/en/010-configuration-keyboard-manager.webp)

1. Set `Win + v` as the remap key
2. What key combination will be triggered by `Win + v` - here you need to configure it to your clipboard shortcut trigger key

<details>

<summary>Where is the clipboard shortcut trigger key?</summary>

![Octoclip Settings Interface](/replace-windows-clipboard/en/003-show-clipboard-shortcut-key.webp)

</details>

After configuration, your `Win + v` will be replaced with your set clipboard shortcut trigger key~