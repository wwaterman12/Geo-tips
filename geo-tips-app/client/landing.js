function myMap() {
  let mapCanvas = document.getElementById("map");
  let myCenter= new google.maps.LatLng(40.744679,-73.948542);
  let mapOptions = {center: myCenter, zoom: 12};
  let map = new google.maps.Map(mapCanvas, mapOptions);
  google.maps.event.addListener(map, 'rightclick', function(event) {
    placeMarker(map, event.latLng);
  });
  // google.maps.event.addListener(map, 'rightclick', function() {
  //   let i = markers.length - 1;
  //   markers[i].setMap(null);
  //   markers.pop();
    // $.delete = function(/api/notes/markers.id, data, callback, delete){

    //   if ( $.isFunction(data) ){
    //     type = type || callback,
    //         callback = data,
    //         data = {}
    //   }

    //   return $.ajax({
    //     url: url,
    //     type: 'DELETE',
    //     success: callback,
    //     data: data,
    //     contentType: type
    //   });
    // }

  })
}

markers = [];

function placeMarker(map, location) {
  let marker = new google.maps.Marker({
    position: location,
    map: map
  });
  let author = document.getElementById('author');
  let content = document.getElementById('note');
  let infowindow = new google.maps.InfoWindow({
    content: author.value + ' says: <br>' + content.value
  });

  infowindow.open(map,marker);
  markers.push(marker);

  // $.post('/api/notes', {
  //   Author: author.value,
  //   Note: content.value
  // },
  // (data, status) => {
  //       console.log("Data: " + data + "\nStatus: " + status);
  //   });

  author.value = '';
  content.value = '';
}
