var PROXIMITY = PROXIMITY || {};

PROXIMITY.Story = (function() {
	'use strict';

	var Story = function Story(dom) {

		this.dom = dom;
		this.count = 0;
		this.max = 20;

	};

	Story.prototype.updateStory = function(beacon, zone, action) {

		$( this.dom ).prepend( "<li><b>" + beacon.name + "</b> has " + action + " <b>" + zone.name + "</b> <span data-livestamp='" + Date.now()/1000 + "'></span>.</li>");
		this.count++;
		if(this.count > this.max) {
			$( this.dom ).find("li").slice(-10).remove();
			this.count -= 10;
		}
	};


	return Story;

})();