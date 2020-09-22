const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
       
    amount:{
       type: String,
       required:true,
    },
    currency:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    card:{
        number:{
            type:String,
        },
        expirationmonth:{
            type:String,
        },
        expirationyear:{
            type:String,
        },
        cvv:{
            type:String,
        },
    }
})
module.exports=User=mongoose.model("user",userSchema);