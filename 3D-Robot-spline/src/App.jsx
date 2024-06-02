import React from 'react';
import Spline from '@splinetool/react-spline';
function App() {
  const sceneUrl = 'https://prod.spline.design/Hf2XlW86XlMaeSxK/scene.splinecode'; // Replace with your scene URL

  return (
    <div>
      <h1>My 3D Robot</h1>
      <Spline scene={sceneUrl} />
    </div>
  );
}

export default App
