// 1. import any needed libraries
const express = require("express");
const Vacation = require('../models/excursion'); //accesses functions in vacation model file
const router = express.Router();
router
.post('/addExcursion', async (req, res) => {
    try {
      const excursion = await Excursion.addExcursion(req.body.name, req.body.description, req.body.price);
      res.send({...excursion});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .get('/showExcursions', async (req, res) => {
    try {
      const excursion = await Excursion.showExcursions();
      res.send({...excursion});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/updateExcursion', async (req, res) => {
    try {
      const excursion = await Excursion.updateExcursion(req.body.name, req.body.user, req.body.updates);
      res.send({...excursion});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/deleteExcursion', async (req, res) => {
    try {
      await Excursion.deleteExcursion(req.body.name, req.body.user);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;