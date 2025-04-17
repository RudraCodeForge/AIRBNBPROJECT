const express = require('express');


const UserRouter =require('./routes/userRouter');
const HostRouter =require('./routes/hostRouter');

const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res, next) => {
  res.send(`
    <h1>WELCOME TO AIRBNB PROJECT</h1>
    <a href="/host/add-home">ADD HOME</a>`);
});

app.use(UserRouter);
app.use("/host",HostRouter);

app.use((req, res, next)=>{
    res.status(404).send(`<h1>PAGE NOT FOUND</h1>`);
})
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});