import React, { useEffect, useState } from 'react';
import axios from "axios"

const App = () => {

  const [allData, setAllData] = useState([])

  async function getData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    setAllData(res.data)
  }

  const clr1 = Math.floor(Math.random() * 256)
  const clr2 = Math.floor(Math.random() * 256)
  const clr3 = Math.floor(Math.random() * 256)

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>

      {
        allData.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                backgroundColor: `rgb(${clr1},${clr2},${clr3})`,
                padding: "16px",
                margin: "10px 0",
                width: "300px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
              }}
            >
              <h3>{user.name}</h3>
              <p><b>Username:</b> {user.username}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Phone:</b> {user.phone}</p>
              <p><b>City:</b> {user.address.city}</p>
              <p><b>Company:</b> {user.company.name}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
