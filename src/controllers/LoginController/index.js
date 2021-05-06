const User = require('../../models/User')

const LoginController ={
    async createSession(req,res){
        const{ username } = req.body
        try{
            const users = await User.findOne({username})
            return res.status(200).json(users)
        } 
        catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports  = LoginController