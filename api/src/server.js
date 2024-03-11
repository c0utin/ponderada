import express from "express";
import routes from './routes.js';

import './config/database.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log("Server is running on PORT 3333"));
