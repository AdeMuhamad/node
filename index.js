var express = require('express')
var app = express()
var fs = require('fs');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  
fs.readFile('index.js', 'utf8', function(err, contents) {
    res.send("<pre>"+contents+"</pre>");
});
  //res.send('hello world')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
