const About = require("../model/About");

const postAbout = async (req, res, next) => {
    try {
        let programming = req.body.programming;
        let language = req.body.language;
        let education = req.body.education;
        let experience = req.body.experience;
        let training = req.body.training;

        // let finalProgramming = []
        // // let temp = []
        // programming.forEach(element => {
        //     finalProgramming.push(JSON.stringify(element))
        // });

        function ObjTOString(arr) {
            let temp = [];
            arr.forEach((element) => {
                temp.push(JSON.stringify(element));
            });
            return temp;
        }

        let toBeConverted = [
            programming,
            language,
            education,
            experience,
            training,
        ];

        let converted = toBeConverted.map((el) => {
            return ObjTOString(el);
        });
        // console.log("converted", converted);

        // finalInterest.forEach(fElement => {
        //     temp.push(JSON.parse(fElement))
        // })

        // console.log(programming);
        // console.log(finalProgramming);
        // console.log(temp);

        let aboutCreated = await About.create({
            ...req.body,
            programming: [...converted[0]],
            language: [...converted[1]],
            education: [...converted[2]],
            experience: [...converted[3]],
            training: [...converted[4]],
        });

        return res.send(aboutCreated);
    } catch (err) {
        next(err);
    }
};

const updateAbout = async(req, res, next) =>{


    try{
        // console.log(req.params.id);
    
        let toBeUpdated = await About.findById(req.params.id)

        if(toBeUpdated){
           return res.send("updated")
        }

        return res.status(404).send({msg:"Resource not found"})


        // console.log(toBeUpdated);
    
        
    }catch(err){
        next(err)
    }


}

module.exports = {
    postAbout,
    updateAbout
};
