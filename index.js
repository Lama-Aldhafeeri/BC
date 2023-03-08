
function App(){
   var your_Name = "LAMA"
   var job_Title = "Software Devloper"
   var about = "I am passionate about using technology to solve business problems, and I have interest in many computer sciencs fields"
   var interests ="AI, ML, Deep Learing, Web Development, UI and UX"
    return(
        <div className="container">
          <div className="card">
          <div className="name" >{your_Name}</div>
          <hr/>
          <div className="title" > {job_Title} </div>
          <p className="about"> {about} </p>
          <div className="interest_title">Interests</div>
          <hr/>
          <div className="interests">{interests}</div>
          <div className="card-back"></div>
          <div className="card-front"></div>
         </div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))