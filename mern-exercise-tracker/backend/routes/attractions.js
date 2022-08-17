const router = require('express').Router();
let Attractions = require('../models/attractions.model');

router.route('/').get((req, res) => {
  Attractions.find()
    .then(attractions => res.json(Attractions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newAttractions = new Attractions({
    username,
    description,
    duration,
    date,
  });

  newAttractions.save()
  .then(() => res.json('Attractions added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Attractions.findById(req.params.id)
    .then(attractions => res.json(attractions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  attractions.findByIdAndDelete(req.params.id)
    .then(() => res.json('atttractions deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  attractions.findById(req.params.id)
    .then(attractions => {
      attractions.username = req.body.username;
      attractions.description = req.body.description;
      attractions.duration = Number(req.body.duration);
      attractions.date = Date.parse(req.body.date);

      attractions.save()
        .then(() => res.json('attractions updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;