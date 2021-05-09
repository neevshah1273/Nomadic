import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import user from '../models/user.js';

export const signin = async (req,res) => {
    const {email, password} = req.body;

    try {
        //console.log('galat jagah');
        const existingUser = await user.findOne({email});

        if(!existingUser) return res.status(404).json({message: 'User does not exists'});

        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message: 'Invalid Password '});

        
        const token = jwt.sign({ email: result.email, id: result._id}, 'test',{expiresIn : "1h"});

        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: 'Something Went Wrong'});
    }
}

export const signup = async (req,res) => {
    const {username, email, password} = req.body;

    try {
        const existingUser = await user.findOne({email});

        if(existingUser) return res.status(400).json({message: 'User already exists'});

        const hashedPassword = await bcrypt.hash(password,12);

        const result = await user.create({username, email, password : hashedPassword});

        const token = jwt.sign({ email: result.email, id: result._id}, 'test',{expiresIn : "1h"});

        res.status(200).json({result, token});
    } catch (error) {
        res.status(500).json({message: 'Something Went Wrong'});
    }
}