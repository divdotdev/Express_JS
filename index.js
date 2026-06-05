let express=require("express");
// console.log(express);
let app=express();
// console.log(x);

app.get("/",(req,res)=>{
    console.log("Server Side");
    res.send("Client Side");
})

app.get("/payment",(req,res)=>{
    console.log("Payment Server Side");
    res.send("Payment Hogyaaaaa Yayyyyy");
})

app.listen(3000);