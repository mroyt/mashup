    	function getCoordinates(centerLoc,callback){
	    	$.ajax({type:"GET",url:"https://maps.googleapis.com/maps/api/geocode/json?address="+centerLoc+"&key=AIzaSyBBBatpnQggE-ys0y9gAzo6_KfzgBDNK2E",success:
	    		function(data){
	    			centralLat_global = (data.results[0].geometry.location.lat);
	    			centralLng_global = (data.results[0].geometry.location.lng);
	    			callback();
	    		}
	    	})
	    };