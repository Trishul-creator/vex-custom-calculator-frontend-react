import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const TeamsView = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    const result = await axios.get("http://localhost:8080/api/teams", {
      validateStatus: () => {
        return true;
      },
    });
    setTeams(result.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/teams/${id}`);
    loadTeams();
  };
  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Rank</th>
            <th>Team Name</th>
            <th>Average Score</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {teams.map((team, index) => (
            <tr key={team.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{team.teamName}</td>
              <td>{team.averageScore}</td>
              <td className="mx-2">
                <Link className="btn btn-info" to={`/view-scores/${team.id}`}><FaEye/></Link>
              </td>
              <td className="mx-2">
                <Link className="btn btn-warning" to={`/edit-team/${team.id}`}><FaEdit/></Link>
              </td>
              <td classname="mx-2">

                <button className="btn btn-danger" onClick={() => handleDelete(team.id)}><FaTrashAlt/></button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TeamsView;
