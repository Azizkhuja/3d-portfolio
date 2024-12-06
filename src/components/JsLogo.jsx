import { useGSAP } from '@gsap/react';
import { Center } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const JsLogo = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const { nodes, materials } = useGLTF('/models/javascript_1.glb');

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
        r.rotation.set(0, 0, 2); // Reset rotation to face forward
      });

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: position,
    },
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 1 }, (_, index) => (
          <group
            key={index}
            ref={getRef}
            scale={0.2 * (index + 1)} // Adjust scaling for layered effect
          >
            <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.mat_3220964} />
          </group>
        ))}
      </group>
    </Center>
  );
};

useGLTF.preload('/models/javascript_1.glb');

export default JsLogo;
