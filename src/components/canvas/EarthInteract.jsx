import { Suspense } from "react"
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from "@react-three/drei"
import CanvasLoader from '../Loader'
import EarthCanvas from "./Earth"
const EarthInteract = () => {
  const earth = useGLTF('./earth/scene.gltf') 
  return (
    <mesh>
     <directionalLight position={[0.07,0,0]} intensity={50} />
     <EarthCanvas/>
    </mesh>
  )
}

const EarthInteractCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
      camera={{ 
        // fov:45,
        // near:0.1,
        // far:200,
        position:[-4,3,6]
      }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}/>
          <EarthInteract />
        </Suspense>
    </Canvas>
  )
}
 
export default EarthInteractCanvas