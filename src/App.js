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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/png'
        />
        <button onClick={handleCapture}>Take Picture</button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {
          screenShots.length > 0 ? renderScreenShots() : null
        }
      </div>
    </div>
  );
}

export default App;
