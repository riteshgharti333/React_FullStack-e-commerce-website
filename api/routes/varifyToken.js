const jwt = require("jsonwebtoken")


const varifyToken = (req , res , next) => {
    const authHeader = req.headers.token;

    if(authHeader){

        const token = authHeader.split(" ")[1]
        jwt.verify(token , process.env.JWT_SECRET , (err , user) => {
            if(err) res.status(403).json("Token is not valid");
            req.user = user;
            next();

        } )
    }else{
        return res.status(401).json("You are not uthenticated")
    }
};


const varifyTokenAndAuthorixation = (req , res , next) => {
    varifyToken(req , res , () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not alowed to do tha !")
        }
    });
};

const varifyTokenAndAdmin = (req , res , next) => {
    varifyToken(req , res , () => {
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not alowed to do that !")
        }
    });
};


module.exports = {varifyToken , varifyTokenAndAuthorixation , varifyTokenAndAdmin}