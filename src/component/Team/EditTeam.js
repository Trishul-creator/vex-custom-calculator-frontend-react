import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
const EditTeam = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [team, setTeam] = React.useState({
    teamName: "",
  });

  const { teamName } = team;

  const handleInputChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const updateTeam = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/teams/${id}`, team);
    navigate("/view-leaderboard");
  };

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    const result = await axios.get(`http://localhost:8080/api/teams/${id}`);
    setTeam(result.data);
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Edit Team</h2>
      <form onSubmit={(e) => updateTeam(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="teamName">
            Team Name
          </label>
          <input
            type="text"
            className="form-control col-sm-6"
            name="teamName"
            id="teamName"
            required
            value={teamName}
            onChange={(e) => handleInputChange(e)}
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

export default EditTeam;
