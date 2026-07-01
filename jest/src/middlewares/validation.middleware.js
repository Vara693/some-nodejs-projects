const {body, validationResult} = require('express-validator')

async function validateResult(req, res, next) {
    
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next();
}

const registerUserValidationRules = [
    body("username")
        .isString()
        .withMessage("Username must be string")
        .isLength({min:3, max:20})
        .withMessage("Username's length must be ib between 3 and 20"),
    body("email")
        .isEmail()
        .withMessage("Incorrect email"),
    body("password")
        .isLength({min: 6})
        .withMessage("Password must be minimum 6 characters long"),

    validateResult
]

module.exports = {registerUserValidationRules}