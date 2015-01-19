(function() {

	var proximityApp =  new PROXIMITY.App();

	proximityApp.waitingZone = new PROXIMITY.Zone("0", "Waiting Zone", document.getElementById('waiting-zone') );


	//Webservice returns known beacons and zones
	var knownBeacons = [{
		"uuid": 1,
		"name": "Peter",
		"imgUrl": "http://imgsrc.hubblesite.org/hu/db/images/hs-1994-02-c-thumb.jpg"
	},{
		"uuid": 2,
		"name": "Luke",
		"imgUrl": "http://imgsrc.hubblesite.org/hu/db/images/hs-1994-02-c-thumb.jpg"
	}];

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