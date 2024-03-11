import { Component } from "react";
import TeamBox from "../teamBoxes";
import "./index.css";

export const teams = [1, 2, 3, 4, 5, 6,7,8,9];

class AdminProjects extends Component {
  state = {
    activeTeams: [],
    projectTitle: "",
    projectDetails: "",
    errorMsg:""
  };

  toggleTeam = (number) => {
    const { activeTeams } = this.state;
    if (activeTeams.includes(number)) {
      this.setState({
        activeTeams: activeTeams.filter((item) => item !== number),
      });
    } else {
      this.setState({
        activeTeams: [...activeTeams, number],
      });
    }
  };

  changeTitle = (e) => {
    this.setState({
      projectTitle: e.target.value,
    });
  };

  changeDetails = (e) => {
    this.setState({
      projectDetails: e.target.value,
    });
  };

  assignProjects = (e)=>{
    e.preventDefault()
    const {activeTeams,projectTitle,projectDetails}= this.state
    const data = {
      projectTitle,
      projectDetails,
      activeTeams,
    }
    if(!projectTitle){
      this.setState({
        errorMsg:"* Please enter the project title"
      })
    }
    else if(!projectDetails){
      this.setState({
        errorMsg:"* Please enter the project Description"
      })
    }
    else if(activeTeams.length===0){
      this.setState({
        errorMsg:"* Please Select the teams"
      })
    }
    else{
      this.setState({
        errorMsg:""
      })
    fetch("http://localhost:5000/assignProject",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    this.setState({
      projectTitle:"",
      projectDetails:"",

    })
  }

  }

  render() {

    const {projectTitle,projectDetails,errorMsg}=this.state
    // const titleMsg = projectTitle? "": <p>Please enter the project title</p>
    // const DetailsMsg = projectDetails? "": <p>Please enter the project Description</p>
    return (
      <div className="admin-projects-body">
        <form onSubmit={this.assignProjects} className="admin-projects-form">
          <label className="label" htmlFor="projectName">
            Project Title
          </label>
          <input
            className="projectName"
            onChange={this.changeTitle}
            type="text"
            placeholder="Enter the Project Title"
            id="projectName"
            value={projectTitle}
          />

          <label className="label" htmlFor="projectDetails">
            Project Details
          </label>
          <textarea
            onChange={this.changeDetails}
            className="projectDescription"
            type="text"
            id="projectDetails"
            placeholder="Enter the Project Details"
            value={projectDetails}
          />
          <div className="checkboxes-container">
            {teams.map((item) => (
              <TeamBox key={item} number={item} toggleTeam={this.toggleTeam} />
            ))}
          </div>
          <p className="error-msg">{errorMsg} </p>
          <input type="submit" value="Assign" className="assign" />
        </form>
      </div>
    );
  }
}

export default AdminProjects;
