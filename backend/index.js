import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express'
import cardRouter from './routes/card.routes.js'
import dbConnect from './db/dbConnection.js';

dotenv.config();

const app = express();
dbConnect()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
    res.send(`Server is Running`)
})

app.use('/api', cardRouter)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
