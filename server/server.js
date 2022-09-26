// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const composerModel = require("./models/composer");
//
// app.use(express.json());
//
// mongoose.connect("mongodb+srv://lucas:lucas11111111@cluster0.rfig5dg.mongodb.net/?retryWrites=true&w=majority",{
//     useNewUrlParser:true,
// });
//
// app.get("/",async (req,res)=>{
//     const composer = new composerModel({
//         composerName:"Kate", daysSinceJoined:4
//     });
//     try {
//         await composer.save();
//         res.send("Data inserted");
//     } catch (err){
//         console.log(err);
//     }
// });
//
// app.listen(3001, ()=>{
//     console.log("Server running on port 3001...");
// });


const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const app = express()

// app.get('/api/composer',(req, res)=>{
//     res.status(200).json({message: 'Get composer'})
// })

app.use('/api/composer', require('./routes/composerRoutes'))

app.listen(port, ()=>console.log(`Server started on port ${port}`))