import React from 'react';

const ProblemTable = ({ problems, deleteProblem }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Platform</th>
          <th>Difficulty</th>
          <th>Status</th>
          <th>Tags</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem, index) => (
          <tr key={index}>
            <td>{problem.name}</td>
            <td>{problem.platform}</td>
            <td>{problem.difficulty}</td>
            <td>{problem.status}</td>
            <td>{problem.tags}</td>
            <td><button onClick={() => deleteProblem(index)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProblemTable;
