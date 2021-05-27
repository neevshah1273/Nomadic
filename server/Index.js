import express from 'express';
//import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import blogRoutes from './routes/Blogs.js';
import userRoutes from './routes/users.js';
import usersRoutes from './routes/usersd.js';

const app = express();




app.use(express.json({limit : "30mb", extended: true}));
app.use(express.urlencoded({limit : "30mb", extended: true}));
app.use(cors());

app.use('/blogs',blogRoutes);
app.use('/user',userRoutes);
app.use('/users',usersRoutes);

const CONNECTION_URL = 'mongodb+srv://neevshah1273:Neevshah1@cluster0.jfmip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);