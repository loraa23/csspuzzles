import './App.css';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import levels from './data/levels.json';
import { useState, useEffect } from 'react';

function App() {
  const [currentLevel, setCurrentLevel] = useState(JSON.parse(localStorage.getItem('level')) || 0);
  const maxLevels = levels.levels.length;

  const handleUpdateLevel = (isLast) => {
    isLast ? setCurrentLevel(0) : setCurrentLevel(currentLevel + 1);
  }

  const selectLevel = (level) => {
    if ((level >= 0) && (level < maxLevels)) { setCurrentLevel(level) }
  }

  useEffect(() => {
    localStorage.setItem('level', JSON.stringify(currentLevel))
  }, [currentLevel])

  return (
    <div className="App">
      <Header
        currentLevel={currentLevel}
        selectLevel={selectLevel}
        maxLevels={maxLevels}
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
