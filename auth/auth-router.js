const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../jokes/jokes-model');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });

});

router.post('/login', (req, res) => {
  // implement login

  let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token: token,
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error.message);
        });

});

function generateToken(user) {
  const payload = {
      subject: user.id,
      username: user.username,
      roles: ['student']
  }
  const options = {
      expiresIn: '1d',
  }

  const result = jwt.sign(
      payload,
      // process.env.NODE_ENV === 'development' ? 'devsecret' : process.env.SECRET,
      'THIS IS THE SECRET',
      options,
  )

  return result;
}

module.exports = router;
