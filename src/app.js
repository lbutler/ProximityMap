var PROXIMITY = PROXIMITY || {};

PROXIMITY.App = (function() {
	'use strict';

	var App = function App() {

		this.beacons = {};
		this.waitingZone = null;
		this.story = null;
		this.zones = {};

		var self = this;
		this._StaleSignalsIntervalId = window.setInterval( function(){ self._findStaleSignals.apply(self); } , 1000);

	};

	App.prototype.addBeacon = function(beacon) {
		beacon.setCurrentZone(this.waitingZone);
		beacon.lastMessage = null;
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
				this.story.updateStory(beacon, this.zones[zoneId], "entered");

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
			if( beacon.lastMessage !== null && Date.now() - beacon.lastMessage > 20000 ) {
				this.story.updateStory(beacon, beacon.currentZone, "left");

				// TODO: Make a return to waiting zone function
				beacon.setCurrentZone(this.waitingZone, 0);
				beacon.lastMessage = null;
				$( beacon.dom ).css( "padding-left", "0%" ).css( "padding-top", "0%" );
			}
		}
	};

	return App;

})();