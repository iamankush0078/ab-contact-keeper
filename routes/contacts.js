const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route POST api/contacts
// @desc Add new contacts
// @access Private
router.post('/', (req, res) => {
  res.send('Add contacts');
});

// @route PUT api/contacts/:id
// @desc Update contacts
// @access Private
router.put('/', (req, res) => {
  res.send('Update contacts');
});

// @route DELETE api/contacts:id
// @desc Delete contacts
// @access Private
router.delete('/', (req, res) => {
  res.send('Delete contacts');
});
module.exports = router;
