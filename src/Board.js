import React from 'react'

const Board = ({ userStyle, levelStyle, elements }) => {
    return (
        <div className="board__container">
            <section>
                <div className="board" style={levelStyle}>
                    {elements &&
                        elements.map(element => (
                            <div
                                key={element.id}
                                style={element.style}
                            />
                        ))
                    }
                </div>
            </section>
            <section>
                <h2>Player</h2>
                <div className="board" style={userStyle}>
                    {elements &&
                        elements.map(element => (
                            <div
                                key={element.id}
                                style={element.style}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Board;