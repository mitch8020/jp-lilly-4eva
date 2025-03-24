import DeviceFrame from './components/DeviceFrame';
import WeddingContent from './components/WeddingContent';

function App() {
  return (
    <div className="min-h-[calc(100vh-40px)] flex justify-center items-center p-4">
      <DeviceFrame>
        <WeddingContent />
      </DeviceFrame>
    </div>
  );
}

export default App;
