import React from 'react'

const Board = ({ userStyle, levelStyle, elements, title }) => {
    return (
        <article className="board__container">
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
                <h3>Your Style</h3>
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
        </article>
    )
}

export default Board;