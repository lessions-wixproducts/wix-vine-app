var vine = require('./vine.js');
var _ = require('underscore-node');

exports.widget = function(req, res){
    res.render('index', { });
};

exports.search = function(req, res){
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

    var query = getQueryString(req.query);

    /**
     * The Wix SDK must be provided with the PostMessage parameters.
     * When redirecting, it's crucial to pass on those parameters.
     */
    res.redirect(query + '#/settings'); // Adding a proceeding '/' will result in SDK parameter parsing errors
};

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

/**
 * Parses the Post Message parameters
 * @param request parameters
 * @returns concatenated query params
 */
function getQueryString(q) {
    var query = "?";
    _.each(q, function(value, key){
        query += (key + "=" + encodeURIComponent(value) + "&");
    });
    return query.substring(0, query.length - 1);
}