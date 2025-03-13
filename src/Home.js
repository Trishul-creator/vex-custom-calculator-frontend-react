import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid p-4">
      {/* Welcome Section */}
      <div className="row mb-5">
        <div className="col text-center">
          <h1 className="display-4">Welcome to the VEX Custom Competition!</h1>
          <p className="lead">We're excited to have so many talented teams joining us for the competition. Get ready for an amazing experience!</p>
        </div>
      </div>

      {/* Game Info Section */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">About the Game</h2>
              <p className="card-text">
                This competition is an exciting and challenging competition where teams design, build, and program robots while working together with other teams to maximize their points. The game focuses on engineering, strategy, and teamwork as participants work to score as many points as possible.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Basic Rules</h2>
              <p className="card-text">
                The objective of the this competition is to score points by pushing green blocks under the bar and the purple and red over the bar. Teams score points by driving + programming their robots to score within a set time limit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scoring Section */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Scoring</h2>
              <p className="card-text">
                Points are awarded based on the number of blocks scored, the types of blocks scored, and the time within which they finish them. 
                <br />
                <br />
                Teams that program and drive their robots to score the most points will win the competition !
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Objective of the Game</h2>
              <p className="card-text">
                The main goal of the VEX game is to work together as a team to build and program a robot that can push and throw blocks over the bar. The ultimate aim is to have your robot score as many points as possible within the time limit, all while competing against other teams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Manual Link Section */}
      <div className="row text-center">
        <div className="col">
          <h2>Want to Learn More?</h2>
          <p>For detailed rules and information, check out the official game manual below.</p>
          <a 
            href="https://www.vexrobotics.com/vexedr/competition/vex-robotics-competition-game-manual" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            View Game Manual
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
