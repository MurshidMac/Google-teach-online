const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// app.get('/', (req, res) => res.send('Hello World!'))

// viewed at http://localhost:8080
app.use("/js", express.static(__dirname + "/js"));
app.use("/vendor", express.static(__dirname + "/vendor"));
app.use("/auth", express.static(__dirname + "/auth"));
app.use("/main", express.static(__dirname + "/main"));
app.use("/config", express.static(__dirname + "/config"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/term", express.static(__dirname + "/term"));

app.get("/", function(req, res) {
  res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=;SameSite=None");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
