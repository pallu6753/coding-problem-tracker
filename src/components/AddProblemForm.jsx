import React, { useState } from 'react';

const AddProblemForm = ({ addProblem }) => {
  const [formData, setFormData] = useState({
    name: '',
    platform: '',
    difficulty: 'Easy',
    status: 'To-Do',
    tags: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProblem(formData);
    setFormData({ name: '', platform: '', difficulty: 'Easy', status: 'To-Do', tags: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Problem Name" value={formData.name} onChange={handleChange} required />
      <input name="platform" placeholder="Platform" value={formData.platform} onChange={handleChange} required />
      <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>To-Do</option>
        <option>In Progress</option>
        <option>Solved</option>
      </select>
      <input name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} />
      <button type="submit">Add Problem</button>
    </form>
  );
};

export default AddProblemForm;
