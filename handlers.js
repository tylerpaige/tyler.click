//This file pulls in all of the services in /lib/svc
//and exports them so that they may be used by index.js

require('fs').readdirSync('./lib/svc').forEach(function(file) {
  var svc = require('./lib/svc/'+file);
  var base = file.substring(0, file.indexOf('.js'))
  exports[base] = svc.handler;
});
