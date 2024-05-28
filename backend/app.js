const express = require("express");
const shakeDatabase = require("./connection/database");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger.docs");
const cors = require('cors');
const bodyParser = require('body-parser');


require("dotenv").config();

const app = express();
app.options('*', cors());

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));





const { PORT } = process.env;

app.use(express.json());


app.use("/api/v1", require("./routes/officer.route"));

app.use("/api/v1", require("./routes/consultation.route"));



// SWAGGER
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", async (req, res) => {
  res
    .status(200)
    .json({
      message: `Welcome to Our amazing pet store; Explore our API docs at http://localhost:${PORT}/docs`
    });
});



// SHAKE DATABASE
shakeDatabase(() => {
  // Start the server after database successful handshake
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
