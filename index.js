const express = require("express");
const app = express()
require('dotenv').config()
require("./config/database")

const fileUpload = require("express-fileupload")


app.use(fileUpload());


app.use(express.json())

const auth_route = require("./route/auth");
const about_route = require("./route/about");
const testimonial_route = require("./route/testimonial");



// console.log(process.env.PASSWORD) 



app.use("/api", auth_route)
app.use("/api", about_route)
app.use("/api", testimonial_route)


app.use((req, res) => {
    res.status(404).send({ msg: "Resource not found" })
})


app.use((err, req, res, next) => {
    let status = 500
    let message = "SERVER ERROR"
    let errors = null

    if (err.name === "ValidationError") {
        status = 400
        message = "Bad Request"
        let errors_arr = Object.entries(err.errors)

        let temp = []

        // console.log(errors_arr);
        errors_arr.forEach(arr_el => {
            let temp_obj = {}
            temp_obj.parameter = arr_el[0]
            temp_obj.message = arr_el[1].message

            temp.push(temp_obj)
        })

        errors = temp


    } else if (err.name == "CastError") {
        status = 400
        message = "Bad Request"
    } else if (err.name == "JsonWebTokenError") {
        status = 400
        message = "Bad Request"
    }

    res.status(status).send({ msg: message, errors, error: err.message })
})

app.listen(5000, () => {
    console.log("server started");
})