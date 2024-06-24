
import { Request, Response } from 'express';
import User from '../models/User';
import { error } from 'console';

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const {email, password} = req.body; 
    try {
      if (!email || !password){
        res.status(400).json({message: "Please enter username and password"});
      }
      const userAvailable = await User.findOne({ email });
      if (userAvailable && userAvailable.password === password){
          res.status(200).json({message:"User logged in"})
      }
      else{
        res.status(400).json({message: "User not found"});
      }
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
  }
  };

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { name , age , email , password } = req.body;
    try {
      if (!name || !age || !email || !password ){
        res.status(400).json({message: "Enter all the data correctly"});
      }
      const user = new User(req.body);
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
  };