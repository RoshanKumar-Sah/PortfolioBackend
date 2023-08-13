const objToString = (req) => {
    try {
        let programming = req.body.programming;
        let language = req.body.language;
        let education = req.body.education;
        let experience = req.body.experience;
        let training = req.body.training;

        function converter(arr) {
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
            return converter(el);
        });

        return converted;

    } catch (err) {
        next(err)
    }
}

module.exports = objToString