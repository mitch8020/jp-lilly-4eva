import DeviceFrame from './components/DeviceFrame';
import WeddingContent from './components/WeddingContent';

function App() {
  return (
    <div className="flex justify-center items-center p-4">
      <DeviceFrame>
        <WeddingContent />
      </DeviceFrame>
    </div>
  );
}

export default App;
