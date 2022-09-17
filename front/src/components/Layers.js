import "../styles/Layers.css"
export default function Layers({ setMapStyle }) {
  return (
    <div className="layers-sub">
      <div className="layer-1 layer" value="mapbox://styles/risinglight/cl83dlzfp003n15priila25c1" onClick={(e) => setMapStyle()}></div>
      <div className="layer-2 layer" value="mapbox://styles/risinglight/cl83dlzfp003n15priila25c1" onClick={(e) => setMapStyle()}></div>
      <div className="layer-3 layer" value="mapbox://styles/risinglight/cl83dlzfp003n15priila25c1" onClick={(e) => setMapStyle()}></div>
      <div className="layer-4 layer" value="mapbox://styles/risinglight/cl83dlzfp003n15priila25c1" onClick={(e) => setMapStyle()}></div>
    </div>
  );
}