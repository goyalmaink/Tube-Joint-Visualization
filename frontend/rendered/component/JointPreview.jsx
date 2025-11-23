import React, { useMemo } from 'react';
import { useStore } from '../req/store';
import * as THREE from 'three';

export function JointPreview() {
    const tubes = useStore((state) => state.tubes);

    const joints = useMemo(() => {
        const detectedJoints = [];

        for (let i = 0; i < tubes.length; i++) {
            for (let j = i + 1; j < tubes.length; j++) {
                const t1 = tubes[i];
                const t2 = tubes[j];

                const p1 = new THREE.Vector3(...t1.position);
                const p2 = new THREE.Vector3(...t2.position);
                const dist = p1.distanceTo(p2);
                if (dist < 3) {
                    const mid = p1.add(p2).multiplyScalar(0.5);
                    detectedJoints.push(mid);
                }
            }
        }
        return detectedJoints;
    }, [tubes]);

    return (
        <>
            {joints.map((pos, idx) => (
                <mesh key={idx} position={pos}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshBasicMaterial color="#ef476f" transparent opacity={0.6} />
                </mesh>
            ))}
        </>
    );
}