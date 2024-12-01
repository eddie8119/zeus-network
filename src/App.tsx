import Header from './components/Header';
import Footer from './components/Footer';
import EpochInfo from './components/EpochInfo';
import Delegate from './components/Delegate';
import TotalLocked from './components/TotalLocked';

function App() {
  return (
    <div className="min-h-screen bg-background-primary p-4 text-white">
      <Header />
      <main className="mx-auto">
        <EpochInfo />
        <Delegate />
        <TotalLocked />
      </main>
      <Footer />
    </div>
  );
}

export default App;
