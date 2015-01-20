var routes = require(__dirname + '/../../routes');

var links = [];

for(var i = 0; i < routes.length; i++) {
  var cur = routes[i];
  if(!cur.private || cur.private == undefined) {
    var link = {
      disp : cur.path,
      href : cur.path
    };
    links.push(link);
  }
}

function handler(req, res) {
  res.render('index', {
    title : 'hello',
    links : links
  });
}
exports.handler = handler;
