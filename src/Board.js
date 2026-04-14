import React from 'react'

const Board = ({ userStyle, levelStyle, elements, title }) => {
    return (
        <div className='board__view'>
            {/* <h2>{title}</h2> */}
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
        </div>
    )
}

export default Board;