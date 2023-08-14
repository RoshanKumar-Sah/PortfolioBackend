const objToString = require("../middleware/objToString");
const About = require("../model/About");

const postAbout = async (req, res, next) => {
  try {
    let converted = objToString(req);
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

const updateAbout = async (req, res, next) => {
  try {
    let toBeUpdated = await About.findById(req.params.id);
    if (toBeUpdated) {
      let converted = objToString(req);
      let updated = await About.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          programming: [...converted[0]],
          language: [...converted[1]],
          education: [...converted[2]],
          experience: [...converted[3]],
          training: [...converted[4]],
        },
        { new: true }
      );
      return res.send(updated);
    }
    return res.status(404).send({ msg: "Resource not found" });
  } catch (err) {
    next(err);
  }
};

const getAbout = async (req, res, next) => {
  try {
    let about = await About.find();
    res.send(about);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postAbout,
  updateAbout,
  getAbout,
};
