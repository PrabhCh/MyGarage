const express = require('express');
const router = express.Router();

// @route     GET api/cars
// @desc      Get all cars
// @access    Private
router.get('/', (req, res) => {
  res.send('Get all cars');
});

// @route     POST api/cars
// @desc      Add new car
// @access    Private
router.post('/', (req, res) => {
  res.send('Add car');
});

// @route     PUT api/cars/:id
// @desc      Update car
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update car');
});

// @route     DELETE api/cars/:id
// @desc      DELETE car
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete car');
});

module.exports = router;
