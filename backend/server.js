import express from "express";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";


const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../frontend/build')));


app.use("/api/users", userRoute);
app.use("/api/products",productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req,res) => {
    res.send(config.PAYPAL_CLIENT_ID);
})

// app.get("/api/products", function(req,res){
//     res.send(data.products);
// });

// app.get("/api/products/:id", function(req,res){
//     const productId = req.params.id;
//     const product = data.products.find(x => x._id === productId);
//     if(product){
//         res.send(product);
//     }
//     else{
//         res.status(404).send({message: "PRODUCT NOT FOUND."});
//     }
// });


app.listen(config.PORT || 5000, function(){
    console.log("Server started at port no. 5000");
});