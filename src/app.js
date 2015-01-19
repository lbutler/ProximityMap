var PROXIMITY = PROXIMITY || {};

PROXIMITY.App = (function() {
	'use strict';

	var App = function App() {

		this.beacons = {};

		this.waitingZone = null;
		this.zones = {};

		//TODO: Run _findStaleSignals on timeout, if > set time then return to waiting zone
	};

	App.prototype.addBeacon = function(beacon) {
		beacon.setCurrentZone(this.waitingZone);
		this.beacons[beacon.uuid] = beacon;
	};

	App.prototype.addZone = function(zone) {
		this.zones[zone.uuid] = zone;
	};

	App.prototype.updateWithNewData = function(beaconId, accuracy, zoneId) {
		//TODO: This method as below
		//Check if beacon is known, if not known ignore
		//If beacon current zone is same as zoneid then run _updateBeaconAccuracy
		//If beacon in new zone then run _moveBeacon
	};


	App.prototype._moveBeacon = function(beaconId, zoneId) {
		var beacon = this.beacons[beaconId];
		var oldZone = beacon.currentZone;
		beacon.setCurrentZone(this.zones[zoneId]);

		oldZone.updateDomForAllBeacons();
		beacon.currentZone.updateDomForAllBeacons();
	};

	App.prototype._updateBeaconAccuracy = function(beaconId, accuracy) {
		var beacon = this.beacons[beaconId];
		beacon.accuracy = accuracy;
		beacon.currentZone.updateDomForSingleBeacon(beacon);
	};

	App.prototype._findStaleSignals = function() {
		//TODO: This method as below
		//go through each of the beacons and see when we last got a message
		//if it has been past X minutes move to waiting zone
	};

	return App;

})();