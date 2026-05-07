
import User from "../modal/user.modal.js"
import bcrypt from 'bcryptjs'

 export const signUp=async(req,res)=>{
try{
const {fullname,email,password}=req.body;
const user= await User.findOne({email})
if(user){
 return res.status(401).json({message:"user alredy exists"})
}
const hashpassword=await bcrypt.hash(password,10)
const createUser= await User.create({
fullname,
email,
password:hashpassword
})
 return res.status(200).json({message:"user create succesfully",user:createUser})
}catch(error){
console.log("error"+error.message )
res.status(500).json({message:"internel server"})
}

}

export const login=async (req,res)=>{
try{
const {email,password}=req.body
const user= await User.findOne({email})
if(!user){
return res.status(401).json({message:"invalid email"})
}
const ismatch= await bcrypt.compare(password,user.password)
if(!ismatch){
return res.status(401).json({message:"invalid password"})
}
res.status(201).json({message:"login successfully",
user:{
_id:user._id,
name:user.name,
email:user.email,
}
})
}catch(err){
res.status(500).json({err,message:"internal server"})
}

}