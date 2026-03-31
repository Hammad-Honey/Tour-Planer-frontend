// import { Fragment } from "react";
// import { useMap } from "../../contexts/MapContext";
// export default function ResultView() {
//   // const { markers, mapRef} = useMap();

//   const markersList = () => {
//     return markers.map((item, key) => {
//       const loger = () => {
//         //Here we goto the location on the map
//         console.log(item.placeData.area_name);
//       };

//       return (
//         <Fragment key={key}>
//           <div className="resultItemDiv">
//             <button onClick={loger}>
//               <div>{item.placeData.area_name}</div>
//             </button>
//             <div>{item.placeData.exploration_time}</div>
//           </div>
//         </Fragment>
//       );
//     });
//   };

//   return <>{markersList()}</>;
