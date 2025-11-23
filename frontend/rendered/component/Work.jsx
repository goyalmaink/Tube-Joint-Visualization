import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TransformControls, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { useStore } from '../req/store';
import { TubeMesh } from './TubeMesh';
import { JointPreview } from './JointPreview';

export default function Workspace() {
    const { tubes, selectedId, updateTube } = useStore();

    const selectedTube = tubes.find((t) => t.id === selectedId);

    return (
        <div className="w-[900px] h-[700px] ">
            <Canvas camera={{ position: [8, 8, 8], fov: 50 }}>
                <color attach="background" args={['#1a1a1a']} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <gridHelper args={[20, 20, 0x444444, 0x222222]} />
                {tubes.map((tube) => (
                    <TubeMesh key={tube.id} data={tube} />
                ))}
                <JointPreview />
                {selectedTube && (
                    <TransformControls
                        object={undefined}
                        position={selectedTube.position}
                        rotation={selectedTube.rotation}
                        onObjectChange={(e) => {
                            if (e?.target?.object) {
                                const { position, rotation } = e.target.object;
                                updateTube(selectedId, {
                                    position: [position.x, position.y, position.z],
                                    rotation: [rotation.x, rotation.y, rotation.z],
                                });
                            }
                        }}
                        translationSnap={0.5}
                        rotationSnap={Math.PI / 4}
                    />
                )}

                <OrbitControls makeDefault />

                <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                    <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
                </GizmoHelper>
            </Canvas>
        </div>
    );
}