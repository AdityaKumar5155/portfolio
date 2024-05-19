import { Suspense, useRef, useState} from "react"
import {Canvas, extend ,  useFrame} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from "@react-three/drei"
extend({OrbitControls, Canvas})
import CanvasLoader from '../Loader'

const Earth = () => {
  const timeout = (delay) => {
    return new Promise( res => setTimeout(res, delay) );
  }
  const rotateMesh = useRef()
  const earth = useGLTF('./earth/scene.gltf') 
  // useFrame(({ clock }) => {
  //   rotateMesh.current.rotation.y = (clock.getElapsedTime()*(Math.PI/180))
  // })
  return (
    // <mesh>
    <mesh ref={rotateMesh}>
      <directionalLight position={[0.07,0,0]} intensity={15} />
      
    <primitive object={earth.scene} scale={17} position-y={0} rotation-y={0} />
    </mesh>
    // </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop="always"
      // gl={{preserveDrawingBuffer: true}}
      camera={{ 
        fov:45,
        near:0.1,
        far:200,
        position:[0,0,60]
      }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            // maxPolarAngle={Math.PI/2}
            // minPolarAngle={Math.PI/2}
            />
          <Earth />
        </Suspense>
    </Canvas>
  )
}
 
export default EarthCanvas