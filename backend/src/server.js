import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import productRoutes from './routes/product.routes';

import swaggerDocs from './swagger.json';

require('dotenv').config();
const app = express();

// DB connection
const db = require('./config/db');
db();

app.use(cors());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/terms', (req, res) =>
  res.json({
    message: 'Terms of Service',
  })
);

app.use('/v1/product', productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
