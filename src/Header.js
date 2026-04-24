import React from 'react'
import QuestionDropdown from './QuestionDropdown';
import LevelSelector from './LevelSelector';

const Header = ({ currentLevel, selectLevel, maxLevels }) => {
    return (
        <header>
            <h1>CSS Practice</h1>
            <div className="header_items_container">
                <QuestionDropdown />
                <LevelSelector
                    currentLevel={currentLevel}
                    selectLevel={selectLevel}
                    maxLevels={maxLevels}
                />
            </div>
        </header>
    )
}

export default Header