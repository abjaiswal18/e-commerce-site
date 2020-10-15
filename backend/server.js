import express from "express";
import data from "./data";

const app = express();

app.get("/api/products", function(req,res){
    res.send(data.products);
});

app.listen(5000, function(){
    console.log("Server started at port no. 5000");
});
