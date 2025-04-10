import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Updated the API endpoint suffix to match the Django REST API structure
    const apiUrl = 'https://<codespace-name>-8000.app.github.dev/api/teams/';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Teams</h1>
      <table className="table table-striped table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>Team Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.members.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;