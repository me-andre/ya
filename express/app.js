'use strict';

var express = require('express'),
    browserify = require('browserify')(),
    path = require('path'),
    root = path.resolve(__dirname, '..'),
    _ = require('lodash'),
    morgan = require('morgan'),
    tasks = require('../build/tasks'),
    args = require('yargs').argv,
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    app = express();

app.use(bodyParser());
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.sendFile('src/index.html', {root: root});
});

browserify.add(path.join(root, 'src/js/index.js'));
app.get('/js/index.js', function(req, res, next) {
    var stream = browserify.bundle();
    stream.on('error', function(error) {
        console.log(error);
        res.end();
    });
    stream.pipe(res);
});

app.get('/style.css', function(req, res) {
    res.set('Content-Type', 'text/css');
    pipeGulpToResponse(tasks.sass('src/sass/style', root), res);
});

var yanukochiNames = [
    'one',
    'two',
    'three'
];

app.get('/getAllYanukochi', function(req, res) {
    var collection = {};
    _.each(yanukochiNames, function(name, i) {
        collection[name] = {
            id: i + 1,
            health: 0.2 + Math.random() / 1.5
        }
    });
    res.json(collection);
});

app.use(express.static(path.resolve(root, 'src')));

app.all('*', function(req, res) {
    res.sendFile('express/fake' + req.path, {root: root});
});

app.use(errorHandler());

app.listen(args.port || 3000);

function pipeGulpToResponse(stream, response) {
    stream
        .on('data', function(file) {
            file.isStream() ? file.contents.pipe(response) : response.send(file.contents);
        })
        .on('end', function() {
            response.end();
        });
}
