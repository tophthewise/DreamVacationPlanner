// 1. import any needed libraries
const express = require("express");
const Vacation = require('../models/vacation'); //accesses functions in vacation model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/addVacation', async (req, res) => {
    try {
      const vacation = await Vacation.addVacation(req.body.destination, req.body.start_date, req.body.end_date, req.body.total_budget, req.body.transportation, req.body.user);
      res.send({...vacation});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .get('/showVacation', async (req, res) => {
    try {
      const vacation = await Vacation.showVacations(req.body.destination, req.body.user);
      res.send({...vacation});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/updateVacation', async (req, res) => {
    try {
      const vacation = await Vacation.updateVacation(req.body.destination, req.body.user, req.body.updates);
      res.send({...vacation});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/deleteVacation', async (req, res) => {
    try {
      await Vacation.deleteVacation(req.body.destination, req.body.user);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;