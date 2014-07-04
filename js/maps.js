		function onloadView(){
			var mapOptions = {
	        		center: new google.maps.LatLng(40.7577, -73.9857),
	          		zoom: 12
	        	};
	        	console.log(mapOptions.center);
	        	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	  	}
	  	function initialize(lat,lng,query) {
			var mapOptions = {
        		center: new google.maps.LatLng(lat, lng),
          		zoom: 14
        	};
        	console.log(mapOptions.center);
        	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);	
        	fourSquareApi(lat,lng,query);
      	}

		var placeMarkers = function(fourSqOutput){
	    	var thisLat, thisLng, thisName, thisAddress;
	    	for (i=0;i<fourSqOutput.response.tips.length;i++){
				thisLat = fourSqOutput.response.tips[i].venue.location.lat;
				thisLng = fourSqOutput.response.tips[i].venue.location.lng;
				thisName = fourSqOutput.response.tips[i].venue.name;
				thisAddress = fourSqOutput.response.tips[i].venue.location.address;
				console.log(thisLat +", "+thisLng);
				var myLatlng = new google.maps.LatLng(thisLat,thisLng);
				// To add the marker to the map, use the 'map' property
				var marker = new google.maps.Marker({
				    position: myLatlng,
				    map: map,
				    title: thisName
				});
		    }
	    };