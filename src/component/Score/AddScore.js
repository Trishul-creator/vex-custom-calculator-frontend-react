import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddScore = () => {
  let navigate = useNavigate();

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    const result = await axios.get("http://localhost:8080/api/teams");
    setTeams(result.data);
  };

  const [team, setTeam] = React.useState({
    teamName: "",
  });

  const { teamName } = team;

  const handleTeamInputChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const [score, setScore] = React.useState({
    round: 0,
    redBlocksScored: 0,
    purpleBlocksScored: 0,
    greenBlocksScored: 0,
  });

  const { round, redBlocksScored, purpleBlocksScored, greenBlocksScored } =
    score;

  const handleScoreInputChange = (e) => {
    setScore({ ...score, [e.target.name]: e.target.value });
  };

  const saveScore = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/api/teams/${team}/scores`, score);
    navigate("/view-scores");
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Add Score</h2>
      <form onSubmit={(e) => saveScore(e)}>
        <div className="input-group mb-5">
          <label for="exampleFormControlSelect1">
            Team:
              <select
                className="form-select"
                required
                value={teamName}
                name="teamName"
                onChange={handleTeamInputChange}
              >
                <option disabled value="">
                  Choose Team...
                </option>
                {teams.map((team) => (
                <>
                <option>{team.teamName}</option>
                </>
                ))}
              </select>
          </label>
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="round">
            Round
          </label>
          <input
            type="number"
            className="form-control col-sm-6"
            name="round"
            id="round"
            required
            value={round}
            onChange={(e) => handleScoreInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="redBlocksScored">
            # of Red Blocks Scored
          </label>
          <input
            type="number"
            className="form-control col-sm-6"
            name="redBlocksScored"
            id="redBlocksScored"
            required
            value={redBlocksScored}
            onChange={(e) => handleScoreInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="purpleBlocksScored">
            # of Purple Blocks Scored
          </label>
          <input
            type="number"
            className="form-control col-sm-6"
            name="purpleBlocksScored"
            id="purpleBlocksScored"
            required
            value={purpleBlocksScored}
            onChange={(e) => handleScoreInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="greenBlocksScored">
            # of Green Blocks Scored
          </label>
          <input
            type="number"
            className="form-control col-sm-6"
            name="greenBlocksScored"
            id="greenBlocksScored"
            required
            value={greenBlocksScored}
            onChange={(e) => handleScoreInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/view-leaderboard"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddScore;
