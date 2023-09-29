// src/App.js
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Overlay from './Overlay';
import './App.css';

function App() {
  const [rtspURL, setRtspURL] = useState('YOUR_RTSP_URL');
  const [overlaySettings, setOverlaySettings] = useState({ text: '', x: 50, y: 50 });

  useEffect(() => {
    // Fetch overlay settings from the backend
    fetch('/api/overlay')
      .then((response) => response.json())
      .then((data) => setOverlaySettings(data))
      .catch((error) => console.error('Error fetching overlay settings:', error));
  }, []);

  return (
    <div className="App">
      <h1>Livestream App</h1>
      <ReactPlayer url={rtspURL} controls />
      <Overlay overlaySettings={overlaySettings} setOverlaySettings={setOverlaySettings} />
    </div>
  );
}

export default App;
