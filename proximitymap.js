var planetImages = [
'http://imgsrc.hubblesite.org/hu/db/images/hs-2003-28-a-thumb.jpg',
'http://imgsrc.hubblesite.org/hu/db/images/hs-1994-02-c-thumb.jpg',
'http://imgsrc.hubblesite.org/hu/db/images/hs-2005-37-a-thumb.jpg',
'http://imgsrc.hubblesite.org/hu/db/images/hs-2010-26-a-thumb.jpg',
'http://imgsrc.hubblesite.org/hu/db/images/hs-2004-27-a-thumb.jpg',
'http://imgsrc.hubblesite.org/hu/db/images/hs-1992-17-a-thumb.jpg',
'http://imgsrc.hubblesite.org/hu/db/images/hs-2004-32-d-thumb.jpg',
];

var names = [
'Peter',
'Michael',
'Alan',
'Linda',
'Mark',
'Jack',
'Philip'
];


$( "#js-create" ).click(function() {
  var image = planetImages[randomIntFromInterval(0,6)];
  var name = names[randomIntFromInterval(0,names.length-1)];
  $( '.holding-zone' ).append( "<a id='moveAround' href='#' data-name='"+name+"' class='move-animation floating-img' style='transform: rotate(0deg) translate(0em) rotate(0deg); opacity: 100;'><img src='"+image+"'></a>" );

});

$( "#js-add" ).click(function() {

	var toRemove = $( ".holding-zone a.move-animation:nth-child("+randomIntFromInterval(1,$( ".holding-zone a.move-animation").length)+")" );
	var clone = toRemove.clone();
  toRemove.css( "opacity","0" );
  toRemove.css( "height","0" );
  toRemove.css( "width","0" );
  window.setTimeout( function(){
  	toRemove.remove();
	  $( '#floating-heads' ).append(clone);
  }, 400);

  window.setTimeout(ArrangeItems, 500);
});

$( "#js-remove" ).click(function() {
  $( '#floating-heads a.move-animation:last-child' ).css( "transform","rotate(0deg) translate(0em) rotate(0deg)" );
  $( '#floating-heads a.move-animation:last-child' ).css( "opacity","0" );
  window.setTimeout( function(){
  	var clone = $('#floating-heads a.move-animation:last-child' ).detach();
  	$( '.holding-zone' ).append(clone);
  	window.setTimeout( function(){ clone.css( "opacity","100" ); }, 100);
    ArrangeItems();
  }, 400);
});

$( "#js-arrange-items" ).click(function(){
	ArrangeItems();
});

function ArrangeItems(){

	var amount = $("#floating-heads .move-animation").length;
	var degree = 360 / amount;
	var distance, angle;

	$("#floating-heads .move-animation").each(function(index) {
	  distance = randomIntFromInterval(5,16)
	  angle = degree * index;
	  $( this ).css( "transform","rotate("+angle+"deg) translate("+distance+"em) rotate(-"+angle+"deg)" );
	});

}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}