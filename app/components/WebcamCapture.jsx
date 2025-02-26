import { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import '../styles/app.css';

export default function WebcamCapture() {
  const webcamRef = useRef(null);
  const [Webcam,setWebcam] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [flash, setFlash] = useState(false);


 useEffect(() => {
    // Dynamically import react-webcam on the client side
    import("react-webcam")
      .then((mod) => {
        setWebcam(() => mod.default);
      })
      .catch((err) => console.error("Failed to load react-webcam:", err));
  }, []);


  const toggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };

  const takePhoto = () =>{
    if (photos.length >= 20) return;

    if (webcamRef.current){
      setFlash(true);
      setTimeout(() => setFlash(false),1000);
      
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc){
        setPhotos((prev) => [...prev, imageSrc]);
        console.log("Photo captured:",imageSrc);
      }else{
        console.log("Failed to capture image");
      }
      
    }
  }

  const deletePhoto = (index) => {
    setPhotos((prev) => prev.filter((_,i) => i !== index));
  }


  return (
    <div className="webcam-container">
      <h1>Club Cam</h1>

      

      {/* Webcam Feed or Placeholder */}
      <div className="webcam-box">
        
        {flash && 
          <div className="flash-overlay">
            <img src="/chaselovelogotext.png" alt="logo" className="flash-logo"></img>
          </div>}

        {isCameraOn && Webcam? (
          <Webcam ref={webcamRef} className="webcam-feed" screenshotFormat="image/png" />
        ) : (
          <p className="webcam-placeholder">Camera is off</p>
        )}
      </div>

      {/* Start/Stop Button */}
      <button onClick={toggleCamera} className="webcam-toggle-btn">
        {isCameraOn ? "Stop Camera" : "Start Camera"}
      </button>

      {/* Take Photo Button (Disabled if limit reached) */}
      <button onClick={takePhoto} className="photo-btn" disabled={photos.length >= 20}>
        {photos.length >= 20 ? "Photo Limit Reached" : "Take Photo"}
      </button>

      {/* Display Captured Photos */}
      {photos.length > 0 && (
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo} alt={`Snapshot ${index + 1}`} />
              <button className="delete-btn" onClick={() => deletePhoto(index)}><FiX className="x-icon"></FiX></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
