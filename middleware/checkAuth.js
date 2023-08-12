let jwt = require("jsonwebtoken")


const checkAuthentication = (key) =>{
    return(req,res,next) =>{

       if(req.headers.authorization){
        let token = req.headers.authorization.split(" ")[1]
       
        if(token){

            try{
                let decoded = jwt.verify(token, key);
                  req.user = decoded
                //   console.log(req.user);
                  return(next())
            }catch(err){

            }
        }
       }

      return res.status(401).send({ msg: "unauthenticated" })

    }
}


module.exports = checkAuthentication