const express = require("express");
const path =require('path');
const rootdir = require('./utils/pathUtil');
const ERRORCONTROLLER = require('./controllers/error');
const UserRouter = require("./routes/userRouter");
const HostRouter = require("./routes/hostRouter");
const {mongoConnect} = require('./utils/databaseUtil');
const {getDB} = require('./utils/databaseUtil');
const app = express();

app.set("view engine", "ejs");
app.set("views","views");
app.use(express.static(path.join(rootdir, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(UserRouter);
app.use("/host", HostRouter);

app.use(ERRORCONTROLLER.PAGENOTFOUND);
const PORT = 3002;

mongoConnect(() => {
  app.listen(PORT,()=>{
    console.log(`Server is running on port Http://localhost:${PORT}`);
  })
})



