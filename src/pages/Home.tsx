import MainLayout from '../layouts/MainLayout';
import EpochInfo from '../components/EpochInfo';
import Delegate from '../components/Delegate';
import TotalLocked from '../components/TotalLocked';

const Home = () => {
  return (
    <MainLayout>
      <EpochInfo />
      <Delegate />
      <TotalLocked />
    </MainLayout>
  );
};

export default Home;
