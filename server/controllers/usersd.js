import user from '../models/user.js';

export const getUsers = async (req,res) => {

     
    
    const username = req.params.username;
    try {
        
        const existingUser = await user.findOne({username});
        console.log(existingUser);
        if(!existingUser){
           res.status(404).json({message: 'User Unavilable'});
        }
        else{
            res.status(200).json({result: existingUser});
        }
            
    } catch (error) {
        res.status(500).json({message: 'Something Went Wrong'});        
    }
}