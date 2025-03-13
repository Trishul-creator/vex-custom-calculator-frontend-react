import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


const EditScores = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [score, setScore] = React.useState({
    redBlocksScored: 0,
    purpleBlocksScored: 0,
    greenBlocksScored: 0,
  });

  const {redBlocksScored, purpleBlocksScored, greenBlocksScored } =
    score;


  const handleScoreInputChange = (e) => {
    setScore({ ...score, [e.target.name]: e.target.value });
  };

  const updateScore = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/teams/scores/${id}`, score);
    navigate("/view-leaderboard");
  };

  useEffect(() => {
    loadScore();
  }, [])

  const loadScore = async () => {
    const result = await axios.get(`http://localhost:8080/api/teams/scores/${id}`);
    setScore(result.data);
  }

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Add Score</h2>
      <form onSubmit={(e) => updateScore(e)}>
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

export default EditScores;
