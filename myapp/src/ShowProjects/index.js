import { Component } from "react";
import { teams } from "../adminProjects";
import TeamCard from "../teamCards";
import TeamProjects from "../TeamProjects";
import "./index.css"

class ShowProjects extends  Component{

    state={
        projects: [],
        activeTeam :"",
        activePage: "teams"
    }

    componentDidMount(){
        try{
            fetch("http://localhost:5000/showProjects")
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                this.setState({
                    projects:data
                })
            })
        }
        catch(e){
            console.log("error")
        }
    }

    changeActiveTeam=(teamNumber)=>{
        this.setState({
            activeTeam: teamNumber
        })
    }

    changeActivePage= (page)=>{
        this.setState({
            activePage:page
        })
    }

    changeActivePageToTeams= ()=>{
        this.setState({
            activePage:"teams"
        })
    }

    render(){



        const {activePage,activeTeam,projects} = this.state

        const activeTeamProjects = projects.filter(item=>(
            item.team===activeTeam
        ))
        console.log(activeTeamProjects)
        const activeTeamProjectsPage = (
            <div className="projects-page-body">
                <button className="back-button" onClick={this.changeActivePageToTeams}>Back</button>
                {activeTeamProjects.length>0?(activeTeamProjects.map(item=>(
                    <TeamProjects project={item} key={item._id} />
                ))):<h1>You have no projects assigned..!</h1>
                }
            </div>
        )

        const page= activePage==="teams"?(
                <div className="team-cards-body">
                    {teams.map(item=>(
                            <TeamCard teamNumber={item} changeActivePage={this.changeActivePage} changeActiveTeam={this.changeActiveTeam} key={item._id} />
                    ))}
                </div>
        ) :activeTeamProjectsPage

        return(
            <div className="show-projects-body">
                {page}
                {/* {activeTeamProjectsPage} */}

            </div>
        )
    }
}

export default ShowProjects