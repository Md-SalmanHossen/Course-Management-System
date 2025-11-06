import express from 'express';
import cors from 'cors'
import hpp from 'hpp';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

import connectDB from './src/config/database.config.js';
import routeNotFound from './src/middlewares/route_not_found.middleware.js';



dotenv.config();
const app=express();

app.use(hpp())
app.use(helmet());
app.use(cors());
app.use(cookieParser());
const rateLimiter=rateLimit({
   windowMs:15*60*1000,
   max:1000,
   standardHeaders:true
})
app.use(rateLimiter);


app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB()


app.use(routeNotFound);

export default app;