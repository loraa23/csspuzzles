import React from 'react'

const PaintBoard = ({ colors }) => {
    return (
        <div className="paintboard">
            {
                colors.map(color => (
                    <div className="color_container" key={color}>
                        <div className="color_box" style={{ backgroundColor: color }} />
                        <p>{color}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PaintBoard