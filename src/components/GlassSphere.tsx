import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { type Mesh } from 'three';

interface SphereProps {
  position: [number, number, number];
  size?: number;
  color?: string;
  speed?: number;
}

function AnimatedSphere({ position, size = 0.8, color = '#6366f1', speed = 0.3 }: SphereProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.3;
    meshRef.current.position.x = position[0] + Math.cos(t * 0.7) * 0.2;
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.25}
        roughness={0.05}
        metalness={0.1}
        transmission={0.6}
        thickness={1.5}
        clearcoat={0.3}
        clearcoatRoughness={0.4}
        envMapIntensity={0.8}
      />
    </mesh>
  );
}

interface GlassSphereProps {
  className?: string;
  count?: number;
}

export default function GlassSphereContainer({ className = '', count = 2 }: GlassSphereProps) {
  const spheres: SphereProps[] = [
    { position: [-2.5, 1.5, -2], size: 0.7, color: '#6366f1', speed: 0.3 },
    { position: [2, -0.5, -1], size: 0.5, color: '#a5b4fc', speed: 0.25 },
  ];

  if (count > 2) {
    spheres.push({ position: [0.5, 2.5, -3], size: 0.4, color: '#818cf8', speed: 0.35 });
  }

  return (
    <div className={`pointer-events-none ${className}`} style={{ perspective: '1000px' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-3, 2, -3]} intensity={0.4} />
        <pointLight position={[0, 0, 3]} intensity={0.3} />
        {spheres.slice(0, count).map((s, i) => (
          <AnimatedSphere key={i} {...s} />
        ))}
      </Canvas>
    </div>
  );
}
