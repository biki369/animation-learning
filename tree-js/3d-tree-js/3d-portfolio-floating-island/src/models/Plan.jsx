import React, { useEffect, useRef } from 'react'
import planScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei'

const Plan = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planScene);
    const { actions } = useAnimations(animations, ref)

    useEffect(() => {
        if (isRotating) {
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop();
        }
    }, [actions, isRotating]);


    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plan
