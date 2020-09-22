const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const route= require("./router/route")
require("dotenv").config()

const app=express()

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGODB_URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},(error)=>{
    if(error) throw error();
    console.log("connectd")
});
app.use('/api/user',route)

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})