import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utill/error.js';
export const test = (req, res) => {
    res.json({
        message : 'Hello !!!'
    })
};
export const updateUser = async (req,res,next)=>{
    if(req.user.id !== req.user.id) return next(errorHandler(401,"you are not authenticated"))
    try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const updateduser = await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username : req.body.username,
                email:req.body.email,
                avatar:req.body.avatar,
            }
        },{new: true});
        const {password,...rest} = updateduser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}
export const deleteUser = async (req, res, next) => {
        if (req.user.id !== req.params.id) return next(errorHandler(401, 'You are not authorized'));
    try {
        await User.findByIdAndDelete(req.params.id); // Corrected to findByIdAndDelete
        res.status(200).json({ message: 'User has been deleted!!' }); // Corrected response
    } catch (error) {
        next(error);
    }
}

