import mongoose,{Schema} from "mongoose";

const videoSchema = new Schema({
videoFile : {
    type : String,
    required : true
},
title : {
    type : String,//claudinary url
    required : true
},
thumbNail : {
    type : String,
    required : true
},
description : {
    type : String,
    required : true
},
duration : {
    type : Number,
    required : true
},
views : {
    type : Number,
    default : 0
},
isPublish : {
    type : Boolean,
    default : 0
},
owner : {
    type : Schema.Types.ObjectId,
    ref : "User"
}
},{timestamps : true})

export const video = mongoose.model("Video",videoSchema)