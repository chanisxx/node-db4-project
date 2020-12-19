const express = require('express');
const helmet = require('helmet');
// const recipesRouter = require('./routers/recipes');
// const ingredientsRouter = require('./routers/ingredients');

const server = express();
const port = process.env.PORT || 6000;

server.use(helmet());
server.use(express.json());

// server.use(recipesRouter);
// server.use(ingredientsRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: 'Error with the server; index.js'
    });
});

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});