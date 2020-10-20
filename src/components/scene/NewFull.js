import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, draco, Html } from 'drei';

function Model({ url, props }) {
  const group = useRef();
  const { nodes, materials } = useLoader(
    GLTFLoader,
    url,
    draco('/draco-gltf/')
  );
  const [active, setActive] = useState(false);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onClick={() => setActive(!active)}
    >
      <mesh
        material={materials['Matcap.003']}
        geometry={nodes.Sphere003.geometry}
        position={[-1.73, 0.32, -0.82]}
        rotation={[-3, 0, -3]}
      >
        <meshStandardMaterial
          attach='material'
          color={active ? 'grey' : '#023B54'}
        />
        {/* left eye */}
      </mesh>
      <mesh
        material={materials['Matcap.003']}
        geometry={nodes.Sphere002.geometry}
      >
        <meshStandardMaterial
          attach='material'
          color={active ? 'grey' : '#023B54'}
        />
        {/* right eye */}
      </mesh>
      <mesh
        material={materials['Matcap.001']}
        material-metalness={0.6}
        material-roughness={0.6}
        geometry={nodes.Sphere001.geometry}
        position={[-1.73, 0.32, -0.82]}
        rotation={[-3, 0, -3]}
      >
        <meshStandardMaterial
          attach='material'
          color={active ? '#023B54' : 'grey'}
        />
        {/* first mask*/}
      </mesh>
      <mesh
        material={materials['Matcap.001']}
        geometry={nodes.Sphere000.geometry}
        material-metalness={0.6}
      >
        <meshStandardMaterial
          attach='material'
          color={active ? '#023B54' : 'grey'}
        />
        {/* second mask */}
      </mesh>
      <mesh
        material={materials['Matcap.002']}
        material-color='#000002'
        geometry={nodes.Plane000.geometry}
        position={[-1.73, 0.32, -0.82]}
        rotation={[-3, 0, -3]}
      />
      <mesh
        material={materials['Matcap.002']}
        material-color='#000002'
        geometry={nodes.Plane001.geometry}
      />
    </group>
  );
}

export default function NewFull() {
  return (
    <>
      <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 6], fov: 70 }}>
        <ambientLight intensity={0.6} />
        <pointLight intensity={1.6} position={[-10, -25, -10]} />
        <spotLight
          intensity={1.35}
          angle={Math.PI / 8}
          position={[25, 25, 15]}
        />
        <Suspense
          fallback={
            <Html center scaleFactor={15}>
              Loading...
            </Html>
          }
        >
          <Model url='/LatestMask.glb' />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  );
}
