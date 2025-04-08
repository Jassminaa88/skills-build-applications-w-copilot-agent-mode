import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://<codespace-name>-8000.app.github.dev/api/workouts/';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Workouts</h1>
      <table className="table table-striped table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>Workout Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;