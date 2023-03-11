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

    //image

    comments:[{
        type:Schema.Types.ObjectId,
        ref:"comments",
    }],

    creatorId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },

    createdAt:{
        type: Date,

        default:new Date().getFullYear()+"/"+new Date().getMonth()+"/"+new Date().getDay()+"/"+new Date().getHours()+"/"+new Date().getMinutes(),
    }
})

const Post=model("posts",postSchema);

module.exports=Post;