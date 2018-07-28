//wonsy

var templateListItem = document.getElementById('template-list-item').innerHTML;
Mustache.parse(templateListItem);

var listItems='';

for(var i = 0; i < sliderData.length; i++){
  listItems += Mustache.render(templateListItem, sliderData[i]);
}
console.log(listItems);

var pleaseShowCorrectly = document.getElementById('stache');

pleaseShowCorrectly.insertAdjacentHTML('beforeend', listItems);


// flickity
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// map

// Initialize and add the map
  window.initMap = function initMap() {
  // The location of Uluru
  var marker = [];
  var coordinations = sliderData[0].coords;

  // The map, centered at Uluru
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 5, center: coordinations});
  for(var i = 0; i < sliderData.length; i++){
      var slideCoords = sliderData[i].coords;
      marker[i] = new google.maps.Marker({position: slideCoords, map: map});
      addClick(marker[i], i);
  };

  function addClick(marker, index) {
    marker.addListener('click', function(){
      flkty.select(index);
    });
  }

  flkty.on('change', function(index) {
    map.panTo(sliderData[index].coords);
    map.setZoom(10);
  });



  // var marker = new google.maps.Marker({position: coordinations, map: map});
  //   for(var i = 0; i < sliderData.length; i++){
  //       var coordinations = sliderData[i].coords;
  //       var marker = new google.maps.Marker({position: coordinations, map: map});
  //       console.log(coordinations);
  //   };
};