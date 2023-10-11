const express = require('express');
const cors = require('cors')
const app = express();
const port = 1128; // You can choose any available port
const userRoutes = require("./router/user.routes.js")
const adminRoutes = require("./router/admin.router.js")
require("./database/index.js")
app.use(express.json());
app.use(cors())
// Define a route


app.use("/users", userRoutes)
app.use("/admin", adminRoutes)
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
