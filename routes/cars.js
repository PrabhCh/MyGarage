const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Car = require('../models/Car');

// @route     GET api/cars
// @desc      Get all cars
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const cars = await Car.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(cars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/cars
// @desc      Add new car
// @access    Private
router.post(
  '/',
  [auth, [check('year', 'Year is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { year, make, model, odometer, price, type } = req.body;

    try {
      const newCar = new Car({
        year,
        make,
        model,
        odometer,
        price,
        type,
        user: req.user.id
      });

      const car = await newCar.save();

      res.json(car);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/cars/:id
// @desc      Update car
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { year, make, model, odometer, price, type } = req.body;

  // Build car object
  const carFields = {};

  if (year) carFields.year = year;
  if (make) carFields.make = make;
  if (model) carFields.model = model;
  if (odometer) carFields.odometer = odometer;
  if (price) carFields.price = price;
  if (type) carFields.type = type;

  try {
    let car = await Car.findById(req.params.id);

    if (!car) return res.status(404).json({ msg: 'Car not found' });

    // Make sure user owns contact
    if (car.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    car = await Car.findByIdAndUpdate(
      req.params.id,
      { $set: carFields },
      { new: true }
    );

    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/cars/:id
// @desc      DELETE car
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let car = await Car.findById(req.params.id);

    if (!car) return res.status(404).json({ msg: 'Car not found' });

    // Make sure user owns car
    if (car.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Car.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Car removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
