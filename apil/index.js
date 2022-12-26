require("dotenv").config();
const server = require("./src/app.js");
const cxn = require("./src/database/connection.js");

const PORT = process.env.PORT || process.env.AUX_PORT;

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
