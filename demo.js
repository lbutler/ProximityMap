(function() {

	var proximityApp =  new PROXIMITY.App();

	proximityApp.waitingZone = new PROXIMITY.Zone("0", "Waiting Zone", document.getElementById('waiting-zone') );

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


	//TODO: use updateWithNewData to broadcast new data, this is where we will hook in the live stream
	proximityApp.updateWithNewData( 1, 10, "Z1");
	setTimeout( function(){
		proximityApp.updateWithNewData( 2, 10, "Z2");
	}, 12000);


	console.log(proximityApp);

})();