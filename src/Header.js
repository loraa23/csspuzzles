import React from 'react'
import levels from './data/levels.json';

const Header = ({ currentLevel, setCurrentLevel }) => {
    return (
        <header>
            <h1>Header</h1>
            <select
                value={currentLevel}
                onChange={(e) => setCurrentLevel(Number(e.target.value))}
            >
                {Array.from({ length: levels.levels.length }, (_, i) => (
                    <option key={i} value={i}> Level {i + 1} of {levels.levels.length}</option>
                ))}
            </select>
        </header>
    )
}

export default Header