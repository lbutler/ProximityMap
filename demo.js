(function() {

	var proximityApp =  new PROXIMITY.App();

	proximityApp.waitingZone = new PROXIMITY.Zone("0", "Waiting Zone", document.getElementById('waiting-zone') );
	proximityApp.story = new PROXIMITY.Story( document.getElementById('story') );

	//Webservice returns known beacons and zones
	// Images from HubbleSite http://hubblesite.org
	// http://hubblesite.org/about_us/copyright.php
	var knownBeacons = [
		{"uuid": 1, "name": "Black Eye Galaxy", "imgUrl": "img/BlackEyeGalaxy.jpg"},
		{"uuid": 2, "name": "Cats Eye Nebula", "imgUrl": "img/CatsEyeNebula.jpg"},
		{"uuid": 3, "name": "Cluster M13", "imgUrl": "img/ClusterM13.jpg"},
		{"uuid": 4, "name": "Galaxy M81", "imgUrl": "img/GalaxyM81.jpg"},
		{"uuid": 5, "name": "Galaxy M106", "imgUrl": "img/GalaxyM106.jpg"},
		{"uuid": 6, "name": "Jupiter", "imgUrl": "img/Jupiter.jpg"},
		{"uuid": 7, "name": "Galaxy M16", "imgUrl": "img/M16.jpg"},
		{"uuid": 8, "name": "Mars", "imgUrl": "img/Mars.jpg"},
		{"uuid": 9, "name": "NGC1309", "imgUrl": "img/NGC1309.jpg"},
		{"uuid":10, "name": "Pluto", "imgUrl": "img/PlutoAndMoons.jpg"},
		{"uuid":11, "name": "NGC2174", "imgUrl": "img/NGC2174.jpg"},
		{"uuid":12, "name": "NGC3370", "imgUrl": "img/NGC3370.jpg"},
		{"uuid":13, "name": "Ring", "imgUrl": "img/Ring.jpg"},
		{"uuid":14, "name": "Saturn", "imgUrl": "img/Saturn.jpg"},
		{"uuid":15, "name": "Super Nova", "imgUrl": "img/SuperNova.jpg"},
		{"uuid":16, "name": "Uranus", "imgUrl": "img/Uranus.jpg"},
		{"uuid":17, "name": "Turbulent Star", "imgUrl": "img/TurbulentStar.jpg"},
		{"uuid":18, "name": "Crab Nebula", "imgUrl": "img/CrabNebula.jpg"}];

	knownBeacons.forEach( function(beacon) {
		proximityApp.addBeacon( new PROXIMITY.Beacon(beacon.uuid, beacon.name, beacon.imgUrl) );
	});


	var knownZones =
	[{"uuid": "Z1", "name": "Zone 1", "domId": "z1" },
	{"uuid": "Z2", "name": "Zone 2", "domId": "z2" },
	{"uuid": "Z3", "name": "Zone 3", "domId": "z3" },
	{"uuid": "Z4", "name": "Zone 4", "domId": "z4" },
	{"uuid": "Z5", "name": "Zone 5", "domId": "z5" }];

	knownZones.forEach( function(zone) {
		proximityApp.addZone( new PROXIMITY.RadiusZone(zone.uuid, zone.name, document.getElementById(zone.domId)) );
	});


	// Creating fake published data here
	var randomIntFromInterval =function(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	};

	window.setInterval( function(){
		var beaconUUID = randomIntFromInterval(1,18);
		var accuracy = randomIntFromInterval(10,90);
		var currentZone = proximityApp.beacons[beaconUUID].currentZone.uuid;

		if( Math.random() < 0.9 && currentZone !== "0") {

			proximityApp.updateWithNewData( beaconUUID, accuracy, currentZone);
		} else {
			if ( Math.random() > 0.95 ) {
				var zone = "Z" + randomIntFromInterval(1,5);
				proximityApp.updateWithNewData( beaconUUID, accuracy, zone);
			}
		}

	} , 300);



	//Turn on tooltips
	$('[data-toggle="tooltip"]').tooltip();


})();