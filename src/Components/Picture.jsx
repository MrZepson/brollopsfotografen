import { useRef, useEffect } from "react";

export default function Picture() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    console.log(canvas);
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
