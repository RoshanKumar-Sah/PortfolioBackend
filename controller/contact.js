const Contact = require("../model/Contact");

const postContact = async (req, res, next) => {
    try {
        let contact = await Contact.create({ ...req.body });
        res.send(contact);
    } catch (err) {
        next(err);
    }
};

const getContact = async (req, res, next) => {
    try {
        let contact = await Contact.find();
        return res.send(contact);
    } catch (err) {
        next(err);
    }
};


const getSingleContact = async (req, res, next) => {
    try {
        let contact = await Contact.findById(req.params.id)
        if (contact) {
            return res.send(contact)
        }

        return res.status(404).send({ msg: "Resource not found" })
    } catch (err) {
        next(err)
    }
}


const removeContact = async (req, res, next) => {
    try {
        let toBeDeleted = await Contact.findById(req.params.id)

        if (toBeDeleted) {
          let deleted = await Contact.findByIdAndDelete(req.params.id)
          return res.status(204).end()
        }
        return res.status(404).send({ msg: "Resource not found" })
    } catch (err) {
        next(err)
    }
}


module.exports = {
    postContact,
    getContact,
    getSingleContact,
    removeContact
};
