import React from 'react'
import levels from './data/levels.json';
import LevelDropdown from './LevelDropdown';

const Header = ({ currentLevel, setCurrentLevel }) => {
    return (
        <header>
            <h1>CSS Trainer</h1>
            <LevelDropdown
                currentLevel={currentLevel}
                setCurrentLevel={setCurrentLevel}
                maxLevels={levels.levels.length}
            >
            </LevelDropdown>
        </header>
    )
}

export default Header