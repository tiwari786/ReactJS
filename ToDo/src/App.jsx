import React, { useState } from 'react';

const App = () => {
  const [Task, setTask] = useState("")
  const [allTasks, setAllTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    if (!Task.trim()) return;

    const newTask = [...allTasks]
    newTask.push(Task)
    setAllTasks(newTask)

    setTask("")
  }

  return (
    <div className='w-[50%] m-10 mx-auto'>
      <div className='w-full p-5 border-2 border-gray-400 rounded-2xl flex flex-col'>
        <div className='w-full flex justify-center'>
          <h4>ToDo List</h4>
        </div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='mt-5 flex justify-between'>
          <input
            type="text"
            placeholder='Enter task'
            value={Task}
            onChange={(e) => {
              setTask(e.target.value)
            }}
            className='border-2 w-[80%] rounded-lg px-5 py-3 text-xl' />
          <button className='px-5 py-4 w-[20%] border-2 border-blue-400 rounded-2xl active: scale-75'>Add Task</button>
        </form>

        <div className='flex flex-col mt-5 gap-2'>
          {allTasks.map((elem, idx) => (
            <div key={idx} className='flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg'>
              <span className='text-lg'>{elem}</span>
              <button
                onClick={() => {
                  setAllTasks(allTasks.filter((_, i) => i !== idx))
                }}
                className='text-red-500 hover:text-red-700'
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
