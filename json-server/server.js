/*  
    To be used on Heroku only
    Ref.: https://github.com/jesperorb/json-server-heroku
    
*/

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);