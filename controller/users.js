const User = require('../models/User');

const userServices = require('../service/user')


const getUsers = async (req,res,next) =>{
    /**
     * find , filter, sort , pagination, select 
     * 
     */
    try{

        const users = await userServices.findUsers();
        return res.status(200).json(users);



    }
    catch(e){
        next()
    }

}


const getUserById = (req,res,next) =>{

}

const postUser = (req,res,next) =>{

}

const putUserById = (req,res,next) =>{

}

const patchUserById = (req,res,next) =>{

}

const deleteUserById = (req,res,next) =>{

}


module.exports = {
    
    getUsers,
    getUserById,
    postUser,
    putUserById,
    patchUserById,
    deleteUserById
}