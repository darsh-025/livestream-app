// src/Overlay.js
import React from 'react';

function Overlay({ overlaySettings, setOverlaySettings }) {
  const handleTextChange = (e) => {
    setOverlaySettings({ ...overlaySettings, text: e.target.value });
  };

  const handlePositionChange = (e) => {
    const { name, value } = e.target;
    setOverlaySettings({ ...overlaySettings, [name]: value });
  };

  return (
    <div className="Overlay">
      <h2>Overlay Settings</h2>
      <input type="text" value={overlaySettings.text} onChange={handleTextChange} />
      <label>X Position:</label>
      <input
        type="number"
        name="x"
        value={overlaySettings.x}
        onChange={handlePositionChange}
      />
      <label>Y Position:</label>
      <input
        type="number"
        name="y"
        value={overlaySettings.y}
        onChange={handlePositionChange}
      />
      <div
        className="OverlayText"
        style={{
          position: 'absolute',
          top: `${overlaySettings.y}%`,
          left: `${overlaySettings.x}%`,
        }}
      >
        {overlaySettings.text}
      </div>
    </div>
  );
}

export default Overlay;
