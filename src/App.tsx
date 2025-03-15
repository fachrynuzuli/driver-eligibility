import { useState, useEffect } from 'react';
import DriverDashboard from './components/DriverDashboard';
import './index.css';

function App() {
  // Ensure required font is loaded
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      <DriverDashboard />
    </div>
  );
}

export default App;
