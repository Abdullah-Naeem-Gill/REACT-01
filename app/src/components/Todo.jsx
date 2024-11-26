import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [taskInput, setTaskInput] = useState(''); // State to store the task input

  // Function to handle adding a new task
  const addTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === '') return; // Prevent adding empty tasks
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput(''); // Clear input field after adding a task
  };

  // Function to toggle the "completed" status of a task
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">To-Do List</h1>

        {/* Input field and button for adding tasks */}
        <form onSubmit={addTask} className="mb-4">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter a new task"
            className="w-full px-4 py-2 border rounded-lg mb-2"
          />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200">
            Add Task
          </button>
        </form>

        {/* List of tasks */}
        <ul>
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet.</p>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="flex justify-between items-center p-2 mb-2 bg-gray-50 border rounded-lg shadow-sm">
                <span
                  className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => removeTask(task.id)}
                  className="w-20 ml-8 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 "
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
