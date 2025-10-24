//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          <ambientLight intensity={0.2} />
          <directionalLight color="red" position={[3, 4, 5]} />
          <directionalLight color="red" position={[-3, -4, 5]} />
          <mesh>
            <boxGeometry args={[3, 2, 1]}/>
            <meshStandardMaterial />
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}

export default App
