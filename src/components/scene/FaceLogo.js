import React, { Suspense } from 'react';
import { Canvas, Dom } from 'react-three-fiber';

import Geisha2 from './Geisha2';

const FaceLogo = () => {
  return (
    <>
      <Canvas
        gl={{ alpha: true }}
        camera={{ position: [0, 0, 6], fov: 70 }}
        pixelRatio={window.devicePixelRatio}
      >
        <ambientLight intensity={0.6} />
        <pointLight intensity={1.6} position={[-10, -25, -10]} />
        <spotLight
          intensity={1.35}
          angle={Math.PI / 8}
          position={[25, 25, 15]}
        />
        <Suspense
          fallback={<Dom center className='loading' children='Loading...' />}
        >
          <Geisha2 />
        </Suspense>
      </Canvas>
    </>
  );
};

export default FaceLogo;
