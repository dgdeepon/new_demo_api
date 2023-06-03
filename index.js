const jsonsever=require('json-server');
const server=jsonsever.create();
const middleware=jsonsever.defaults();
const router=jsonsever.router('db.json');
const port=process.env.PORT || 8080;


server.use(middleware);

server.use(router);

server.listen(port);