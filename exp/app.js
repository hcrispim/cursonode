//IMPLEMENTACAO PARA JS

//const express = require('express')
//const app = express()
//const adminRoutes = require('./routes/admin')

//app.use(express.json())

//app.use(express.static('node_modules/xeokit-sdk/assets'));
//app.use('/static',express.static(__dirname+'/public/index.html'));

//const { loadModel } = require('@xeokit/xeokit-sdk');
//import { loadModel } from '@xeokit/xeokit-sdk';
//import { loadModel } from '@xeokit/xeokit-sdk';

//import pkg from '@xeokit/xeokit-sdk';
//const { loadModel } = pkg;

// app.get('/model', (req, res) => {
//   loadModel('path/to/bim/model.ifc').then(model => {
//     res.send(model);
//   });
// });

// app.get('/',(req,res)=>{
//   res.send('vai Honório...')
// })

 
//app.use('/admin',adminRoutes)

app.listen(3000,()=>{
  console.log('Servidor rodando na 3000')
})

// IMPLEMENTACAO PARA TS
// import express from 'express';
// const app = express()

// app.listen(3000,()=>{
//   console.log('Servidor rodando na 3000')
// })

