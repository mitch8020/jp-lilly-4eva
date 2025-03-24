import DeviceFrame from './components/DeviceFrame';
import WeddingContent from './components/WeddingContent';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4e8eb] flex justify-center items-center p-4">
      <DeviceFrame>
        <WeddingContent />
      </DeviceFrame>
    </div>
  );
}

export default App;
