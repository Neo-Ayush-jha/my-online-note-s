import mongoose from "mongoose"
const Connect=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/onlineStudy")
        }catch(e){
            throw new Error("Database is not connected")
        }
}
export default Connect