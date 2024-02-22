import { ARCanvas, ARMarker } from '@artcom/react-three-arjs';
import { } from '@react-three/fiber';
// import { Text } from '@react-three/drei';

import { useState } from 'react';


function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div id="container" style={{ width: "100vw", height: "100vh" }}>
      <div id="canvas" style={{ width: "50vw", height: "50vh" }}>
        <ARCanvas
          width="100px"
          height="100px"
          camera={{ position: [0, 0, 0] }}
          onCreated={({ gl }: { gl: THREE.WebGLRenderer }) => gl.setSize(50, 50)}>
          <ambientLight />
          <pointLight position={[10, 10, 0]} />
          <ARMarker
            type={'pattern'}
            patternUrl={"data/hiro.patt"}
            onMarkerFound={() => {
              console.log(visible);

              console.log("Marker Found")
              setVisible(true);
            }}
            onMarkerLost={() => {
              console.log(visible);

              console.log("Marker Lost")
              setVisible(false);
            }}
          >
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              {/* <Text color="black">
            hello world!
          </Text> */}
              <meshStandardMaterial color={'green'} />
            </mesh>
          </ARMarker>

        </ARCanvas>
      </div>
      {visible && <div id="text" style={{ fontWeight: "bold" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis similique, eos magni tempore tempora odio enim ipsam ipsum cupiditate temporibus dolorum error magnam fugiat id modi. Tenetur animi similique nisi.
      </div>}
    </div>
  )
}

export default App
