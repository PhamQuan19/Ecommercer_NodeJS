const User=require('../models/userModel');


const createUser= async(req, res) =>{
    const email=req.body.email;
    const findUser=await User.findOne(email);
    if(!findUser){
        //Tao 1 User moi
        const newUser=User.create(req.body);
        res.json(newUser);
    }else{
        //User đã tồn tại
        res.json({
            msg:"User Already Exists!",
            success:false,
        });
    }
};

module.exports={createUser};