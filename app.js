import express from 'express';
import router from './routes/playlistRouter.js'
import errorController from './controllers/errorController.js';
import CustomError from "./utils/CustomError.js"

const PORT = 3000
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/playlist', router)

app.use('*', (req, _, next) =>{
    const err = new CustomError(`Cant't find ${req.originalUrl} on the server!`, 404)
    next(err)
})

// Middleware Error
app.use(errorController)


app.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`))
