var PROXIMITY = PROXIMITY || {};

PROXIMITY.Zone = (function() {
	'use strict';

	var Zone = function Zone(uuid, name, dom) {

		this.uuid = uuid;
		this.name = name;
		this.dom = dom;

	};

	Zone.prototype.updateDomForAllBeacons = function() {
		//TODO: This method as below
		//for each child object that is a beacon update its position on the radius map
	};

	Zone.prototype.updateDomForSingleBeacon = function(beacon) {
		//TODO: This method as below
		//single child object update, this will be for distance updates
	};

	return Zone;

})();