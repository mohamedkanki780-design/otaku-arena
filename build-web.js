// ينسخ ملفات الموقع إلى مجلد www الذي يقرأه Capacitor
const fs = require("fs");
const path = require("path");
const files = ["index.html", "privacy.html", "manifest.webmanifest", "sw.js", "icons"];
fs.rmSync("www", { recursive: true, force: true });
fs.mkdirSync("www", { recursive: true });
for (const f of files) fs.cpSync(f, path.join("www", f), { recursive: true });
console.log("www ready");
