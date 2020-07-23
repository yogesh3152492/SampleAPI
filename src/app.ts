import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import jwt = require('jsonwebtoken');
import { Request, Response } from 'express';
import { Config } from './config/config';
import studentController from './controller/studentController';
let config: Config = require('./Config/config.json');

// Express API
const app = express();

// Verify
const jwtVerification = (req: Request, res: Response, next: any) => {
    next();
//   let str = req.headers['authorization'];
//   var token: any = req.headers['x-access-token'];
//   if (str && str.length > 0) {
//     token = str.replace("Bearer ", "")
//   }
  
//   if (!token)
//     return res.status(403).send({ auth: false, message: 'No token provided.' });

//   jwt.verify(token, config.secert, function (err: any, decoded: any) {
//     if (err)
//       return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' + err });
//     // if everything good, save to request for use in other routes
//     req.headers['x-userId'] = decoded.id;
//     next();
//   });
};

app.use(bodyParser.json());
app.use(cors({
  origin: config.whiteListOrigin,
  optionsSuccessStatus: 200
}));

app.use('/student', jwtVerification, studentController);


app.set('port', process.env.PORT || config.port);

//API Endpoint
app.get("/", (req, res) => {
  res.status(200).send("Connected...!!");
});

export default app;