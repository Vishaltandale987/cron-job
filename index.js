const cron = require("node-cron");
const express = require("express");
const cors = require("cors");
const { cron_mailer } = require("./Mail/mailer");
const app = express();
app.use(cors());
app.use(express.json());


cron.schedule("* * * * * *", () => {
  console.log("running a task every one minutes");
  cron_mailer();
});



app.listen(8000, () => {
  console.log(`Connected with Database and live on port 8000`);
});
