const User = require('../../models/User')

const UserController = {

    async createUse(req,res){
        const bodyData = req.body

        try{
            const newUser = await User.create(bodyData)
            return res.status(200).json(newUser)
        } 
        catch(err){
            return res.status(400).json(err)
        }
    },

    async getUser(req,res){

        try{
            const users = await User.find()
            return res.status(200).json(users)
        } 
        catch(err){
            return res.status(400).json(err)
        }

    },

    async getUserById(req,res){
        const{ user_id } = req.params
        try{
            const users = await User.findById(user_id)
            return res.status(200).json(users)
        } 
        catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports  = UserController