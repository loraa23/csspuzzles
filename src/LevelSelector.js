import React from 'react'
import LevelDropdown from './LevelDropdown'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'

const LevelSelector = ({ currentLevel, selectLevel, maxLevels }) => {
    return (
        <div className='level_selector'>
            <button
                className='level_back'
                onClick={() => selectLevel(currentLevel - 1)}
            ><CaretLeftIcon /></button>
            <LevelDropdown
                currentLevel={currentLevel}
                selectLevel={selectLevel}
                maxLevels={maxLevels}
            />
            <button
                className='level_forward'
                onClick={() => selectLevel(currentLevel + 1)}
            ><CaretRightIcon /></button>
        </div>
    )
}

export default LevelSelector