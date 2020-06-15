import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(
    GLTFLoader,
    '/faceV1.gltf'
  );

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!hovered) {
      group.current.rotation.y += 0.01;
      group.current.rotation.x += 0.02;
      group.current.rotation.z += 0.01;
    }
    if (hovered && active) {
      group.current.rotation.y += 0.04;
      group.current.rotation.x += 0.08;
      group.current.rotation.z += 0.01;
    } else {
      group.current.rotation.y += 0.0;
      group.current.rotation.x += 0.0;
      group.current.rotation.z += 0.0;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <scene name='Scene'>
        <group
          name='fbCamObj'
          position={[20.49, 0.57, 0.47]}
          rotation={[1.62, 0.03, -1.56]}
        />
        <group
          name='fbCamObj001'
          position={[-0.26, 1.03, 19.25]}
          rotation={[1.52, 0, 0.01]}
        />
        <mesh
          material={materials.kt_facebuilder_material}
          geometry={nodes.FaceBuilderHead.geometry}
          name='FaceBuilderHead'
        />
      </scene>
    </group>
  );
}
