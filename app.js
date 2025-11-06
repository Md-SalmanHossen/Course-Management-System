import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/database.config.js';
import routeNotFound from './src/middlewares/route_not_found.middleware.js';

dotenv.config();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB()


app.use(routeNotFound)

export default app;