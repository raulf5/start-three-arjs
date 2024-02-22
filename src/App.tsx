import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { } from '@react-three/fiber';

function App() {

  return (
    <ARCanvas
      camera={{ position: [0, 0, 0] }}
      onCreated={({ gl }: { gl: THREE.WebGLRenderer }) => gl.setSize(innerWidth, innerHeight)}>
      <ambientLight />
      <pointLight position={[10, 10, 0]} />
      <ARMarker
        type={'pattern'}
        patternUrl={"data/hiro.patt"}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'green'} />
        </mesh>
      </ARMarker>

    </ARCanvas>
  )
}

export default App
