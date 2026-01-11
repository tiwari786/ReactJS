import React, { useState } from 'react';
import Card from './components/Card';

const App = () => {

  const [userName, setUserName] = useState("")
  const [userRole, setUserRole] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [userDesc, setUserDesc] = useState("")

  const localData = JSON.parse(localStorage.getItem("all-users")) || []
  const [allUsers, setAllUsers] = useState(localData)
  console.log(allUsers)

  const submitHandler = (e) => {
    e.preventDefault()

    // if(!userName.trim() || !userRole.trim() || !imageUrl.trim() || userDesc.trim()) return

    const oldUsers = [...allUsers];
    oldUsers.push({ userName, userRole, imageUrl, userDesc })

    setAllUsers(oldUsers)
    localStorage.setItem("all-users", JSON.stringify(oldUsers))


    setImageUrl("")
    setUserDesc("")
    setUserName("")
    setUserRole("")

  }

  const deleteHandler = (idx) => {
    const copyUser = [...allUsers]
    copyUser.splice(idx, 1)

    setAllUsers(copyUser)
    localStorage.setItem("all-users", JSON.stringify(copyUser))
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='p-2 flex flex-wrap justify-center'>

        <input
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          placeholder='Enter your name' />

        <input
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'
          type="text"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value)
          }}
          placeholder='Image url' />

        <input
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'
          type="text"
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value)
          }}
          placeholder='Enter role' />

        <input
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'
          type="text"
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value)
          }}
          placeholder='Enter description' />
        <button className='px-5 py-2 bg-emerald-700 active:scale-95 text-xl font-semibold rounded m-2 w-[92%] cursor-pointer'>Create User</button>
      </form>

      <div className='px-2 py-10 flex gap-3 flex-wrap justify-center'>
        {
          allUsers.map((elem, idx) => {
            return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />
          })
        }
      </div>
    </div>
  );
}

export default App;
