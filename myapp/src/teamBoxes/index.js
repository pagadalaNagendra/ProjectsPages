import { Component } from "react";
import "./index.css";

class TeamBox extends Component {
  render() {
    const { number, toggleTeam } = this.props;

    const changeTeamStatus = () => {
      toggleTeam(number);
    };

    return (
      <div className="checkbox-Container">
        <input
          onClick={changeTeamStatus}
          type="checkbox"
          id={`${number}`}
          className="checkBox"
        />
        <label htmlFor={`${number}`}>Team {number}</label>
      </div>
    );
  }
}

export default TeamBox;
