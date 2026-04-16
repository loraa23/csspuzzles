import React from 'react'
import levels from './data/levels.json';
import LevelDropdown from './LevelDropdown';
import Instructions from './Instructions';

const Header = ({ currentLevel, setCurrentLevel }) => {
    return (
        <header>
            <h1>CSS Trainer</h1>
            <div className="header_items">
                <LevelDropdown
                    currentLevel={currentLevel}
                    setCurrentLevel={setCurrentLevel}
                    maxLevels={levels.levels.length}
                />
                <Instructions />
            </div>
        </header>
    )
}

export default Header