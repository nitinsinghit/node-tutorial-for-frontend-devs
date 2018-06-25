var express = require('express');
var request = require('request');
var router = express.Router();

const TESTSAMPLEAPI_SERVICE_HOST = process.env.TESTSAMPLEAPI_SERVICE_HOST;
const TESTSAMPLEAPI_SERVICE_PORT = process.env.TESTSAMPLEAPI_SERVICE_PORT;

// const TESTSAMPLEAPI_SERVICE_HOST = "testsampleapi-voting-application.paaslab.senate.gov";
// const TESTSAMPLEAPI_SERVICE_PORT = 8080;

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });


    const url =
        "http://"+TESTSAMPLEAPI_SERVICE_HOST+":"+TESTSAMPLEAPI_SERVICE_PORT;
    request.get(url, (error, response, body) => {
        let json = JSON.parse(body);
        console.log(json);
    });


    
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
	res.render('helloworld', { title: 'Hello, World!' })
});



module.exports = router;