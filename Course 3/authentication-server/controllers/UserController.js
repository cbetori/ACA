let bcrypt = require("bcryptjs")
let User = require("../models/UserModel")

function create(req, response) {
    let {username,password} = req.body
    User.findOne({username:username},(err,user)=>{
        if(user){
             response.send("Username already exists")
        }else{
            bcrypt.hash(password, 10,(err, hash)=>{
                let user = new User({ username: username, password:hash})
                user.save(()=>response.send("User created"));
            })
        }
    })
}
  
exports.create = create;
