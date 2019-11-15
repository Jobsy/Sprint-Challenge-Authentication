/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
 
  const token = req.headers.authorization;

    if (token) {
        jwt.verify(
            token,
            'THIS IS THE SECRET',
            (err, decodedToken) => {
                if (err) {
                    res.status(401).json({ message: 'shall not pass!' + err.message })
                } else {
                    req.decodedToken = decodedToken;
                    next()
                }
            }
        )
    } else {
        res.status(400).json({ message: 'No credentials provided' });
    }
};
