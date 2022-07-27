const express = require("express")
require('dotenv').config({ path: './local.env' });
const cors = require('cors');
const cloudinary = require('cloudinary');
const AppError = require('./utils/appError');
const errorController = require('./controllers/errorController');
const textEditorRouter = require("./routes/textEditorRoutes")

const app = express()

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.cloud_api_key,
    api_secret: process.env.cloud_api_secret,
});

const PORT = process.env.PORT || 5000;


app.use(cors({ credentials: true, origin: process.env.FRONTEND_PORT }));
app.use(express.json());


app.use('/api/v1/text-editor', textEditorRouter);



app.all('*', (req, res, next) => {
    next(new AppError(`Route ${req.originalUrl} is not defined!`, 404));
});

app.use(errorController);


app.listen(PORT, () => {
    console.log(`Server slusa na port ${PORT}`)
})
