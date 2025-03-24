import DeviceFrame from './components/DeviceFrame';
import WeddingContent from './components/WeddingContent';

function App() {
  return (
    <div className="bg-gradient-to-br from-[#f5f7fa] to-[#e4e8eb] flex justify-center items-center p-4">
      <DeviceFrame>
        <WeddingContent />
      </DeviceFrame>
    </div>
  );
}

export default App;
