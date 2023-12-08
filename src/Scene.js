import { OrbitControls } from "@react-three/drei";

const Scene = () => {
    return (
        <>
            <OrbitControls/>

            <ambientLight/>
            <directionalLight position={[0, 2, 4]}/>

            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </>
    );
};
export default Scene;