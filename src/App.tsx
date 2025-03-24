import DeviceFrame from './components/DeviceFrame';
import WeddingContent from './components/WeddingContent';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-[calc(100vh-40px)] flex flex-col justify-center items-center p-4">
      <DeviceFrame className="mb-8">
        <WeddingContent />
      </DeviceFrame>
      <FAQ />
    </div>
  );
}

export default App;
