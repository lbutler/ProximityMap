var PROXIMITY = PROXIMITY || {};

PROXIMITY.Beacon = (function() {
	'use strict';

	var Beacon = function Beacon(uuid, name, imgUrl) {

		this.uuid = uuid;
		this.name = name;
		this.imgUrl = imgUrl;
		this.currentZone = null;
		this.dom = null;
		this.accuracy = 0;
		this.lastMessage = null;
	};

	Beacon.prototype.setCurrentZone = function(zone) {
		
		if(this.currentZone === null){
			this.createDomItem(zone);
		} else {
			$(this.dom).detach().appendTo(zone.dom);
			this.currentZone = zone;
		}

	};

	Beacon.prototype.createDomItem = function(zone) {
		this.dom = $("<a href='#' data-name='"+this.name+"' class='floating-head hover-head centre'><img src='"+this.imgUrl+"'></a>").appendTo(zone)[0];
		this.currentZone = zone;
	};


	return Beacon;

})();