		var fourSquareApi = function(lat,lng,query){
			var locationLL = lat+"%2C"+lng;//"upper+east+side%2C+ny";
			console.log(locationLL);
		    var link = "https://api.foursquare.com/v2/tips/search?openNow=1&radius=1200&client_id=1OSDSTMNVKFRSNEBVPDZCL5RPR32GGBZY315J3RXJT0NHD4X&client_secret=TCT3JL53CY53VJUHBYXBKIC0VSIT0L5YWEIUD0EZ35W1WF5Q&v=20130815&ll="+locationLL+"&query="+query;
		    jQuery.get(link,function(data){
		    	console.log(data.response.tips[1].venue.location.lat);
		    	console.log(data.response.tips[1].venue.location.lng);
		    	placeMarkers(data);
		    });
		};