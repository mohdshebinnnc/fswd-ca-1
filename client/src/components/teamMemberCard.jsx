import React from 'react'

const TeamMember = ({name,job}) => {
  const cards={
    card: {
      border: "1px solid black",
      borderRadius: "8px",
      padding: "20px",
      margin: "10px",
      backgroundColor: "white",
      maxWidth: "400px",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold"
    },
    job: {
      fontSize: "16px",
      color: "gray",
    },
  }

    
  return (
    <div style={cards.card}>
      <p style={cards.name}>{name}</p>
      <p style={cards.job}>{job}</p>
    </div>
  )
}

export default TeamMember
