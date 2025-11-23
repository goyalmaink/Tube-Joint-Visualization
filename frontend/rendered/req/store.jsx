import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useStore = create((set) => ({
    tubes: [],
    selectedId: null,

    addTube: (type) => set((state) => {
        const newTube = {
            id: uuidv4(),
            type,
            position: [0, 1, 0],
            rotation: [0, 0, 0],
            dimensions: type === 'square'
                ? { width: 1, height: 1, length: 4 }
                : { width: 1, height: 2, length: 4 },
        };
        return { tubes: [...state.tubes, newTube], selectedId: newTube.id };
    }),

    updateTube: (id, newData) => set((state) => ({
        tubes: state.tubes.map((t) => (t.id === id ? { ...t, ...newData } : t)),
    })),

    selectTube: (id) => set({ selectedId: id }),

    removeTube: (id) => set((state) => ({
        tubes: state.tubes.filter((t) => t.id !== id),
        selectedId: null,
    })),
}));