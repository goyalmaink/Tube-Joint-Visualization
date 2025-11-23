import Workspace from '../rendered/component/Work';
import TubeEditor from '../rendered/component/TubeEditor';
import './App.css';

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden ">
      <div className="flex-1 relative">
        <Workspace />

        <div className="absolute top-4 left-4 bg-black/50 text-white p-3 rounded pointer-events-none select-none backdrop-blur-sm">
          <h1 className="font-bold text-lg">Tube Joint Visualiser</h1>
          <p className="text-xs text-gray-300">Drag to move • Click to Select</p>
        </div>
      </div>

      <TubeEditor />
    </div>
  );
}

export default App;