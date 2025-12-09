# Background Clipboard Monitoring

When the app is not running in the foreground, it continuously monitors changes in the system clipboard (text, images, files, etc.). Upon detecting changes, it performs clipboard history recording and cross-device synchronization.

## iOS Platform

- **Capability limitations:** The system does not support true "background continuous monitoring."  
  On iOS 14 and above, reading clipboard content in the foreground will show a “Pasted from …” notification.
- **Recommended approaches:** Read the clipboard via user-initiated or visible mechanisms, such as:
  - Reading when the app is opened  
  - Using a Share Extension for explicit sharing  
  - Triggering via push actions or Shortcuts and reading in the foreground  
  - Using widgets or Live Activities as entry points  
- **User experience suggestions:** Provide “Manual Sync / One-Tap Paste,” local encryption, and controllable clipboard history management.

---

## Android Platform

### Clipboard Monitoring in the Background on Android 10+

Due to privacy restrictions, Android 10 and above limit background access to the clipboard by default.  
The following approaches can achieve a near–background monitoring experience and capabilities such as:

- Complete clipboard history  
- Cross-device syncing (including nearby and cloud sync)

#### Method Comparison and Recommendations

| Method        | Recommendation | Target Users                       | Features                                                                 |
|---------------|----------------|------------------------------------|--------------------------------------------------------------------------|
| **Shizuku**   | ⭐⭐⭐⭐⭐         | Non-root users who want full features | No root required, but offers stability comparable to root mode          |
| **Accessibility Mode** | ⭐⭐⭐⭐ | General users                      | Simple setup, minimal configuration required                            |
| **Root**      | ⭐⭐⭐           | Advanced users with rooted devices | Highest permissions, full functionality, long-term availability after setup |

---

### 1) Shizuku

**Target Users**  

- Those who don’t want to root their device but want full-feature access.

**Advantages**  

- **High stability:** More comprehensive monitoring of copy actions; more reliable background listening.  
- **Relatively safe:** Permissions are controlled and revocable, avoiding full exposure risks.  
- **Highly flexible:** Permissions can be dynamically managed and granted on demand.

**Configuration and Setup**  

- [View detailed setup guide](./background-monitoring/Android/shizuku/index.md)

---

### 2) Accessibility Mode

**Target Users**  

- General users who prefer simple setup and use near-stock Android systems.

**Advantages**  

- **Easy to use:** Enabled directly through system settings; quick setup.  
- **Relatively safe:** Permission scope is system-limited and visible to the user.

**Configuration and Setup**  

- [View detailed setup guide](./background-monitoring/Android/accessibility/index.md)

---

### 3) Root

**Target Users**  

- Advanced users who have rooted their devices and want full system control.

**Advantages**  

- **Highest privileges:** Can bypass system restrictions and access protected resources.  
- **Stable and reliable:** Continues functioning long-term after setup.  
- **Highly compatible:** Works across different Android versions.

**Configuration and Setup**  

- [View detailed setup guide](./background-monitoring/Android/root/)

---

### Notes on Android 10 and Below

On Android 10 (Q) and earlier versions, the system provides a clipboard change callback (e.g., `ClipboardManager.OnPrimaryClipChangedListener`).  
**No configuration is needed**, and clipboard changes can be reliably detected even when the app is not in the foreground.
