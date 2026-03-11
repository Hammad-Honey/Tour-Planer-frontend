import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import mapboxgl from 'mapbox-gl';
import reactlogo from '../../assets/react.svg'

const Marker = ({ map, coordinates, data }) => {
  const markerRef = useRef();
  const markerElementRef = useRef(document.createElement('div'));

  // initialize the marker when the component mounts
  useEffect(() => {
    markerRef.current = new mapboxgl.Marker({
      element: markerElementRef.current
    })
      .setLngLat(coordinates)
      .addTo(map);

    // remove the marker when the component unmounts
    return () => {
      if (markerRef.current) {
        markerRef.current.remove();
      }
    };
  }, []);

  // use createPortal to render JSX content into the marker element
  return (
    <>
      {createPortal(
        <div className="custom-marker">
          <img src={`${reactlogo}`} alt={data.city} style={{ width: '32px', height: '32px' }} />
          <span className="marker-label">{data.city}</span>
        </div>,
        markerElementRef.current
      )}
    </>
  )
};


export default Marker;

// // usage example in a parent component
// /*
// <Marker
//   map={map} // Mapbox GL JS map instance
//   coordinates={[-74.0060, 40.7128]} // marker coordinates
//   data={{ city: 'New York City' }} // custom data for the marker
// />