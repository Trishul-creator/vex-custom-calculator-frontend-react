import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import NavBar from './component/common/NavBar';
import TeamsView from "./component/Team/TeamsView";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import AddTeam from "./component/Team/AddTeam";
import EditTeam from "./component/Team/EditTeam";
import ScoresView from "./component/Score/ScoresView";
import AddScore from "./component/Score/AddScore";
import EditScores from "./component/Score/EditScores";


function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-leaderboard" element={<TeamsView />}></Route>
          <Route exact path="/add-team" element={<AddTeam />}></Route>
          <Route exact path="/edit-team/:id" element={<EditTeam />}></Route>
          <Route exact path="/view-scores/:id" element={<ScoresView />}></Route>
          <Route exact path="/add-score" element={<AddScore />}></Route> 
          <Route exact path="/edit-score/:id" element={<EditScores />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
