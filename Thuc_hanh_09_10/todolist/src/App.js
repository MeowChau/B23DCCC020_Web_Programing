import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Học lập trình web với React', due: 'Tomorrow' },
    { id: 2, text: 'Gửi email nộp bài tập về nhà', due: 'Saturday' },
    { id: 3, text: 'Học từ vựng tiếng anh mỗi ngày', due: 'Monday' },
    { id: 4, text: 'Viết tiểu luận môn Triết học', due: 'Today' }
  ]);
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTask = () => {
    if (newTask && dueDate) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, due: dueDate }]);
      setNewTask('');
      setDueDate('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1>My work 🎯</h1>
      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className="todo-item">
            <span>{task.text}</span>
            <span className="due-date">{task.due}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Due date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTask}>Add task</button>
      </div>
    </div>
  );
}

export default App;
