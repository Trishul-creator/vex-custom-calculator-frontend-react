import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt,FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ScoresView = () => {

  const [scores, setScores] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadScores();
  }, [])

  const loadScores = async () => {
    const result = await axios.get(`http://localhost:8080/api/teams/${id}/scores`);
    setScores(result.data);

  }

  const handleDelete = async (scoreId) => {
    await axios.delete(`http://localhost:8080/api/teams/${id}/scores/${scoreId}`);
    loadScores();
  };
  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Round</th>
            <th>Red Blocks</th>
            <th>Purple Blocks</th>
            <th>Green Blocks</th>
            <th>Parking Status</th>
            <th>Total Score</th>
            <th colSpan="2">Actions</th>x
          </tr>
        </thead>

        <tbody className="text-center">
          {scores.map((score) => (
            <tr key={score.id}>
              <td>{score.round}</td>
              <td>{score.redBlocksScored}</td>
              <td>{score.purpleBlocksScored}</td>
              <td>{score.greenBlocksScored}</td>
              <td>{score.parkingStatus}</td>
              <td>{score.totalScore}</td>
              <td className="mx-2">
                <Link className="btn btn-warning" to={`/edit-score/${score.id}`}>
                  <FaEdit />
                </Link>
              </td>
              <td classname="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(score.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ScoresView;
