const cloudinary = require('../utils/cloudinary')
const path = require("path")
const fs = require("fs");
const Testimonial = require("../model/Testimonial")




const postTestimonial = async (req, res, next) => {
    try {
        let profileImageURL = " "
        if (req?.files?.profileImage) {

            const newFilename = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(req.files.profileImage.name);

            req.files.profileImage.mv(path.join(__dirname, "../public/testimonials/") + newFilename);

            const cloudinaryResponse = await cloudinary.uploader.upload(path.join(__dirname, "../public/testimonials/" + newFilename), {
                folder: 'Portfolio/Testimonial', // Optional: specify a folder in Cloudinary
                public_id: newFilename // Optional: provide a unique public_id
            });
            profileImageURL = cloudinaryResponse.secure_url;

            fs.unlinkSync(path.resolve("public/testimonials/", newFilename))
        }

        const testimonial = await Testimonial.create({ ...req.body, profileImage: profileImageURL })

        res.send(testimonial)

    } catch (err) {
        // console.log(err);
        next(err)

    }
}



const updateTestimonial = (req,res,next)=>{

try{
console.log("connected update");
}catch(err){

}

}


module.exports = { postTestimonial, updateTestimonial }