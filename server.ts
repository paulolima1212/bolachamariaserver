import { router } from "./routes";

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4001, () => console.log('Server is running on Port 4001'));