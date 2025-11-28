const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello from EC2 via GitHub Actions!");
});

server.listen(PORT, ("0.0.0.0"), () => {
  console.log("Server running on port " + PORT);
});
