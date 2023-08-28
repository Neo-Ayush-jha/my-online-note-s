import mongoose from "mongoose"


const TopicSchema = new mongoose.Schema({
    topic_title:{
        type : String,
        required : true
    },
    description:{
        type :String,
        required :true
    }
},{ timestamps: true })

export default mongoose.models.Topic || mongoose.model("Topic",TopicSchema)