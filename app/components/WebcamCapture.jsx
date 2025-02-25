import { useState, useEffect, useRef } from "react";

export default function WebcamCapture() {
  const webcamRef = useRef(null);
  const [Webcam, setWebcam] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    import("react-webcam")
      .then((mod) => {
        console.log("✅ Webcam module loaded:", mod);
        setWebcam(() => mod.default);
      })
      .catch((err) => {
        console.error("❌ Failed to load react-webcam:", err);
        setError("Failed to load webcam.");
      });
  }, []);

  return (
    <div>
      <h1>Simple Webcam Preview</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {Webcam ? <Webcam ref={webcamRef} /> : <p>Loading Webcam...</p>}
    </div>
  );
}
