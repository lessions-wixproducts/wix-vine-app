var express = require('express');
var Authentication = require('./authentication.js');
var routes = require('./routes.js');
var app = express();

app.use(express.bodyParser());
app.use(express.static(__dirname + '/app'));

app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs');

//API
app.get('/vine/popular/:size', routes.vinePopular);
app.get('/vine/search/:q/:size', routes.vineSearch);
app.get('/vine/:videoId', routes.vineGetVideo);

//Templates
app.get('/widget', authenticate, routes.widget);
app.get('/settings', authenticate, routes.settings);
app.post('/app/settingsupdate', authenticate, routes.settingsUpdate);
app.get('/widget/search/:q?/:size?', authenticate, routes.search);



function authenticate(req, res, next) {
    var authentication = new Authentication();
    authentication.authenticate(req, res, next);
}

app.listen(process.env.PORT || 3010)
console.log('Express app started on port %d', process.env.PORT || 3010);
