import React from 'react'

const Board = ({ userStyle, levelStyle, elements, title }) => {
    return (

        <article className="board__container">
            <div className="board computer" style={levelStyle}>
                {elements &&
                    elements.map(element => (
                        <div
                            className="board_child"
                            key={element.id}
                            style={element.style}
                        />
                    ))
                }
            </div>
            <div className="board user" style={userStyle}>
                {elements &&
                    elements.map(element => (
                        <div
                            className="board_child"
                            key={element.id}
                            style={element.style}
                        />
                    ))
                }
            </div>
            <h3>Your Style</h3>
        </article>
    )
}

export default Board;