// controllers/UserController.js
const User = require('../models/User');

class UserController {
  async register(req, res) {
    const { email_id, password , full_name , account_number } = req.body;
    try {
      const newUser = await User.createUser( email_id, password , full_name , account_number);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'An error occurred while registering the user' });
    }
  }
}

module.exports = new UserController();
