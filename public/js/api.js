// var express = require('express')
// var request = require('request')
// var api = express.Router()

// api.get('/giphy/random', function(req, res){
//   //http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho
//   var bingUrl = "https://bingapis.azure-api.net/api/v5/images/search?judyhopps&9api_key=55b49e7ae0a746b6815daf77e691d04e"
//   request({url: giphyUrl, json: true}, function(error, response, body){
//     res.send('<img src ="' + body.data.image_original_url + '">')
//   })
// })

    $(function() {
        var params = {
            // Request parameters
            "q": "cats",
            "count": "9",
            "offset": "0",
            "mkt": "en-us",
            "safeSearch": "Moderate",
        };

        $.ajax({
            url: "https://bingapis.azure-api.net/api/v5/images/search?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","55b49e7ae0a746b6815daf77e691d04e");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        });
    });

// module.exports = api
