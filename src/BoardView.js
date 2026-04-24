import React from 'react'

const BoardView = ({ type, style, elements }) => {
    return (
        <div className={`board ${type}`} style={style}>
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
    )
}

export default BoardView