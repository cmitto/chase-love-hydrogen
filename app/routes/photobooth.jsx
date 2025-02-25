import WebcamCapture from "../components/WebcamCapture";

export const meta = () =>{
    return [{title: 'Chase Love Club | Photobooth'}];
}


export default function PhotoBoothPage() {
  return (
    <div>
      <WebcamCapture />
    </div>
  );
}
