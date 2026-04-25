import _, { has } from 'lodash';
import { useState, useEffect } from 'react';
import Editor from './Editor';
import Board from './Board';
import Sidebar from './Sidebar';
import PaintBoard from './PaintBoard';
import levels from './data/levels.json';

const Game = ({ handleUpdateLevel, currentLevel, userStyleData, handleSaveStyleData }) => {
    const level = levels.levels[currentLevel];

    const [code, setCode] = useState('');
    const [userStyle, setUserStyle] = useState({});
    const [currentHints, setCurrentHints] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const elements = level.elements;
    const levelStyle = level.style;
    const isLastLevel = currentLevel === levels.levels.length - 1;
    const title = level.title;
    const colors = level.colors;
    const hints = level.hints

    useEffect(() => {
        // console.log('updating level style');
        // console.log(userStyleData[currentLevel]);
        setCode(userStyleData[currentLevel] || '');
        setCurrentHints(hints);
        setIsCorrect(false);
    }, [currentLevel, userStyleData, hints])

    useEffect(() => {
        const result = _.isEqual(levelStyle, userStyle);
        setIsCorrect(result);
    }, [userStyle, levelStyle]);

    const handleNextLevel = () => {
        handleUpdateLevel(isLastLevel);
        handleSaveStyleData(code);
    }
    return (
        <main className="main_view">
            <Sidebar></Sidebar>
            <div className="game_view">

                <div className="game_view_container">
                    <Board
                        userStyle={userStyle}
                        levelStyle={levelStyle}
                        elements={elements}
                        title={title}
                    />
                    <Editor
                        code={code}
                        setCode={setCode}
                        setUserStyle={setUserStyle}
                        isCorrect={isCorrect}
                        handleNextLevel={handleNextLevel}
                        isLastLevel={isLastLevel}
                        hints={hints}
                        currentHints={currentHints}
                        setCurrentHints={setCurrentHints}
                    />
                    <PaintBoard colors={colors} />
                </div>
            </div>
        </main>
    )
}

export default Game