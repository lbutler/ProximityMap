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
		var listOfBeacons = $(this.dom).children('.floating-head');
		var amount = listOfBeacons.length;
		var degree = 360 / amount;

		var self = this;

		listOfBeacons.each(function(index) {
			var distanceFromCentre = self._accuracyToPixel( $(this).data('accuracy') );
			var x = distanceFromCentre * Math.cos(degree * index / (180/Math.PI));
			var y = distanceFromCentre * Math.sin(degree * index / (180/Math.PI));
			$( this ).css( "padding-left", (50 + x) + "%" ).css( "padding-top", (50 - y) + "%" );
		});
	};

	RadiusZone.prototype.updateDomForSingleBeacon = function(beacon) {
		//TODO: This method as below
		//single child object update, this will be for distance updates
	};

	RadiusZone.prototype._accuracyToPixel = function(accuracy) {
		//TODO: Update issue below
		//Hard coded in this demo but should make it set in the object
		var max = 100;
		var min = 10;

		if ( accuracy >= min && x <= max ) {
			return accuracy;
		} else	{
			return accuracy > min ? max : min;
		}

	};

	return RadiusZone;

})();