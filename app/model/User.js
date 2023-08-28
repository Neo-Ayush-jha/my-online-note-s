import mongoose from "mongoose"
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            minlength: 6,
            trim: true
        },
        contact: {
            type: String,
        },
        isVerfied: {
            type: Boolean,
            default: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        forgetPasswordToken: {
            type: String
        },
        forgetPasswordTokenExpiry:{
            type:Date
        },
        verifyToken:{
            type:String
        },
        verifyTokenExpiry:{
            type:Date
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.models.User || mongoose.model("User", UserSchema)