import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { corsOptions } from './config/corsOptions.js';
import sequelize from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';
import routes from './routes/index.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(fileUpload({
  createParentPath: true,
}));

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'assets')));
}

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (e) {
    console.error(e);
  }
};

start();
