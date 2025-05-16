const Cred = require('../models/cred');

module.exports = (credsCol) => async (req, res) => {
  const { email, password } = req.body;
  try {
    await Cred.insert(credsCol, { email, password });
    return res.status(200).send('OK');
  } catch (dbErr) {
    console.error('DB insert error:', dbErr);
    return res.status(500).send('Error');
  }
};