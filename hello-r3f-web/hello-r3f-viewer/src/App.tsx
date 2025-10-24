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
    <details className="dropdown">
      <summary className="btn m-1">open or close</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </details>
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
