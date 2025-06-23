// App.jsx
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Potato from './Potato';
import ThoughtBubble3D from './ThoughtBubble';

function SceneContent() {
    const { camera } = useThree();

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} intensity={1} />
            <Potato />
            {/* Raised thought bubble above potato */}
            <ThoughtBubble3D camera={camera} position={[0, 3.5, 0]} />
            <OrbitControls />
        </>
    );
}

function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <SceneContent />
            </Canvas>
        </div>
    );
}

export default App;
