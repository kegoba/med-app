const Pet = require("../models/pet.model");

const createPet = async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSinglePet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.json(pet);
  } catch (error) {
    res.status(404).json({ error: "Pet not found" });
  }
};

const updatePetData = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePetData = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    res.json(pet);
  } catch (error) {
    res.status(404).json({ error: "Pet not found" });
  }
};
module.exports = {
  createPet,
  getAllPets,
  getSinglePet,
  updatePetData,
  deletePetData
};
