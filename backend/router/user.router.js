import express from 'express'
import{signUp,login}  from '../controler/user.controler.js'

const router= express.Router()
router.post("/signup",signUp)
router.post("/login",login)

export default router
