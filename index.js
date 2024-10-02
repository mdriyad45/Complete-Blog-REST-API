const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const connectDB = require('./config/connectDB');
const signupRoute = require('./Routes/auth/signupRoute');
const loginRoute = require('./Routes/auth/loginRoute');
const userRoute = require('./Routes/userRoute');
const postRoute = require('./Routes/postRoutes');
const categoryRoute = require('./Routes/categoryRoute');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

//file upload by multer
const uploadStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,"./Image")
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
});

const upload = multer({storage: uploadStorage});

//upload router

app.post('/api/upload', upload.single('photos'), (req, res)=>{
    console.log(req.file);
    res.send('file upload success')
})
//middleware
app.use(cors());
app.use(express.json());

//Routes

app.use('/api/signup', signupRoute);
app.use('/api/login',loginRoute)
app.use('/api/users',userRoute)


//post routes
app.use('/api/posts', postRoute );

//category route
app.use('/api/category',categoryRoute);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    connectDB();
})