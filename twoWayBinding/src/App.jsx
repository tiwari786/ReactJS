import React, { useState } from 'react';

const App = () => {

  const [name, setName] = useState("")

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const newAllUsers = [...allUsers]

    newAllUsers.push(name)
    setAllUsers(newAllUsers)

    console.log(allUsers)

    setName("")
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} >
        <input
          type="text"
          placeholder='Enter name'
          // value="Vipul" //permanent value
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value)
          }} />
        <button>Submit</button>
      </form>
      {allUsers.map((elem, idx)=>{
        return <h4 key={idx}>{elem}</h4>
      })}
    </div>
  );
}

export default App;
