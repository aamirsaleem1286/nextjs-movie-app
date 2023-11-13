const mongoose=require("mongoose")
const URL=process.env.MONGODB_URL
const mongoConnect=async()=>{
await mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
console.log("mongoose connected")

}
export default mongoConnect;
