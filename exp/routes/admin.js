const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  res.send('vai Honório admin...')
})

router.get('/:id',(req,res)=>{
  res.send('vai Honório admin ' + req.params.id )
})

router.post('/',(req,res)=>{
  const corpo = `Login: ${req.body.login} Senha: ${req.body.senha}`
  res.send('acessa do via poste' + corpo)
})

module.exports = router


https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/
https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/xeokit-sdk.es.min.js