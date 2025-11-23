import React from 'react';
import { useStore } from '../req/store';

export default function TubeEditor() {
    const { addTube, selectedId, tubes, updateTube, removeTube } = useStore();

    const selectedTube = tubes.find(t => t.id === selectedId);

    const handleChange = (key, value) => {
        if (!selectedTube) return;
        updateTube(selectedId, {
            dimensions: { ...selectedTube.dimensions, [key]: parseFloat(value) }
        });
    };

    return (
        <div className="w-[700px] h-[700px] text-white p-4 flex flex-col border-l border-gray-700 overflow-y-auto mr-32">
            <h2 className="text-xl font-bold mb-6 text-blue-400">Properties</h2>

            <div className="mb-8">
                <label className="block text-xs text-gray-400 mb-2">ADD NEW TUBE</label>
                <div className="grid grid-cols-2 gap-2">
                    <button
                        onClick={() => addTube('square')}
                        className=" bg-blue-600  py-2 rounded text-sm font-medium"
                    >
                        Square
                    </button>
                    <button
                        onClick={() => addTube('rectangular')}
                        className="bg-emerald-600  py-2 rounded text-sm font-medium"
                    >
                        Rectangle
                    </button>
                </div>
            </div>

            {selectedTube ? (
                <div className="space-y-4">
                    <div className="pb-2 border-b border-gray-700">
                        <h3 className="font-semibold">Selected: {selectedTube.type}</h3>
                        {/* <span className="text-xs text-gray-500 font-mono">{selectedTube.id.slice(0, 8)}</span> */}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400">Length</label>
                        <input
                            type="number"
                            value={selectedTube.dimensions.length}
                            onChange={(e) => handleChange('length', e.target.value)}
                            className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400">Width</label>
                        <input
                            type="number"
                            value={selectedTube.dimensions.width}
                            onChange={(e) => handleChange('width', e.target.value)}
                            className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 mt-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {selectedTube.type === 'rectangular' && (
                        <div>
                            <label className="block text-sm text-gray-400">Height</label>
                            <input
                                type="number"
                                value={selectedTube.dimensions.height}
                                onChange={(e) => handleChange('height', e.target.value)}
                                className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 mt-1 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    )}

                    <button
                        onClick={() => removeTube(selectedId)}
                        className="w-full mt-4 bg-red-600 text-white-400  py-2 "
                    >
                        Delete Tube
                    </button>
                </div>
            ) : (
                <div className="text-gray-500 text-sm italic text-center mt-10">
                    Select a tube to edit properties
                </div>
            )}
        </div>
    );
}