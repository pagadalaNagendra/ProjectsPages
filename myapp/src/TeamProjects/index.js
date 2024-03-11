import { Component } from "react";
import "./index.css"

class TeamProjects extends Component{
    render(){

        const {project} = this.props
        const {projectTitle,projectDetails} = project

        return(
            <div className="team-project-card">
                <h1 className="team-project-card-title">
                    {projectTitle}
                </h1>
                <hr/>
                <p className="team-project-card-description">
                    {projectDetails}
                </p>
            </div>
        )
    }
}

export default TeamProjects