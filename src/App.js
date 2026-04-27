import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import levels from './data/levels.json';
import { useState, useEffect } from 'react';

function App() {
  const maxLevels = levels.levels.length;
  const [currentLevel, setCurrentLevel] = useState(JSON.parse(localStorage.getItem('level')) || 0);
  const [userStyleData, setUserStyleData] = useState(JSON.parse(localStorage.getItem('userStyleData')) || Array(maxLevels));

  const handleUpdateLevel = (isLast) => {
    isLast ? setCurrentLevel(0) : setCurrentLevel(currentLevel + 1);
  }

  const handleSaveStyleData = (style) => {
    const newStyleData = userStyleData;
    newStyleData[currentLevel] = style;
    setUserStyleData(newStyleData);
  }

  const handleReset = () => {
    setUserStyleData([]);
    setCurrentLevel(0);
  }

  const selectLevel = (level) => {
    if ((level >= 0) && (level < maxLevels)) { setCurrentLevel(level) }
  }

  useEffect(() => {
    localStorage.setItem('level', JSON.stringify(currentLevel))
  }, [currentLevel])

  useEffect(() => {
    localStorage.setItem('userStyleData', JSON.stringify(userStyleData))
  }, [userStyleData])

  return (
    <div className="App">
      <Header
        currentLevel={currentLevel}
        selectLevel={selectLevel}
        maxLevels={maxLevels}
        handleReset={handleReset}
      />
      <Game
        handleUpdateLevel={handleUpdateLevel}
        currentLevel={currentLevel}
        userStyleData={userStyleData}
        handleSaveStyleData={handleSaveStyleData}
      />
      <Footer />
    </div>
  );
}

export default App;
