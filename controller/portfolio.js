const { uploadImage, destroyImage } = require("../middleware/imageHandling");
const Portfolio = require("../model/Portfolio");

const postPortfolio = async (req, res, next) => {
    try {
        let imageURL = " ";
        if (req?.files?.image) {
            let localPath = "public/portfolio/";
            let destinationPath = "Portfolio/PortfolioHero";
            imageURL = await uploadImage(req, localPath, destinationPath);
        }
        let portfolio = await Portfolio.create({ ...req.body, image: imageURL });
        res.send(portfolio);
    } catch (err) {
        next(err);
    }
};

const updatePortfolio = async (req, res, next) => {
    try {
        // console.log(req.params.id);
        const toBeUpdated = await Portfolio.findById(req.params.id);

        let imageURL = " ";

        if (toBeUpdated) {
            // console.log(toBeUpdated);
            if (!req?.body?.image) {
                const pattern = /(Portfolio[^.]+)/;
                const toBeDeleted = toBeUpdated.image;
                const destroy = await destroyImage(toBeDeleted, pattern);
            } else {
                imageURL = toBeUpdated.image;
            }

            if (req?.files?.image) {
                if (toBeUpdated.image) {
                    const pattern = /(Portfolio[^.]+)/;

                    const toBeDeleted = toBeUpdated.image;
                    const destroy = await destroyImage(toBeDeleted, pattern);
                }

                let localPath = "public/portfolio/";
                let destinationPath = "Portfolio/PortfolioHero";

                imageURL = await uploadImage(req, localPath, destinationPath);
            }

            const updated = await Portfolio.findByIdAndUpdate(
                req.params.id,
                { ...req.body, image: imageURL },
                { new: true }
            );

            return res.send(updated);
        }

        return res.status(404).send({ msg: "Resource not found" });
    } catch (err) {
        next(err);
    }
};

const removePortfolio = async (req, res, next) => {
    try {
        let toBeRemoved = await Portfolio.findById(req.params.id);
        if (toBeRemoved) {
            if (toBeRemoved.image) {
                const pattern = /(Portfolio[^.]+)/;

                const toBeDeleted = toBeRemoved.image;
                const destroy = await destroyImage(toBeDeleted, pattern);
            }

            let deleted = await Portfolio.findByIdAndDelete(req.params.id);

            return res.status(204).end();
        }

        return res.status(404).send({ msg: "Resource not found" });
    } catch (err) {
        next(err);
    }
};

const getPortfolio = async (req, res, next) => {
    try {
        let portfolio = await Portfolio.find();
        res.send(portfolio);
    } catch (err) {
        next(err);
    }
};

const getSinglePortfolio = async (req, res, next) => {
    try {
        let portfolio = await Portfolio.findById(req.params.id);
        if (portfolio) {
            return res.send(portfolio);
        }

        return res.status(404).send({ msg: "Resource not found" });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    postPortfolio,
    updatePortfolio,
    removePortfolio,
    getPortfolio,
    getSinglePortfolio,
};
