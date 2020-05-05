import React, { Fragment, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import FaceV1 from './Facev1';

import '../App.css';

const IndexPage = () => {
  const d = 8.25;
  return (
    <Fragment>
      <Canvas shadowMap pixelRatio={window.devicePixelRatio}>
        <hemisphereLight
          skyColor={'black'}
          groundColor={0xffffff}
          intensity={0.68}
          position={[0, 50, 0]}
        />
        <directionalLight
          position={[-8, 12, 8]}
          shadow-camera-left={d * -1}
          shadow-camera-bottom={d * -1}
          shadow-camera-right={d}
          shadow-camera-top={d}
          shadow-camera-near={0.1}
          shadow-camera-far={1500}
          castShadow
        />
        <Suspense fallback={null}>
          <FaceV1 />
        </Suspense>
      </Canvas>
    </Fragment>
  );
};

export default IndexPage;
