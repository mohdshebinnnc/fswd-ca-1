import './App.css'
import TeamMember from "./components/teamMemberCard"

function App() {
  const container={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    
  }
  const heading={
    fontSize: "24px",
    fontWeight: "bold",
  }
  const cardContainer={
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  }


  const teamMembers=[
    {
      name:"John doe",
      job:"Software Engineer"
    },
    {
      name:"Thomas Alex",
      job:"Doctor"
    },
    {
      name:"Wahab Ali",
      job:"Accountant"
    }
  ]

  return (
    <div style={container}>
      <h1 style={heading}>Team Showcase</h1>
      {teamMembers.map((e,i)=>(
        <TeamMember style={cardContainer} key={i} name={e.name} job={e.job}/>
      ))}
    </div>
  )
}

export default App
