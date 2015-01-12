var express = require('express');
var app = express();

//Template config
app.set('views', './views');
app.set('view engine', 'jade');

//Path config
app.use(express.static(__dirname + '/public'))

//Init
app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
