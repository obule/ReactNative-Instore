import express from "express";

import middlewareConfig from "./config/middleware";
import "./config/db";
import { CustomerRoutes } from "./modules";

const app = express();

middlewareConfig(app);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/customers", CustomerRoutes);

app.listen(4500, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listen on port 4500");
  }
});
