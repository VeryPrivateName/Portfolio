import React, { Suspense } from 'react';
import { Canvas, Dom } from 'react-three-fiber';

import FaceV1 from './Facev1';

const FaceLogo = () => {
  return (
    <>
      <Canvas pixelRatio={window.devicePixelRatio}>
        <ambientLight intensity={1.1} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          intensity={1.05}
          angle={Math.PI / 8}
          position={[25, 25, 15]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Suspense
          fallback={<Dom center className='loading' children='Loading...' />}
        >
          {/* <Scene /> */}
          <FaceV1 />
        </Suspense>
      </Canvas>
    </>
  );
};

export default FaceLogo;
