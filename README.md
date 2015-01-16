# Various art websites
I'm using the domain tyler.click to separate my portfolio website from small web projects I may do.

tyler.click


## Deploying Static Projects
* Make a directory in `/static/`for all project-specific assets and files
* Link to `/public/assets/` for more common assets that can be used (e.g. jQuery, Underscore, Intention.js, etc)
* Update routes.json to have a new element structured like...

```json
{
  "method": "get",
  "path": "/exampleProject",
  "dir": "directoryName"
}
```

Where `method` is the HTTP method for the request; `path` is the URL at which the project will be online; and `dir` is the name of the directory in `/static/` where the files live.

## Deploying More Complex Things
* Create a service js file within `/lib/svc`. It does not matter which type of HTTP request the service will respond to—this will be specified later. You need only create the response function. 
* Be sure to export the function. You may end up with something like this:

```js
function handler(req, res) {
  //response function stuff
}

exports.handler = handler;
```

* For now, assets can be placed in `/public/assets`, although I may change this to be more specific (something with assets specified in routes.json), and templates can be placed in  `/views/`
* Update routes.json to have a new element structured like...

```json
{
  "method": "get",
  "path": "/exampleProject",
  "svc": "serviceName"
}
```

Where `method` is the HTTP method for the request; `path` is the URL at which the project will be online; and `svc` is the name of the js file in `/lib/svc`. Note that dynamic URLs do not use the property `dir` like static projects do. 

## To Do
* Add configuration so assets can be placed in routes.json
* Also figure out where these assets should properly live. Is it just in public/assets?
* test templating
