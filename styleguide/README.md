# x-team.com static site

## setup

- make sure you have nodejs >= 4
- run `npm install`

## build and view files

- run `npm run build` to build the files (populates the `dist` directory)

### option 1 - nodejs (static-file server)
- run `npm run serve` and then open a browser to http://localhost:5001
  - NOTE: this starts a nodejs static-file server, with optional http auth. For production we don't need to run a nodejs process at all, we can serve static files directly from the `dist` directory

### option 2 - docker (nginx server)
- run `docker-compose up` and then open a browser to http://localhost
  - NOTE: you must force rebuild after running `npm run build`, run `docker-compose up --build`

## enabling http auth

- in staging we might want to enable http auth
- to enable, set the `USERNAME` and `PASSWORD` environment vars
- eg. `USERNAME=xteam PASSWORD=abc123 npm run serve`

## directory structure

```
src/
  pages/ <-- js modules responsible for building an html page
  templates/ <-- .js modules that export a function to create an html string
  util/ <-- js util modules
dist/ <-- our generated html files and assets will go here
build/ <-- scripts for converting src into dist
```
