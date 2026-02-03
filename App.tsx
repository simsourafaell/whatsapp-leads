
import React, { useState } from 'react';
import Home from './pages/Home';
import FormModal from './components/FormModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen">
      <Home onCTAClick={openModal} />
      {isModalOpen && <FormModal onClose={closeModal} />}
    </div>
  );
};

export default App;
