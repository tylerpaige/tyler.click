var express = require('express');
var cons = require('consolidate');
var app = express();
var routes = require('./routes');
var handlers = require('./handlers');

//Template config
app.set('view engine', 'jade');
app.set('views', './views');

//The public folder is available for all routes
app.use(express.static(__dirname + '/public'))

//routes.json contains the URLs to be access and the functions to respond
for(var i = 0; i < routes.length; i++) {
  var cur = routes[i];
  if(cur.dir != undefined) {
  //Routes with a 'dir' property serve static files
  //for now, these static files are in /lib/components
    app.use(cur.path, express.static(__dirname + '/static/' + cur.dir))
  } else if(cur.svc != undefined) {
  //Routes with a 'svc' property have their own services
    app[cur.method](cur.path, handlers[cur.svc])
  }
}

//Init
app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
