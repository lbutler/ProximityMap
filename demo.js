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

	proximityApp.addZone( new PROXIMITY.RadiusZone("Z1", "Zone 1", $("#z1")[0] ) );

	//TODO: use updateWithNewData to broadcast new data, this is where we will hook in the live stream
	//proximityApp._moveBeacon( 1, "Z1");

	console.log(proximityApp);

})();