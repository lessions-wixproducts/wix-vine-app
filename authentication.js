var url = require('url');
var APP_SECRET = '7f00e181-fcf7-4058-a116-88607c49049e'; // <---------- REPLACE THIS WITH YOUR OWN APP SECRET KEY
var APP_ID = '137385b2-a44a-72c6-ef0a-b4ac42484821'; // <---------- REPLACE THIS WITH YOUR OWN APP KEY
var wix = require( 'openapi-node' );

function Authentication() {
    this.authenticate = function(req, res, next) {

        var instance = req.query.instance;

        try {

            console.log('Starting Wix Init..');

            // Parse the instance parameter
            var wixInstance = wix.getConnect().parseInstance(instance, APP_SECRET);
            var instanceId = wixInstance.instanceId;

            // Get a shortcut for the Wix RESTful API
            var wixAPI = wix.getAPI(APP_SECRET, APP_ID, instanceId);

            console.log("Once you've reached this point you're good to use the Wix API, otherwise an exception will be thrown.");

            req.wixInstanceId = instanceId;
            req.wixInstance = wixInstance;
            req.signDate = wixInstance.signDate;
            req.permissions = wixInstance.permissions;
            req.wixAPI = wixAPI;
            next();

        } catch(e) {
            res.send( "Wix API init failed: " + e.message );
        }
    }
}

module.exports = Authentication;