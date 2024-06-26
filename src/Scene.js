import { OrbitControls } from "@react-three/drei";
import {button, useControls} from "leva";
import {useState} from "react";

// onClick = {(e) => console.log('click')}
// onContextMenu = {(e) => console.log('Right Click')}
// onDoubleClick = {(e) => console.log('double click')}
// onWheel = {(e) => console.log('wheel spins')}
// onPointerUp = {(e) => console.log('up')}
// onPointerDown = {(e) => console.log('down')}
// onPointerOver = {(e) => console.log('over')}
// onPointerOut = {(e) => console.log('out')}
// onPointerMove = {(e) => console.log('move')}
// onPointerMissed = {() => console.log('missed')}
// onUpdate = {(self) => console.log('props have been updated')}

const Scene = () => {
    const { position, color, wireframe, scale } = useControls("cube", {
        position: {
            value: {
                x: 0,
                y: 0,
                z: 0
            },
            min: -10,
            max: 10,
            step: 0.01
        },
        color: "#ffffff",
        wireframe: false,
        click: button(() => {
            console.log("clicked");
        }),
        scale: { options: [1, 2, 3] }
    })
    console.log(scale);

    /*
    const sphereTweak = useControls("sphere", {
        xRotation: 0
    })
    */

    const [active, setActive] = useState(false);
    const clickHandler = () => {
        setActive(!active);
        console.log(active);
    };

    return (
        <>
            <OrbitControls/>

            <ambientLight/>
            <directionalLight position={[0, 2, 4]}/>

            <mesh
                position={[position.x, position.y, position.z]}
                scale={scale}
                onClick={ e => { e.stopPropagation(); }}
            >
                <boxGeometry />
                <meshStandardMaterial color={color} wireframe={wireframe} />
            </mesh>

            <mesh onClick={clickHandler} position-x={1}>
                <boxGeometry />
                <meshBasicMaterial color={active ? "pink" : "orange"} />
            </mesh>

            <mesh onClick={ e => { e.stopPropagation(); }}
                  position-x={-1}
            >
                <boxGeometry />
                <meshBasicMaterial color="purple" />
            </mesh>
        </>
    );
};
export default Scene;