import React from 'react';
import { Edges } from '@react-three/drei';
import { useStore } from '../req/store';

export function TubeMesh({ data }) {
    const { width, height, length } = data.dimensions;
    const selectedId = useStore((state) => state.selectedId);
    const selectTube = useStore((state) => state.selectTube);

    const isSelected = selectedId === data.id;

    return (
        <mesh
            position={data.position}
            rotation={data.rotation}
            onClick={(e) => {
                e.stopPropagation();
                selectTube(data.id);
            }}
        >
            <boxGeometry args={[width, height, length]} />
            <meshStandardMaterial
                color={isSelected ? "#ff9f1c" : "#cccccc"}
                roughness={0.3}
                metalness={0.8}
            />
            <Edges threshold={15} color={isSelected ? "white" : "black"} />
        </mesh>
    );
}