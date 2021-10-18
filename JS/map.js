function mapContent(){
    let api_key = 'A4GpLjsG16mUcN1DLiY08diXsXX6GeFR';
    let latAndLong = {lat: 40.7391, lng: -73.99093}; 
    let zoomLevel = 14;
    let yourAddress = 'MONTICELLO';

    let map = tt.map({
        container: 'map',
        key: api_key,
        center: latAndLong,
        zoom: zoomLevel
    });

    //var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);
     
     // FOR CUSTOM MARKER
     let customMarker = document.createElement('div');
    customMarker.id = 'marker';
    let marker = new tt.Marker({element: customMarker}).setLngLat(latAndLong).addTo(map);

    let popupOffsets = {
      top: [0, 0],
      bottom: [0, -70],
      'bottom-right': [0, -70],
      'bottom-left': [0, -70],
      left: [25, -35],
      right: [-25, -35]
    }

    let popup = new tt.Popup({offset: popupOffsets}).setHTML(yourAddress);
    marker.setPopup(popup).togglePopup();

}

