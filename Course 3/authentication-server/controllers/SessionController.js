let User = require("../models/UserModel")
let bcrypt = require("bcryptjs")
let jwt = require("jsonwebtoken")

function create(req, response, next) {
    let {username,password} = req.body
    User.findOne({username:username},(err,user)=>{
        if(user && bcrypt.compareSync(password, user.password)){
            let token = jwt.sign({id: user._id}, "token")
            return response.json({token: token})
        }else{
            return response.send("User created");
        }
    })
}

exports.create = create;
