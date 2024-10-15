import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// export default function Map() {
    // const centerLat = 59.225253
    // const centerLong = 10.916457
    // const one = [{Lat: 59.225253}, {Long: 10.916457}]
    // 59.225253, 10.916457
    // 59.207374, 10.968305
    // 59.235725, 10.932217
    // 59.243911, 10.981632
    // 59.242653, 10.982024
    // 59.239674, 10.991795
    // 59.323444, 10.956405
    // 59.269294, 11.028108
    // 59.257960, 11.054326
    // 59.232806, 11.054400
    // 59.214917, 11.083399
    // 59.271676, 11.129987
    // 59.264743, 11.122296
    // 59.276222, 11.132943
    // 59.295273, 11.064848
    // 59.296025, 11.069185
    // 59.296672, 11.065751
    // 59.305571, 11.042623
    // 59.270763, 11.070972
    // 59.269200, 11.075840
    // 59.276017, 11.084626
    // 59.277506, 11.085907
    // 59.293812, 11.075446
    // 59.250323, 11.014572

    export default function Map() {
        const markers = [
          { position: [59.225253, 10.916457], popup: "Marker 1: London" },
          { position: [59.207374, 10.968305], popup: "Marker 2: Location near London" },
          { position: [59.235725, 10.932217], popup: "Marker 3: Another location" },
          { position: [59.243911, 10.981632], popup: "Marker 1: London" },
          { position: [59.242653, 10.982024], popup: "Marker 2: Location near London" },
          { position: [59.239674, 10.991795], popup: "Marker 3: Another location" },
          { position: [], popup: "Marker 1: London" },
          { position: [], popup: "Marker 2: Location near London" },
          { position: [], popup: "Marker 3: Another location" },
          { position: [], popup: "Marker 1: London" },
          { position: [], popup: "Marker 2: Location near London" },
          { position: [], popup: "Marker 3: Another location" },
          { position: [], popup: "Marker 1: London" },
          { position: [], popup: "Marker 2: Location near London" },
          { position: [], popup: "Marker 3: Another location" },
          { position: [], popup: "Marker 1: London" },
          { position: [], popup: "Marker 2: Location near London" },
          { position: [], popup: "Marker 3: Another location" },
        ];

    // 
    // 
    // 59.323444, 10.956405
    // 59.269294, 11.028108
    // 59.257960, 11.054326
    // 59.232806, 11.054400
    // 59.214917, 11.083399
    // 59.271676, 11.129987
    // 59.264743, 11.122296
    // 59.276222, 11.132943
    // 59.295273, 11.064848
    // 59.296025, 11.069185
    // 59.296672, 11.065751
    // 59.305571, 11.042623
    // 59.270763, 11.070972
    // 59.269200, 11.075840
    // 59.276017, 11.084626
    // 59.277506, 11.085907
    // 59.293812, 11.075446
    // 59.250323, 11.014572
      
        return (
          <MapContainer
            center={[59.250323, 11.014572]} // Center the map
            zoom={11.5} // Set the zoom level
            style={{ height: '500px', width: '100%' }} // Define map size
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Use OpenStreetMap tiles
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position}>
                <Popup>{marker.popup}</Popup>
              </Marker>
            ))}
          </MapContainer>
  );
}
