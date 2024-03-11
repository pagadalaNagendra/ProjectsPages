import { Component } from "react";
import "./index.css"
class TeamCard extends Component{
    render(){

        const {teamNumber,changeActiveTeam,changeActivePage}= this.props

        const ActivateTeam=()=>{
            changeActiveTeam(teamNumber)
            changeActivePage("projects")
        }


        return(
            <div className="team-card">
                <button onClick={ActivateTeam} className="team-number-heading">TEAM {teamNumber}</button>
            </div>
        )
    }

}

export default TeamCard