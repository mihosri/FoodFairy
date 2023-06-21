//Express: Backend framework-middleware-defining routes-HTTP request handling-MongoDB integration(mongoose express lib)-serving frontend
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//For integrating .env file
import dotenv from 'dotenv';
//Cross origin support
import cors from 'cors';
//Establishing MongoDB connection
import connectDB from './config/db.js';
//Error handler Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
//importing application routes
import messageRoutes from './routes/messageRoutes.js';

//to read from file and set the values in variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Port number for running server locally
const port = process.env.PORT || 8000;

connectDB();

//an instance to express framework
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//App routing
app.use('/api/message', messageRoutes);

//serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')));
      
}else{
  app.get('/', (req, res) => {
    res.send('Hi please set it to production');
  });
}
  
//integrate error handler
app.use(notFound);
app.use(errorHandler);

//starts server and listen for requests in the defined port
app.listen(port, ()=> console.log(`Hello! server is running in port ${port}`));