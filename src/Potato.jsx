// Potato.jsx
import { useGLTF, Center } from '@react-three/drei';

export default function Potato(props) {
    const { scene } = useGLTF('./assets/potato.glb');
    return (
        <Center>
            <primitive object={scene} {...props} />
        </Center>
    );
}
