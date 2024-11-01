import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet'

// Fixing default icon issue for Leaflet markers
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { list } from './TollList';
import circle from '../../pictures/Toll/round.png'

// const circleIcon = new L.Icon ({
//     iconUrl : './scr/pictures/Toll/Circle.png"',
//     iconSize : [35,35], // size of the icon
//     iconAnchor : [22,94], // point of the icon which will correspond to marker's location
//     popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
//   })

  function circleIcon (_iconSize){
    return L.icon({
        iconUrl: circle,
        iconSize: _iconSize
    })
  }
  
  
// let circleIcon = new L.Icon({
//     iconUrl: 'Art.2/Bilder/Circle.png',
// })
// let DefaultIcon = L.icon({
//     iconUrl: markerIcon,
//     shadowUrl: markerShadow,
// });
// L.Marker.prototype.options.icon = DefaultIcon;
// L.Marker.prototype.options.icon = circleIcon;

export default function MapTest() {
  const [visibleMarkerIndex, setVisibleMarkerIndex] = useState(-1);

  // Function to check if element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function isOutOfViewportFromBottom(el) {
    const rect = el.getBoundingClientRect();
        return rect.top > (window.innerHeight || document.documentElement.clientHeight);
  }

    const scroll = () => { 
        const handleScroll = () => {
            const marker0 = document.getElementById('marker-0');
            if (marker0 && isOutOfViewportFromBottom(marker0)) {
            setVisibleMarkerIndex(-1);
            } else {
            list.forEach((_, index) => {
                const element = document.getElementById(`marker-${index}`);
                if (element && isInViewport(element)) {
                setVisibleMarkerIndex(index);
                }
            });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }; 
    }

    useEffect(() => {
        scroll()
    }, [list]);

    console.log(visibleMarkerIndex)

    return (
        <>
        {/* Fullscreen Fixed Map */}
        <div id="mapcontainer" style={{ height: '100vh', width: '100%' }}>
            <MapContainer
            center={[59.269294, 11.028108]}
            zoom={11}
            scrollWheelZoom={false}
            dragging={false}
            doubleClickZoom={false}
            style={{ height: '100%', width: '100%' }}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {list.map((position, index) =>
                index <= visibleMarkerIndex ? (
                <Marker key={index} position={position.position} icon={circleIcon(8)}>
                    {/* <p>{index + 1}</p> */}
                </Marker>
                ) : null
            )}
            </MapContainer>
        </div>



        {/* Content below the map */}
        <section>
            {list.map((_, index) => (
            <div key={index} className='markers' id={`marker-${index}`}>
                <h2>Markør {index + 1}:  <br /> {_.toll} </h2>
            </div>
            ))}
        </section>
        </>
    );
}