var vine = require('./vine.js');
var _ = require('underscore-node');
var config = require('konphyg')(__dirname + '/config');
var dbConfig = config('db');
var db = require("mongojs").connect(dbConfig.url, dbConfig.collections);


exports.widget = function(req, res){
    console.log (req.method + " " + req.url);
    getSettings(req, function(data){
        res.render('index', { settings: data });
    })
};

/**
 * Parses the Post Message parameters
 * @param request parameters
 * @returns {string} concatenated query params
 */
function getQueryString(q) {
    var query = "?";
    _.each(q, function(value, key){
        query += (key + "=" + encodeURIComponent(value) + "&");
    });
    return query.substring(0, query.length - 1);
}

exports.search = function(req, res){
    console.log (req.method + " " + req.url);
    var q = req.params.q || 'wix';
    var size = req.params.size || '6';
    var query = getQueryString(req.query);

    /**
     * The Wix SDK must be provided with the PostMessage parameters.
     * When redirecting, it's crucial to pass on those parameters.
     */
    res.redirect(query + '#/search/' + q + '/' + size); // Adding a proceeding '/' will result in SDK parameter parsing errors
};

exports.settings = function(req, res){
    console.log (req.method + " " + req.url);
    var query = getQueryString(req.query);

    getSettings(req, function(data){
        req.settings = data;

        /**
         * The Wix SDK must be provided with the PostMessage parameters.
         * When redirecting, it's crucial to pass on those parameters.
         */
        res.redirect(query + '#/settings'); // Adding a proceeding '/' will result in SDK parameter parsing errors
    });
};

/**
 * From The docs:
 * There are a few things you can do to protect your App against security issues:

 1. For each call to the App settings endpoint you should validate, on the server side, that the value of the permission parameter that is part of the signed instance is ‘OWNER’. Otherwise you shouldn’t display the content of the App settings and instead display a message ‘permission denied’.
 2. For each save action that is done through the App settings you should include the signed instance in the request. Before saving the new settings you should validate that this instance exists and that the initial parameter is the same.
 3. You should also check the signDate, if the date of the signature is one day older than the current date you should display a message ‘please refresh the Editor to continue editing your App’.
 */

/*
 * POST settings update.
 */
exports.settingsUpdate = function(req, res){
    db.settings.update(
        { instance: req.query.instance, compId: req.query.compId },
        { $set: { settings: req.body.settings }},
        { upsert: true },
        function(err, saved) {
            res.end();
        }
    );
};

function getSettings(req, callback){
    db.settings.findOne({instance: req.query.instance, compId: req.query.compId}, function(err, result) {
        if( err || !result) {
            callback('[]');
        }
        else{
            console.log(result.settings);
            callback(result.settings);
        }
    });
}


exports.vinePopular = function(req, res){
    vine.getPopular(req.params.size || 6, function(data){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
};

exports.vineSearch = function(req, res){
    vine.search(req.params.q || 'funny', req.params.size || 6, function(data){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
};

exports.vineGetVideo = function(req, res){
    vine.getVideo(req.params.videoId || 'MJ9a50Z3pL0',  function(data){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
};
