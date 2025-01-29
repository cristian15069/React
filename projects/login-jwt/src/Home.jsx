/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.Status === "success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setMessage(res.data.message);
        }
      })
  }, [])

  const handleLogout = () => {
    axios.get('http://localhost:8081/logout')
      .then(res => {
        if (res.data.Status === "success") {
          location.reload(true);
        }else{
          alert('error');
        }
      }).catch(err => console.log(err));
  }

  return (
    <>
      {
        auth ?
          <div>
            <h1>BIENVENIDOS {name}</h1>
            <h3>Cristian Alberto Garcia Garcia </h3>
            <h3></h3>
            <button onClick={handleLogout}><a href="./">Log out</a></button>
          </div>
          :
          <div>
            <h1>Home</h1>
            <h3>{message}</h3>
            <br />
            <button><a href="./login">Log in</a></button>
          </div>
      }
    </>
  )
}

export default Home