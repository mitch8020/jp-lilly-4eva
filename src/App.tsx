import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeviceFrame from './components/DeviceFrame';
import WeddingContent from './components/WeddingContent';
import FAQ from './components/FAQ';
import Cats from './pages/Cats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-[calc(100vh-40px)] flex flex-col justify-center items-center p-4">
            <DeviceFrame className="mb-8">
              <WeddingContent />
            </DeviceFrame>
            <FAQ />
          </div>
        } />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </Router>
  );
}

export default App;
