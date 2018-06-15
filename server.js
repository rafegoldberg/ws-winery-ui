const dist = "/dist",
  docs = "/docs",
  port = process.env.PORT || 5000;

let app = require("express"),
  exp = exp();

app.use("/", exp.static(__dirname + dist));
app.use("/docs", exp.static(__dirname + docs));

app.listen(port);

console.log(`Spooling the server in ${dist} on :${port}...`);
console.log(`Visit http://localhost:${port} to view your project.`);
