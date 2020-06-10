const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const user = new User({ email, password });
  await user.save();

  res.send('You signed up');
});

module.exports = router;
