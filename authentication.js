var url = require('url');
var APP_SECRET = '4df73746-86c7-4404-8ff5-653e055e61f4'; // <---------- REPLACE THIS WITH YOUR OWN
var APP_ID = '136c2bed-4f4d-c4dd-e7c2-acbaaede235f'; // <---------- REPLACE THIS WITH YOUR OWN
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

            req.key = instance;
            req.wixAPI = wixAPI;
            next();

        } catch(e) {
            res.send( "Wix API init failed: " + e.message );
        }
    }
}

module.exports = Authentication;