# Various art websites
I'm using the domain tyler.click to separate my portfolio website from small web projects I may do.

tyler.click

## To create a new project/route
There are few things to do.

* Make a directory in lib/components/ for all PROJECT-SPECIFIC assets you'll need
* For assets that can be share amongst other projects, you can use public/assets
* Write a req/res function called "handle" and save it in lib/svc with a relevant name
* update routes.json to contain both the URL you want to use and the name of the relevant svc file
