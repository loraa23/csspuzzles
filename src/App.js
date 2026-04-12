import './App.css';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import { useState, useEffect } from 'react';

function App() {
  const [currentLevel, setCurrentLevel] = useState(JSON.parse(localStorage.getItem('level')) || 0);
  const handleUpdateLevel = (isLast) => {
    isLast ? setCurrentLevel(0) : setCurrentLevel(currentLevel + 1);
  }

  useEffect(() => {
    localStorage.setItem('level', JSON.stringify(currentLevel))
  }, [currentLevel])

  return (
    <div className="App">
      <Header
        currentLevel={currentLevel}
        setCurrentLevel={setCurrentLevel}
      />
      <Game
        handleUpdateLevel={handleUpdateLevel}
        currentLevel={currentLevel}
      />
      <Footer />
    </div>
  );
}

export default App;
