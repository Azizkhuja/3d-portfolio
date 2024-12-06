import { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AndroidLogo = (props) => {
  const group = useRef();
  const { nodes } = useGLTF('/models/android_bug.glb');
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(group.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=1' : `-=${Math.PI * 2}`,
        duration: 6,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      scale={1.5}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.477}>
          <group name="Root">
            <group name="Armature" position={[0, 0, -0.854]}>
              <primitive object={nodes.Armature_rootJoint} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/android_bug.glb');

export default AndroidLogo;
