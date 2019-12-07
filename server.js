'user strict'

const express = require('express');
// Created server
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./puclic'));

app.get('/', function(request, response) {
  response.sendFile( __dirname + '/public/index.html' );
})

app.get('/test', function(request, response){
  console.log('Test rount is ON');
  response.send({
    kiss: 'heres a kiss <3',
    from: 'bori'
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

