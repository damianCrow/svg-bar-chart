import React from "react"

const Bar = ({ inital, barHeight, classes, ...props }) => {
  return (
    <div className={`bar ${classes}`}>
        <svg height={barHeight} role="img">
            <g>
              <rect width="50" height={barHeight}></rect>
            </g>
        </svg>
        <span className="bar_inital" x="45" y="9.5" dy=".35em">{inital}</span>
    </div>
  )
}

export default Bar