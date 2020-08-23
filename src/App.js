import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam'


function App() {
  const webcamRef = useRef(null)
  const [ screenShots, setScreenShots ] = useState([])

  const handleCapture = useCallback(() => {
    const src = webcamRef.current.getScreenshot()
    setScreenShots([ ...screenShots, src ])
  })

  const renderScreenShots = () => {
    return screenShots.map(shot => <img src={shot} />)
  }

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/png'
      />
      <button onClick={handleCapture}>Take Picture</button>
      {
        screenShots.length > 0 ? renderScreenShots() : null
      }
    </div>
  );
}

export default App;
