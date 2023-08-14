
const Testimonial = require("../model/Testimonial");
const { uploadImage, destroyImage } = require('../middleware/imageHandling');




const postTestimonial = async (req, res, next) => {
    try {
        let imageURL = " ";
        if (req?.files?.image) {

            let localPath = "public/testimonials/"
            let destinationPath = "Portfolio/Testimonial"

            imageURL = await uploadImage(req, localPath, destinationPath)
        }

        const testimonial = await Testimonial.create({ ...req.body, profileImage: imageURL })

        res.send(testimonial)

    } catch (err) {
        // console.log(err);
        next(err)

    }
}



const updateTestimonial = async(req,res,next)=>{

try{

    // console.log(req.params.id);
const toBeUpdated = await Testimonial.findById(req.params.id);

let imageURL = " "

if(toBeUpdated){

// console.log(toBeUpdated);
    if(!req?.body?.image){
        const pattern = /(Portfolio[^.]+)/;
const toBeDeleted = toBeUpdated.profileImage
        const destroy = await destroyImage(toBeDeleted, pattern)


    }else{
        imageURL = toBeUpdated.profileImage
    }

   
    if (req?.files?.image) {

        if(toBeUpdated.profileImage){
            
            const pattern = /(Portfolio[^.]+)/;
            
            const toBeDeleted = toBeUpdated.profileImage
            const destroy = await destroyImage(toBeDeleted, pattern)
            
        }

        let localPath = "public/testimonials/"
        let destinationPath = "Portfolio/Testimonial"
        
        imageURL = await uploadImage(req, localPath, destinationPath)
    }

    // console.log(profileImageURL);

const updated = await Testimonial.findByIdAndUpdate(req.params.id, {...req.body, profileImage: imageURL}, {new: true})

return res.send(updated)

}

return res.status(404).send({ msg: "Resource not found" })
}catch(err){
next(err)
}

}




const getTestimonials = async(req,res,next)=>{
    try{
let testimonials = await Testimonial.find()
res.send(testimonials)
    }catch(err){
        next(err)
    }
}



const removeTestimonial = async(req,res,next) => {
    try{
        let toBeRemoved = await Testimonial.findById(req.params.id)
        if(toBeRemoved){

            if(toBeRemoved.profileImage){
            
                const pattern = /(Portfolio[^.]+)/;
                
                const toBeDeleted = toBeRemoved.profileImage
                const destroy = await destroyImage(toBeDeleted, pattern)
                
            }

            let deleted = await Testimonial.findByIdAndDelete(req.params.id)

            return res.status(204).end()

        }

        return res.status(404).send({msg: "Resource not found"})

    }catch(err){
        next(err)
    }
}



module.exports = { postTestimonial, updateTestimonial, getTestimonials, removeTestimonial }