import React from 'react'

const Board = ({ userStyle, levelStyle }) => {
    return (
        <div className="board__container">
            <section>
                {/* <h2>Level</h2> */}
                <div className="board" style={levelStyle}></div>
            </section>
            <section>
                <h2>Player</h2>
                <div className="board" style={userStyle}></div>
            </section>
        </div>
    )
}

export default Board;