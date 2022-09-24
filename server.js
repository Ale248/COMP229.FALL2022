// const { Console } = require('console');
// const hello = require('./hello');
// const lib = require('./lib');

// hello.sayHello();
// console.log(lib.halfOf(5));

// Connect 1
const connect = require('connect');
const app = connect();
app.listen(3000);

function logger(req, res, next){
    console.log(req.method, req.url);
    next();
}

function helloWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World');
};

function goodbye(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Good bye!');
 };

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbye);

console.log('Server running at http://localhost:3000/');