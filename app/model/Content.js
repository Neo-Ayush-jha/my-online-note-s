import mongoose from "mongoose"
import Topic from "./Topic"
import User from "./User"
const ContentSchema = new mongoose.Schema(
    {
        topic_id: {
            type: mongoose.Schema.Types.ObjectId, ref: "Topic"
        },
        author: {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        },
        content_title: {
            type: String,
            required: true
        },
        content_text: {
            type: String,
            required: true
        },
        view: {
            type: Number,
            default: false
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.models.Content || mongoose.model("Content", ContentSchema)