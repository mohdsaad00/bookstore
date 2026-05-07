import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookies from 'cookie-parser'
const app = express();
import cors from 'cors'
dotenv.config();
const PORT=process.env.PORT ||4000;
const URI=process.env.mongoDBURI;
import bookRoute from "./router/book.router.js";
import userRoute from "./router/user.router.js"
// import Book from "./modal/book.modal.js"
app.use(express.json())
app.use(cors())
app.use(cookies())

//connect mongodb


 const connectToDB= async()=>{
try{
 await mongoose.connect(URI)
console.log("connect to mongodb",mongoose.connection.name)

}catch(error){
console.log("error",error)
}
 }

connectToDB();



// define route
app.use("/book", bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
 