# Enabling Background Clipboard Monitoring (Shizuku)

This guide explains how to enable **background clipboard monitoring** in **Octoclip** using **Shizuku authorization**, without requiring root access.  
The setup process is straightforward and can be completed entirely within the app using on‑screen guidance.

## One‑Click Configuration

Navigate to **Octoclip → More → Source → Clipboard → Choose Authorization Method**.  
The system will automatically redirect you to the **Choose Authorization Method** screen.  

Select **Authorize via Shizuku** to begin the authorization process.  

![entry_shizuku](./entry-shizuku.jpg)

---

Follow the in‑app prompts to complete the following steps:

1. **Install or Update Shizuku**  

2. **Activate the Shizuku Service**  

3. **Grant the Required Permissions**  
   - Notification  
   - Battery Optimization  
   - Grant Shizuku Permission  
   - Grant App permissions

   ![Grant Permissions](./grant-permissions.jpg)

4. After completing all authorizations, tap **Doen** to activate clipboard monitoring.

5. Turn on the **Background Monitoring** switch to enable continuous clipboard tracking.  

   ![Enable Monitor](./enable-monitor-shizuku.jpg)

## Function Verification

1. Return to the **Octoclip** main screen;  
2. Copy any text in another application;  
3. Re‑enter Octoclip and verify whether the clipboard content is automatically captured.  

If the monitoring status shows **Active**, the configuration has been successfully completed.

## FAQ

**Q: Clipboard content is still not being captured after authorization.**  
Please confirm that after enabling background monitoring, the system displayed a **log authorization prompt**,  
and that you selected **Allow once** when prompted.  
If no authorization dialog appeared or permissions were not correctly granted, try the following steps:

1. Restart the device;  
2. Open Octoclip;  
3. Re‑run the authorization process.  

![Log Grant](./log-grant.jpg)

---

**Q: Do I need to reauthorize after each device restart?**  
After restarting your device, you do **not** need to reactivate the Shizuku service.  
However, you must reopen Octoclip and grant **log access permission** again to ensure monitoring operates properly.

## Conclusion

After completing the above steps, **Octoclip** will operate stably under **Shizuku authorization mode**,  
providing high‑reliability background clipboard monitoring and seamless synchronization,  
with performance and compatibility comparable to system‑level operation.
