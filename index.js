const { resolveSrv } = require('dns/promises');
const express = require('express');
const app = express();
app.get('/json',function(req,res){
    res.json({
        "message":"Hello json"
    })
})