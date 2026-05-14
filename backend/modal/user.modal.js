import mongoose, { model } from "mongoose";

  const userSchema= new mongoose.Schema({
fullname:{
type:String,
required:true
},
email:{
type:String,
required:true,
unique:true
},
password:{
type:String,
required:true
}
});
const User= model("user",userSchema)

export default User;