(()=>{"use strict";var e={147:e=>{e.exports=require("fs")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}(()=>{t.n=e=>{var o=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(o,{a:o}),o}})(),(()=>{t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}})(),(()=>{t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o)})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})();var n={};(()=>{t.r(n);const e=require("electron"),o=require("path");var r=t.n(o);const i=require("os");var a=t.n(i);const l=process.platform||a().platform();try{"win32"===l&&!0===e.nativeTheme.shouldUseDarkColors&&t(147).unlinkSync(r().join(e.app.getPath("userData"),"DevTools Extensions"))}catch(p){}let s;function d(){s=new e.BrowserWindow({icon:r().resolve(__dirname,"icons/icon.png"),width:1e3,minWidth:1e3,height:600,minHeight:600,useContentSize:!0,titleBarStyle:"hidden",trafficLightPosition:{x:10,y:15},backgroundColor:"#35363a",webPreferences:{contextIsolation:!0,nodeIntegration:!0,preload:r().resolve(__dirname,"electron-preload.js")}}),s.loadURL("file://"+__dirname+"/index.html"),s.webContents.on("devtools-opened",(()=>{s.webContents.closeDevTools()})),s.on("closed",(()=>{s=null}))}e.app.whenReady().then(d),e.app.on("window-all-closed",(()=>{"darwin"!==l&&e.app.quit()})),e.app.on("activate",(()=>{null===s&&d()}))})(),module.exports=n})();