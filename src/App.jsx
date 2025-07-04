import React, { useState, useEffect } from 'react';
import AddProblemForm from './components/AddProblemForm';
import ProblemTable from './components/ProblemTable';
import StatsDashboard from './components/StatsDashboard';

const App = () => {
  const [problems, setProblems] = useState(() => {
    return JSON.parse(localStorage.getItem('problems')) || [];
  });

  useEffect(() => {
    localStorage.setItem('problems', JSON.stringify(problems));
  }, [problems]);

  const addProblem = (problem) => {
    setProblems([...problems, problem]);
  };

  const deleteProblem = (index) => {
    const updated = [...problems];
    updated.splice(index, 1);
    setProblems(updated);
  };

  return (
    <div className="container">
      <h1>Competitive Coding Problem Tracker</h1>
      <AddProblemForm addProblem={addProblem} />
      <ProblemTable problems={problems} deleteProblem={deleteProblem} />
      <StatsDashboard problems={problems} />
    </div>
  );
};

export default App;
