const express = require("express");
const path = require("path");

const UserRouter = require("./routes/userRouter");

const HostRouter = require("./routes/hostRouter");

const rootDir = require("./utils/pathUtil"); 
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(UserRouter);
app.use("/host", HostRouter);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(rootDir, "views", "404NOTFOUND.html"));
});
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
