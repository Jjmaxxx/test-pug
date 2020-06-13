const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.get('/', (request, response) =>{
    response.render('home');
})

app.listen(port,()=>{
    console.log("server listening on " + port);
})