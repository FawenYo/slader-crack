# slader-crack

The repo aims to crack Slader's 5 solutions limit.

## Tutorial

1. Go to [Release page](https://github.com/FawenYo/slader-crack/releases) and download the latest release.
2. Extract the zip file.
3. Go to [Chrome Extension page](chrome://extensions/) and switch on the developmer mode at the top-right.
4. Click "Load unpacked" at the top-left and choose the extracted folder.
5. All things done! Just go surfing on the Slader :+1:

## Technical Detail

### Explain

* scripts/crack.js: Bypass Slader limit by replace X-Forwarded-For value in onBeforeSendHeaders status.
![ChromeWebRequest](https://i.imgur.com/GSIynKj.png)
* scripts/footer.js: Remove payment info footer on the page.
