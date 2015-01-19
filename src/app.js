var PROXIMITY = PROXIMITY || {};

PROXIMITY.App = (function() {
	'use strict';

	var App = function App() {

		this.beacons = {};
		this.waitingZone = null;
		this.zones = {};

		var self = this;
		this._StaleSignalsIntervalId = window.setInterval( function(){ self._findStaleSignals.apply(self); } , 1000);

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
		var beacon = this.beacons[beaconId];
		if (beacon !== "undefined") { //? cant remember

			if (beacon.currentZone.uuid === zoneId) {
				this._updateBeaconAccuracy(beaconId, accuracy);

			} else {
				this._moveBeacon(beaconId, accuracy, zoneId);

			}
		}
	};


	App.prototype._moveBeacon = function(beaconId, accuracy, zoneId) {
		var beacon = this.beacons[beaconId];
		var oldZone = beacon.currentZone;
		beacon.setCurrentZone(this.zones[zoneId], accuracy);

		oldZone.updateDomForAllBeacons();
		beacon.currentZone.updateDomForAllBeacons();
	};

	App.prototype._updateBeaconAccuracy = function(beaconId, accuracy) {
		var beacon = this.beacons[beaconId];
		beacon.setAccuracy(accuracy);
		beacon.currentZone.updateDomForSingleBeacon(beacon);
	};

	App.prototype._findStaleSignals = function() {
		for ( var uuid in this.beacons) {
			var beacon = this.beacons[uuid];
			if( Date.now() - beacon.lastMessage > 10000 ) {
				beacon.setCurrentZone(this.waitingZone, 0);
				beacon.lastMessage = null;
			}
		}
	};

	return App;

})();