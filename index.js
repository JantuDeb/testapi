import express from "express";
import { connect } from "./config/databaseConfig.js";
const app = express();
connect();

app.use(express.json());
// localhost:4000/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

import noteRoute from "./route/note.route.js";
import userRoute from "./route/user.route.js";
app.use("/api", noteRoute);
app.use("/api", userRoute);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
