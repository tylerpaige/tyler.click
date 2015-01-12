var express = require('express');
var app = express();
var cons = require('consolidate');
var routes = require('./routes');
var handlers = require('./handlers');

//Template config
app.set('views', './views');
app.set('view engine', 'jade');

//Path config
app.use(express.static(__dirname + '/public'))

for(var i = 0; i < routes.length; i++) {
  var cur = routes[i];
  app.get(cur.url, handlers[cur.res]);
}

//Init
app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
