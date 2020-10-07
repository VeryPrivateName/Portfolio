import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { draco } from 'drei';
import { useSpring, animated } from 'react-spring/three';

export default function Model() {
  const group = useRef();
  const { nodes, materials } = useLoader(
    GLTFLoader,
    '/DARK2.glb',
    draco('/draco-gltf/')
  );

  useFrame(() => {
    if (active) {
      group.current.rotation.y += 0.0;
      group.current.rotation.x += 0.0;
      group.current.rotation.z += 0.0;
    } else {
      group.current.rotation.y += 0.01;
      group.current.rotation.x += 0.0001;
      group.current.rotation.z += 0.0001;
    }
  });

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const propsMask = useSpring({
    color: hovered ? '#063861' : 'grey',
  });
  const propsEye = useSpring({
    color: hovered ? 'grey' : '#094A64',
  });

  return (
    <group
      ref={group}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => setActive(!active)}
    >
      <mesh
        material={materials['Matcap.003']}
        geometry={nodes.Sphere003.geometry}
        position={[-1.73, 0.32, -0.82]}
        rotation={[-3, 0, -3]}
      >
        <animated.meshStandardMaterial
          attach='material'
          color={propsEye.color}
        />
        {/* kaires akys */}
      </mesh>
      <mesh
        material={materials['Matcap.003']}
        geometry={nodes.Sphere002.geometry}
      >
        <animated.meshStandardMaterial
          attach='material'
          color={propsEye.color}
        />
        {/* desines akys */}
      </mesh>
      <mesh
        material={materials['Matcap.001']}
        material-metalness={0.6}
        material-roughness={0.6}
        geometry={nodes.Sphere001.geometry}
        position={[-1.73, 0.32, -0.82]}
        rotation={[-3, 0, -3]}
      >
        <animated.meshStandardMaterial
          attach='material'
          color={propsMask.color}
        />
        {/* pirma kauke */}
      </mesh>
      <mesh
        material={materials['Matcap.001']}
        geometry={nodes.Sphere000.geometry}
        material-metalness={0.6}
      >
        <animated.meshStandardMaterial
          attach='material'
          color={propsMask.color}
        />
        {/* antra kauke */}
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
