const router = require("express").Router();

const PetController = require("../controllers/pet.controller");

/**
 * @swagger
 * /pets:
 *   get:
 *     summary: Get all pets
 *     responses:
 *       200:
 *         description: Successfully retrieved all pets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 *       500:
 *         description: Internal server error.
 */

router.get("/", PetController.getAllPets);

/**
 * @swagger
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the pet
 *         species:
 *           type: string
 *           description: The species of the pet
 *         color:
 *           type: string
 *           description: The color of the pet
 *         breed:
 *           type: string
 *           description: The breed of the pet
 *         sheltered:
 *           type: boolean
 *           description: Indicates if the pet is sheltered
 *         owner:
 *           type: string
 *           description: The ID of the owner (reference to Owner model)
 */
router.get("/:id", PetController.getSinglePet);

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Create a new pet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       200:
 *         description: Successfully created a new pet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       400:
 *         description: Bad request. Check the request body.
 */
router.post("/", PetController.createPet);

/**
 * @swagger
 * /pets/{id}:
 *   put:
 *     summary: Update pet details by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the pet to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       200:
 *         description: Successfully updated the pet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       400:
 *         description: Bad request. Check the request body.
 *       404:
 *         description: Pet not found.
 */
router.patch("/:id", PetController.updatePetData);

/**
 * @swagger
 * /pets/{id}:
 *   delete:
 *     summary: Delete a pet by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the pet to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the pet
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       404:
 *         description: Pet not found.
 */
router.delete("/:id", PetController.deletePetData);

module.exports = router;
