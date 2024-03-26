import React from 'react'


const Card = ({ children}) => {
  return (
    <div style={{
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0 0 5px rgba(0,0,0,0.3)",
        background: "#fff",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap:"30px",
        '@media (max-width: 768px)': { // Example media query for max-width 768px
          display:"block", // Change grid layout for smaller screens
      }
    }}>{
        children}</div>
  )
}

export default Card