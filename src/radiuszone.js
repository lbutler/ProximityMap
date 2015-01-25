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
			var distanceFromCentre = self._accuracyToPixel( $(this).attr('data-accuracy') );
			var x = distanceFromCentre * Math.cos(degree * index / (180/Math.PI));
			var y = distanceFromCentre * Math.sin(degree * index / (180/Math.PI));
			$( this ).css( "padding-left", (50 + x) + "%" ).css( "padding-top", (50 - y) + "%" );
		});
	};

	RadiusZone.prototype.updateDomForSingleBeacon = function(beacon) {
		//TODO: This method as below
		//single child object update, this will be for distance updates
		this.updateDomForAllBeacons();
	};


	RadiusZone.prototype._accuracyToPixel = function(accuracy) {
		var max = 45; //~61m
		var min = 10; //~0.2m

		//Log graph, as you start walking away it quickly moves away from
		//the centre and then will flatten out
		var pixelDistance = Math.log10(accuracy)*14+20;
		console.log(accuracy + " " +pixelDistance);


		if ( pixelDistance >= min && pixelDistance <= max ) {
			return pixelDistance;
		} else {
			return pixelDistance > min ? max : min;
		}

	};

	return RadiusZone;

})();