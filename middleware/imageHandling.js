const cloudinary = require('../utils/cloudinary')
const path = require("path")
const fs = require("fs");

const uploadImage = async (req, localPath, destinationPath) => {


    let imageURL = " "
    const newFilename = Date.now() + '-' + Math.round(Math.random() * 1E9);

    req.files.image.mv(path.join(__dirname, `../${localPath}`) + newFilename);

    const cloudinaryResponse = await cloudinary.uploader.upload(path.join(__dirname, `../${localPath}` + newFilename), {
        folder: destinationPath, // Optional: specify a folder in Cloudinary
        public_id: newFilename // Optional: provide a unique public_id
    });
    imageURL = cloudinaryResponse.secure_url;
    fs.unlinkSync(path.resolve(localPath, newFilename))

    return imageURL;
}




const destroyImage = async(toBeDeleted, pattern) =>{
    
    // console.log(pattern);
    
            const match = toBeDeleted.match(pattern);
            // console.log(match);
            if (match) {
                public_id = match[0];
                // console.log(public_id);
               let removeImage = await cloudinary.uploader.destroy(public_id)
               return removeImage;
            }
}


module.exports = {uploadImage, destroyImage}