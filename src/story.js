var PROXIMITY = PROXIMITY || {};

PROXIMITY.Story = (function() {
	'use strict';

	var Story = function Story(dom) {

		this.dom = dom;

	};

	Story.prototype.updateStory = function(beacon, zone, action) {

		$( this.dom ).prepend( "<li><b>" + beacon.name + "</b> has " + action + " <b>" + zone.name + "</b> <span data-livestamp='" + Date.now()/1000 + "'></span>.</li>");

	};


	return Story;

})();