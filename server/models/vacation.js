// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const vacationSchema = new mongoose.Schema({
  destination: { type: String, unique: true, required: true},
  start_date: { type: String, required: true},
  end_date: { type: String, required: true},
  total_budget: { type: Number, required: true},
  transportation: { type: String, required: true},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

// 3. create model of schema
const Vacation = mongoose.model("Vacation", vacationSchema)

// 4. create CRUD functions on model
//CREATE a user
async function addVacation(destination, start_date, end_date, total_budget, transportation, user) {
  const vacation = await getVacation(destination, user);
  if(vacation) throw Error('this vacation is already noted!')

  const newVacation = await Vacation.create({
    destination: destination,
    start_date: start_date,
    end_date: end_date,
    total_budget: total_budget,
    transportation: transportation
  });

  return newVacation._doc
}

// READ a user
async function showVacations(destination, user) {
  const vacation = await getVacation(destination)
  if(!vacation) throw Error('Vacation not found')

  return vacation._doc
}

// UPDATE
async function updateVacation(destination, user, updates) {
  const vacation = await Vacation.findOneAndUpdate(
    { destination, user },
    updates,
    { new: true }
  );
  return vacation._doc;
}

//DELETE
async function deleteVacation(destination,user) {
  await Vacation.deleteOne({"destination": destination, "user": user})
};

// utility functions
async function getVacation(destination, user) {
  return await Vacation.findOne({"destination": destination, "user": user})
}

// 5. export all functions we want to access in route files
module.exports = { 
  addVacation, showVacations, updateVacation, deleteVacation, getVacation
};