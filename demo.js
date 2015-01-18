(function() {

	var proximityApp =  new PROXIMITY.App();

	proximityApp.waitingZone = document.getElementById('waiting-zone');

	var sampleData = [{
		"uuid": 1,
		"name": "Peter",
		"imgUrl": "http://imgsrc.hubblesite.org/hu/db/images/hs-1994-02-c-thumb.jpg"
	},{
		"uuid": 2,
		"name": "Luke",
		"imgUrl": "http://imgsrc.hubblesite.org/hu/db/images/hs-1994-02-c-thumb.jpg"
	}];

	sampleData.forEach( function(item) {

		proximityApp.addBeacon( new PROXIMITY.Beacon(item.uuid, item.name, item.imgUrl) );

	});

	console.log(proximityApp);

})();