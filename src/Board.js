import React from 'react'
import BoardView from './BoardView';

const Board = ({ userStyle, levelStyle, elements, title }) => {
    return (

        <article className="board_container">
            <BoardView
                type="board_level"
                style={levelStyle}
                elements={elements} />
            <BoardView
                type="board_user"
                style={userStyle}
                elements={elements} />
            <h3>Your Style</h3>
        </article>
    )
}

export default Board;