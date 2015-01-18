var PROXIMITY = PROXIMITY || {};

PROXIMITY.App = (function() {
	'use strict';

	var App = function App() {

		this.beacons = {};

		this.waitingZone = null;
		this.zones = {};
	};

	App.prototype.addBeacon = function(beacon) {
		beacon.setCurrentZone(this.waitingZone);
		this.beacons[beacon.uuid] = beacon;
	};

	App.prototype.addZone = function(zone) {
		this.zones[zone.uuid] = zone;
	};

	App.prototype.moveBeacon = function(beaconId, zoneId) {
		var beacon = this.beacons[beaconId];
		var oldZone = beacon.currentZone;
		beacon.currentZone =  this.zones[zoneId];
		oldZone.updateDom();
		beacon.currentZone.updateDom();
	};


	App.prototype.updateBeaconAccuracy = function(beaconId, accuracy) {
		var beacon = this.beacons[beaconId];
		beacon.accuracy = accuracy;
		beacon.currentZone.updateDom();
	};


	return App;

})();