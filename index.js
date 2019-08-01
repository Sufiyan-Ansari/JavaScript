const express = require('express');
const app = express();
app.use('/add-user',(req,res,next)=>
{
    console.log('This is first middle ware');
}).listen(3000);
