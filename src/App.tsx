import React from 'react';
import MainLayout from './layouts/MainLayout';
import EpochInfo from './components/EpochInfo';
import Delegate from './components/Delegate';
import TotalLocked from './components/TotalLocked';

const App: React.FC = () => {
  return (
    <MainLayout>
      <EpochInfo />
      <Delegate />
      <TotalLocked />
    </MainLayout>
  );
};

export default App;
