import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam'


function App() {
  const webcamRef = useRef(null)
  const [ screenShot, setScreenShot ] = useState(null)

  const handleCapture = useCallback(() => {
    const src = webcamRef.current.getScreenshot()
    setScreenShot(src)
  })

  return (
    <div>
      <Webcam
        audio={false}
        screenshotFormat='image/png'
      />
      <button>Take Picture</button>
      {
        screenShot ?
        <img src={screenShot} />
        :
        null
      }
    </div>
  );
}

export default App;
