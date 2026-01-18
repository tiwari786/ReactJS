import React, { useEffect, useState } from 'react';
import axios from "axios"

const App = () => {

  // const [count1, setCount1] = useState(0)
  // const [count2, setCount2] = useState(0)

  const [username, setUsername] = useState([])
 const [num, setNum] = useState(0)

  const getData = async () => {
    const response = await axios.get("https://randomuser.me/api")
    setUsername((response.data.results[0].name.first)+" "+(response.data.results[0].name.last))
  }

  useEffect(() => {
    getData()
  }, [num])


  return (
    <>
      {/* <div>
        <h1>{count1}</h1>
        <button onClick={() => {
          setCount1(count1 + 1)
        }} >Inc</button>

        <br />

        <h1>{count2}</h1>
        <button onClick={() => {
          setCount2(count2 + 1)
        }} >Inc</button>
      </div> */}

      <div>{username}</div>
      <br />
      <p>{num}</p>
      <button onClick={()=>{
        setNum(num+1)
      }}>
        inc
      </button>

    </>
  );
}

export default App;
