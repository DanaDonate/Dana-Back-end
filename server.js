const express = require("express");
require("dotenv").config();
require("./config/mongoose").connectFun();
const cors = require("cors");
const app = express();

const port = process.env.port || 4000;
// set views file direct accessing
app.set("view engine", "ejs");
app.set("views", "./views");

// cors platform setting
app.use(
  cors({
    origin: process.env.origin,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

// donating from
// app.post('/donate',(req,res)=>{

// })

// Create server
app.listen(port, (err) => {
  try {
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    console.log(err);
    return;
  }
});
