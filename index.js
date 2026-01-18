import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const SHARE_API = "https://vern-rest-api.vercel.app/api/share";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/tools/share", async (req, res) => {
try {
const { cookie, link, limit } = req.query;

if (!cookie || !link || !limit) { return res.status(400).json({ status: "error", message: "Missing required parameters", required: ["cookie", "link", "limit"] }); } const apiURL = `${SHARE_API}?` + new URLSearchParams({ cookie, link, limit }).toString(); const start = Date.now(); const response = await fetch(apiURL, { method: "GET", headers: { "User-Agent": "Mozilla/5.0", "Accept": "application/json" } }); const data = await response.json(); res.json({ success: true, proxy: "vern-rest-api", responseTime: `${Date.now() - start}ms`, data }); 

} catch (err) {
res.status(500).json({
success: false,
message: err.message
});
}
});

import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const SHARE_API = "https://vern-rest-api.vercel.app/api/share";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/tools/share", async (req, res) => {
try {
const { cookie, link, limit } = req.query;

if (!cookie || !link || !limit) { return res.status(400).json({ status: "error", message: "Missing required parameters", required: ["cookie", "link", "limit"] }); } const apiURL = `${SHARE_API}?` + new URLSearchParams({ cookie, link, limit }).toString(); const start = Date.now(); const response = await fetch(apiURL, { method: "GET", headers: { "User-Agent": "Mozilla/5.0", "Accept": "application/json" } }); const data = await response.json(); res.json({ success: true, proxy: "vern-rest-api", responseTime: `${Date.now() - start}ms`, data }); 

} catch (err) {
res.status(500).json({
success: false,
message: err.message
});
}
});

app.listen(PORT, () => {
  console.log(`🍪 FB - SHARE BOOST running at http://localhost:${PORT}`);
});
