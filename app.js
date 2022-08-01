const exp = require("express")
const mongoose = require("mongoose");
const bodyParser= require("body-parser");

const app= exp();
const port=2001;
var uri = "mongodb://localhost:27017/bengkel";

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once("open", function() {
console.log("MongoDB database connection established successfully");
});

const prdkRouter=require("./router/prdkRouter")
//const pgwRouter=require("./router/pgwRouter")
//const plnggnRouter=require("./router/plnggnRouter")


app.use(bodyParser.json())

app.use("/prdk",prdkRouter)


app.listen(port,function(){
    console.log("App Is Running on Port "+port);
})