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

	Beacon.prototype.setCurrentZone = function(zone , accuracy) {
		
		if(this.currentZone === null){
			this.createDomItem(zone);
		} else {
			$(this.dom).detach().appendTo(zone.dom);
			this.currentZone = zone;
		}

		this.accuracy = accuracy;
		this._updateLastMessageTime();
	};

	Beacon.prototype.setAccuracy = function(accuracy) {
		this.accuracy = accuracy;
		this._updateLastMessageTime();
	};

	Beacon.prototype.createDomItem = function(zone) {
		this.dom = $("<a href='#' data-name='"+this.name+"' class='floating-head hover-head centre'><img src='"+this.imgUrl+"'></a>").appendTo(zone.dom)[0];
		this.currentZone = zone;
	};

	Beacon.prototype._updateLastMessageTime = function() {
		this.lastMessage = Date.now();
	};


	return Beacon;

})();