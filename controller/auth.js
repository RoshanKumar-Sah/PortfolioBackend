
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
    return res.send({"token": token});
  }

  return res.status(401).send({ msg: "Invalid Credentials" });
};

module.exports = { login };
