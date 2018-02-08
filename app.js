var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/login", function(req, res) {
    var accountMock = {
        "username": "nraboy",
        "password": "1234",
        "twitter": "@nraboy"
    };
    var sucessStatusMsg = {"staus":"sucess"};
    if(!req.query.username) {
        return res.send({"status": "error", "message": "missing username"});
    } else if(req.query.username != accountMock.username) {
        return res.send({"status": "error", "message": "wrong username"});
    } else {
        return res.send(sucessStatusMsg);
    }
});


app.get("/getallexchanges", function(req, res) {
    var exchangesResult ={
			"header": {
				"messageType": "345",
				"sessionId": "1504684196985"
			},
			"payLoad": {
				"value": [{
						"exchangeId": "BSE"
					},
					{
						"exchangeId": "NSE"
					},
					{
						"exchangeId": "DGCX"
					}
				]
			}
		}
    var errorStatusMsg = {"staus":"failed","message":"Bad request format"};
    //@TODO  do error checks and return back error responds
    return res.send(exchangesResult);

});



var server = app.listen(8080, function () {
    console.log("Listening on port %s...", server.address().port);
});