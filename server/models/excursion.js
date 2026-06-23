const mongoose = require("mongoose");

const excursionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
 
});
const excursion = mongoose.model("Excursion", excursionSchema);
async function addExcursion(name, description, price) {
  const excursion = await getExcursion(name, user);
  if(excursion) throw Error('this excursion is already noted!')

  const newExcursion = await Excursion.create({
    name: name,
    description: description,
    price: price
  });

  return newExcursion._doc
}

// READ a user
async function showExcursions() {
  const excursions = await Excursion.find();
  return excursions.map(excursion => excursion._doc);
}



// UPDATE
async function updateExcursion(name, user, updates) {
  const excursion = await Excursion.findOneAndUpdate(
    { name, user },
    updates,
    { new: true }
  );
  return excursion._doc;
}

//DELETE
async function deleteExcursion(name,user) {
  await Excursion.deleteOne({"name": name, "user": user})
};

// utility functions
async function getExcursion(name, user) {
  return await Excursion.findOne({"name": name, "user": user})
}

// 5. export all functions we want to access in route files

module.exports = { 
   addExcursion,
   showExcursions,
   updateExcursion,
   deleteExcursion,
   getExcursion
};