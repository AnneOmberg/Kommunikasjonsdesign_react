// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Fixing default icon issue for Leaflet markers
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//     iconUrl: markerIcon,
//     shadowUrl: markerShadow,
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// export default function Map() {
//   const [visibleMarkerIndex, setVisibleMarkerIndex] = useState(-1);

//   // Real marker coordinates (replace this array with your actual coordinates)
//   const markerCoordinates = [
//     { position: [59.225253, 10.916457], popup: "Marker 1: Rv. 110 – Seut" },
//     { position: [59.207374, 10.968305], popup: "Marker 2: Rv. 110 – Fredrikstadbrua øst" },
//     { position: [59.235725, 10.932217], popup: "Marker 3: Fv. 381 – Veumveien" },
//     { position: [59.243911, 10.981632], popup: "Marker 4: Fv. 109 – Råbekken" },
//     { position: [59.242653, 10.982024], popup: "Marker 5: Kv. – Dikeveien" },
//     { position: [59.239674, 10.991795], popup: "Marker 6: Kv. – Evjebekken" },
//     { position: [59.323444, 10.956405], popup: "Marker 7: Fv. 112 – Hauge bru" },
//     { position: [59.269294, 11.028108], popup: "Marker 8: Fv. 109 – Rolvsøysund" },
//     { position: [59.257960, 11.054326], popup: "Marker 9: Rv. 22 – Årum vest" },
//     { position: [59.232806, 11.054400], popup: "Marker 10: Fv. 107 – Vardeveien" },
//     { position: [59.214917, 11.083399], popup: "Marker 11: Fv. 130 – Skjærviken" },
//     { position: [59.271676, 11.129987], popup: "Marker 12: Rv. 22 – Hafslund syd" },
//     { position: [59.264743, 11.122296], popup: "Marker 13: Kv. Navestadveien" },
//     { position: [59.276222, 11.132943], popup: "Marker 14: Fv. 118 - Sarpsbru" },
//     { position: [59.295273, 11.064848], popup: "Marker 15: Fv. 114 – Grålum" },
//     { position: [59.296025, 11.069185], popup: "Marker 16: E6 – Rampeavkjøring Lekevoll fra sør" },
//     { position: [59.296672, 11.065751], popup: "Marker 17: E6 – Rampeavkjøring Lekevoll fra nord" },
//     { position: [59.305571, 11.042623], popup: "Marker 18: Fv. 118 – Kalnes" },
//     { position: [59.270763, 11.070972], popup: "Marker 19: Fv. 109 – Alvim vest" },
//     { position: [59.269200, 11.075840], popup: "Marker 20: Fv. 1168 – Alvimveien" },
//     { position: [59.276017, 11.084626], popup: "Marker 21: E6 – Rampeavkjøring Alvim fra nord" },
//     { position: [59.277506, 11.085907], popup: "Marker 22: E6 – Rampeavkjøring Alvim fra sør" },
//     { position: [59.293812, 11.075446], popup: "Marker 23: Kv. Tuneveien" },
//     { position: [59.250323, 11.014572], popup: "Marker 24: Fv. – Ny bru i Fredrikstad" }
//   ];

//   // Total scrollable height based on number of markers
//   const totalMarkers = markerCoordinates.length;
//   const totalScrollHeight = totalMarkers * 100; // Adjust the factor (100) for scroll sensitivity

//   const scrollListerner = () => {
//   const mapElement = document.getElementById("map");
//   const viewportHeight = window.innerHeight;
  
//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const totalScrollableHeight = document.body.scrollHeight - viewportHeight; // Total scrollable height
//     console.log("Sroll høyde", totalScrollableHeight)

//     // Calculate how many markers to show based on the percentage of scroll completed
//     const percentageScrolled = scrollY / totalScrollableHeight;
//     const markerToShow = Math.min(
//       Math.floor(percentageScrolled * markerCoordinates.length),
//       markerCoordinates.length - 1
//     );
//     console.log("Prosent scroll", percentageScrolled)
    
//     setVisibleMarkerIndex(markerToShow);
//     console.log("Markør", markerToShow)
//   };
  
//   const onScroll = () => {
//     const mapRect = mapElement.getBoundingClientRect();
//     // console.log(mapRect)
//     // Start handleScroll only when the map hits the top of the viewport
//     if (mapRect.top <= 0) {
//       handleScroll();
//     }
//   }

//   addEventListener('scroll', onScroll);
  
//   return () => {
//     removeEventListener('scroll', onScroll);
//   };
// };

//   useEffect(() => {
//    scrollListerner()
//   }, [totalMarkers, totalScrollHeight]);

//   return (
//     <>
//       {/* Fullscreen Fixed Map */}
//       <div id="map" style={{ position: 'sticky', top: 0, height: '100vh', width: '100%' }}>
//         <MapContainer
//           center={[59.269294, 11.028108]} // Initial center of the map
//           zoom={11}
//           scrollWheelZoom={false} // Disable scroll zooming
//           dragging={false}        // Disable dragging
//           style={{ height: '100%', width: '100%' }} // Fullscreen map
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />

//           {markerCoordinates.map((position, index) =>
//             index <= visibleMarkerIndex ? (
//               <Marker key={index} position={position.position}>
//                 <Popup>{position.popup}</Popup>
//                { console.log("Kordinater", position)}

//               </Marker>
//             ) : null
//           )}
//         </MapContainer>
//       </div>

//       {/* Content above the map */}
//       <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
//         <h1>Scroll to see the markers appear on the map</h1>
//       </div>
      
//       {/* Content below the map */}
//       <div style={{ height: '100vh', backgroundColor: '#d3d3d3', padding: '20px' }}>
//         <h1>This is some content below the map</h1>
//       </div> 
//     </>
//   );
// }


// const markerCoordinates = [
//     [59.225253, 10.916457], [59.207374, 10.968305], [59.235725, 10.932217], [59.243911, 10.981632], [59.242653, 10.982024], [59.239674, 10.991795], 
//     [59.323444, 10.956405], [59.269294, 11.028108], [59.257960, 11.054326], [59.232806, 11.054400], [59.214917, 11.083399], [59.271676, 11.129987], [59.264743, 11.122296], [59.276222, 11.132943], [59.295273, 11.064848], [59.296025, 11.069185], [59.296672, 11.065751], [59.305571, 11.042623], [59.270763, 11.070972], [59.269200, 11.075840], [59.276017, 11.084626], [59.277506, 11.085907], [59.293812, 11.075446], [59.250323, 11.014572]];

//     import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Fixing default icon issue for Leaflet markers
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//     iconUrl: markerIcon,
//     shadowUrl: markerShadow,
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// export default function Map() {
//   const [visibleMarkerIndex, setVisibleMarkerIndex] = useState(-1);

//   // Real marker coordinates (replace this array with your actual coordinates)
//   const markerCoordinates = [
//     { position: [59.225253, 10.916457], popup: "Marker 1: Rv. 110 – Seut" },
//     { position: [59.207374, 10.968305], popup: "Marker 2: Rv. 110 – Fredrikstadbrua øst" },
//     { position: [59.235725, 10.932217], popup: "Marker 3: Fv. 381 – Veumveien" },
//     { position: [59.243911, 10.981632], popup: "Marker 4: Fv. 109 – Råbekken" },
//     // ... (add more markers as needed)
//   ];

//   useEffect(() => {
//     const mapElement = document.getElementById("map");
//     const handleScroll = () => {
//       const mapRect = mapElement.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;

//       // Only calculate when the map is visible in the viewport
//       if (mapRect.top <= viewportHeight && mapRect.bottom >= 0) {
//         const scrollY = window.scrollY;
//         const mapHeight = mapElement.offsetHeight;
//         const mapOffsetTop = mapElement.offsetTop;
//         const scrollInsideMap = scrollY - mapOffsetTop;

//         // Calculate percentage of how much has been scrolled in the map section
//         const percentageScrolled = Math.min(scrollInsideMap / mapHeight, 1);

//         // Calculate the number of markers to show
//         const markerToShow = Math.min(
//           Math.floor(percentageScrolled * markerCoordinates.length),
//           markerCoordinates.length - 1
//         );

//         setVisibleMarkerIndex(markerToShow);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [markerCoordinates]);

//   return (
//     <>
//       {/* Content above the map */}
//       <div style={{ height: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
//         <h1>Scroll to see the markers appear on the map</h1>
//       </div>

//       {/* Sticky Map section */}
//       <div id="map" style={{ position: 'sticky', top: 0, height: '100vh', width: '100%' }}>
//         <MapContainer
//           center={[59.225253, 10.916457]} // Adjust the initial center of the map
//           zoom={11}
//           scrollWheelZoom={false} // Disable scroll zooming
//           dragging={false}        // Disable dragging
//           style={{ height: '100%', width: '100%' }} // Fullscreen map
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />

//           {markerCoordinates.map((marker, index) =>
//             index <= visibleMarkerIndex ? (
//               <Marker key={index} position={marker.position}>
//                 <Popup>{marker.popup}</Popup>
//               </Marker>
//             ) : null
//           )}
//         </MapContainer>
//       </div>

//       {/* Content below the map */}
//       <div style={{ height: '100vh', backgroundColor: '#d3d3d3', padding: '20px' }}>
//         <h1>This is some content below the map</h1>
//       </div>
//     </>
//   );
// }
