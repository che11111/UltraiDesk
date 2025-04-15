import { app as n, BrowserWindow as t, Menu as a } from "electron";
import { fileURLToPath as c } from "node:url";
import o from "node:path";
const i = o.dirname(c(import.meta.url));
process.env.APP_ROOT = o.join(i, "..");
const s = process.env.VITE_DEV_SERVER_URL, _ = o.join(process.env.APP_ROOT, "dist-electron"), r = o.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = s ? o.join(process.env.APP_ROOT, "public") : r;
let e;
function l() {
  e = new t({
    icon: o.join(process.env.VITE_PUBLIC, "assets/ultraidesk-logo.svg"),
    webPreferences: {
      preload: o.join(i, "preload.mjs"),
      webviewTag: !0,
      nodeIntegration: !0,
      contextIsolation: !1
    }
  }), a.setApplicationMenu(null), e.webContents.on("did-finish-load", () => {
    e == null || e.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), s ? e.loadURL(s) : e.loadFile(o.join(r, "index.html"));
}
n.on("window-all-closed", () => {
  process.platform !== "darwin" && (n.quit(), e = null);
});
n.on("activate", () => {
  t.getAllWindows().length === 0 && l();
});
n.whenReady().then(l);
export {
  _ as MAIN_DIST,
  r as RENDERER_DIST,
  s as VITE_DEV_SERVER_URL
};
