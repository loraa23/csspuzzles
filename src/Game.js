import _, { has } from 'lodash';
import { useState, useEffect } from 'react';
import Editor from './Editor';
import Board from './Board';
import levels from './data/levels.json';

const Game = ({ handleUpdateLevel, currentLevel }) => {
    const level = levels.levels[currentLevel];

    const [code, setCode] = useState('');
    const [userStyle, setUserStyle] = useState({});
    const [hints, setHints] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const elements = level.elements;
    const levelStyle = level.style;
    const isLastLevel = currentLevel === levels.levels.length - 1;
    const title = level.title;

    useEffect(() => {
        console.log('updating level style')
        setUserStyle({});
        setCode('');
        setHints(level.hints);
        setIsCorrect(false);

    }, [currentLevel])

    useEffect(() => {
        const result = _.isEqual(levelStyle, userStyle);
        setIsCorrect(result);
    }, [userStyle, levelStyle]);

    return (
        <main className="game_view">
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
                handleNextLevel={handleUpdateLevel}
                isLastLevel={isLastLevel}
                hints={hints}
                setHints={setHints}
            />
        </main>
    )
}

export default Game