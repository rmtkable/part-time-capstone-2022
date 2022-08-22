// const router = require('express').Router();
// let Attractions = require('../models/attractions.model');

// router.route('/').get((req, res) => {
//   Attractions.find()
//     .then(attractions => res.json(Attractions))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const description = req.body.description;
//   const duration = Number(req.body.duration);
//   const date = Date.parse(req.body.date);

//   const newAttractions = new Attractions({
//     username,
//     description,
//     duration,
//     date,
//   });

//   newAttractions.save()
//   .then(() => res.json('Attractions added!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//   Attractions.findById(req.params.id)
//     .then(attractions => res.json(attractions))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   attractions.findByIdAndDelete(req.params.id)
//     .then(() => res.json('atttractions deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   attractions.findById(req.params.id)
//     .then(attractions => {
//       attractions.username = req.body.username;
//       attractions.description = req.body.description;
//       attractions.duration = Number(req.body.duration);
//       attractions.date = Date.parse(req.body.date);

//       attractions.save()
//         .then(() => res.json('attractions updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;









const router = require('express').Router()
let Attraction = require('../models/attractions.model')

router.route('/').get((req, res) => {
    Attraction.find()
    .then(attraction =>
        res.json(attraction))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});

router.route('/:id').get((req, res) => {
    Attraction.findById(req.params.id)
    .then((attraction) =>{
        res.json(attraction)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
    Attraction.findById(req.params.id)
        .then((attraction)=>{
            attraction.name = req.body.name
            attraction.description = req.body.description
            attraction.website = req.body.website
            attraction.imageURL = req.body.imageURL
            attraction.address = req.body.location.address
            attraction.city = req.body.location.city
            attraction.state = req.body.location.state
            attraction.zipcode = req.body.location.zipcode
            attraction.indoors = req.body.indoors
            attraction.childFriendly = req.body.childFriendly
        })
    .catch((err) => {
        res.status(400).json('Error ' + err)
    });
});

router.route('/add').post((req, res) => {
    const name = req.body.name
    const description = req.body.description
    const website = req.body.website
    const imageURL = req.body.imageURL
    const address = req.body.location.address
    const city = req.body.location.city
    const state = req.body.location.state
    const zipcode = req.body.location.zipcode
    const indoors = req.body.indoors
    const childFriendly = req.body.childFriendly
    const newAttraction = new Attraction ({
        name,
        description,
        website,
        imageURL,
        location:{
        address,
        city,
        state,
        zipcode
        },
        indoors,
        childFriendly,
        })
    newAttraction.save()
        .then(()=>{
            res.json('Attraction Added')
            })
            .catch((err)=>{
                res.status(400).json("Error: " + err)
            })
})

module.exports = router;