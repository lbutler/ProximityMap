var PROXIMITY = PROXIMITY || {};

PROXIMITY.RadiusZone = (function() {
	'use strict';

	var RadiusZone = function RadiusZone(uuid, name, dom) {

		PROXIMITY.Zone.call(this, uuid, name, dom);

	};

	// subclass extends superclass
	RadiusZone.prototype = Object.create(PROXIMITY.Zone.prototype);
	RadiusZone.prototype.constructor = RadiusZone;

	RadiusZone.prototype.updateDomForAllBeacons = function() {
		//TODO: This method as below
		//for each child object that is a beacon update its position on the radius map
	};

	RadiusZone.prototype.updateDomForSingleBeacon = function(beacon) {
		//TODO: This method as below
		//single child object update, this will be for distance updates
	};

	return RadiusZone;

})();