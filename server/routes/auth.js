import express from 'express';
import User from '../models/User.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'



const router = express.Router();

router.post('/register', async (req, res) => {
   try{
      const {name, email, password} = req.body;
      const user=await User.findOne({email})
      if(user){
        return res.status(401).json({success: false, message: 'User already exists'})
      }
      const hashPassword = await bcrypt.hash(password, 12)

      const newUser = new User({
          name,
          email,
          password: hashPassword
      })

      await newUser.save()

      return res.status(200).json({success: true, message: 'Account created successfully'})
   }

   catch(error){
       console.log(error)
       return res.status(500).json({success: false, message: 'Error in adding User'})
   }
})


router.post('/login', async (req, res) => {
  try{
     const { email, password} = req.body;
     const user=await User.findOne({email})
     if(!user){
       return res.status(401).json({success: false, message: 'User Not exists'})
     }
     
     const checkPassword = await bcrypt.compare(password, user.password)
      if(!checkPassword){
        return res.status(401).json({success: false, message: 'Invalid Credentials'})
      }
     const token = jwt.sign({id: user._id},"secretofnoteapp123@#",{expiresIn: '5h'})
    

     return res.status(200).json({success: true, token, user:{name:user.name},   message: 'Login successfully'})
  }

  catch(error){
      
      return res.status(500).json({success: false, message: 'Error in Login server'})
  }
})


export default router;