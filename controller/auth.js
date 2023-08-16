
let jwt = require('jsonwebtoken');

const login = (req, res) => {
  const defaultUserName = process.env.USER_NAME;
  const defaultPassword = process.env.PASSWORD;
  const requestedUserName = req.body.username;
  const requestedPassword = req.body.password;

  if (
    defaultUserName === requestedUserName &&
    defaultPassword === requestedPassword
  ) {
    let token = jwt.sign({ username: defaultUserName}, process.env.JWT_KEY, { expiresIn: '1h' });
    // console.log(token);
    let temp = {
      username: process.env.USER_NAME,
      token: token
    }
    return res.send({...temp});
  }

  return res.status(401).send({ msg: "Invalid Credentials" });
};

module.exports = { login };
