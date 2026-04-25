import React from 'react'
import QuestionDropdown from './QuestionDropdown';
import LevelSelector from './LevelSelector';

const Header = ({ currentLevel, selectLevel, maxLevels, handleReset }) => {
    return (
        <header>
            <h1>CSS Practice</h1>
            <div className="header_items_container">
                <QuestionDropdown />
                <LevelSelector
                    currentLevel={currentLevel}
                    selectLevel={selectLevel}
                    maxLevels={maxLevels}
                    handleReset={handleReset}
                />
            </div>
        </header>
    )
}

export default Header