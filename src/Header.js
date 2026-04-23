import React from 'react'
import levels from './data/levels.json';
import LevelDropdown from './LevelDropdown';
import Instructions from './Instructions';

const Header = ({ currentLevel, setCurrentLevel }) => {
    return (
        <header>
            <h1>CSS Practice</h1>
            <div className="header_items">
                <Instructions />
                <LevelDropdown
                    currentLevel={currentLevel}
                    setCurrentLevel={setCurrentLevel}
                    maxLevels={levels.levels.length}
                />

            </div>
        </header>
    )
}

export default Header