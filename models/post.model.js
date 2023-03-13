const {Schema ,Types , model}=require("mongoose");

const postSchema=new Schema({
    title:{
        type:String,
        required:true,
    },

    mainNews:{
        type:String,
        required:true,
    },

    imageUrls:[{
        type:String,
    }],

    comments:[{
        type:Schema.Types.ObjectId,
        ref:"comments",
    }],

    creatorId:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },

    createdAt:{
        type: Date,
        
        default:Date.now(),

        // default:new Date().getFullYear()+"/"+new Date().getMonth()+"/"+new Date().getDay()+"/"+new Date().getHours()+"/"+new Date().getMinutes(),
    }
})

const Post=model("posts",postSchema);

module.exports=Post;