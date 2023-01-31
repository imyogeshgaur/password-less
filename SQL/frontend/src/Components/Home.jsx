import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar"

const Home = () => {
  
  const [params] = useSearchParams()
  const token = params.get("token")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [userId, setuserId] = useState("")

  useEffect(() => {
    localStorage.setItem("jwt", token)
    fetch(`http://localhost:4000/auth/verify?token=${token}`, {
      mode: 'cors',
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setemail(data.email)
        setname(data.name)
        setuserId(data.userId)
      })
      .catch(err => console.log(err))
  }, [])

  const updateDetails = async () => {
    try {
      const res = await fetch("http://localhost:4000/auth/update", {
        mode: "cors",
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, userId})
      })
      const data = await res.json();
      const a = toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
        closeOnClick: false,
        closeButton: false,
        style: {
          color: "green",
          backgroundColor: "rgb(183, 248, 183)"
        }
      })
      if (a == 1) {
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavBar />
      <ToastContainer autoClose={1000} />
      <div className={"Auth-form card-light mx-auto mt-5"}>
        <div className="Auth-form-content">
          <h3 className={"card-title text-center mb-2 text-dark"}>User Details</h3>
          <div className="form-group mt-3">
            <label className={"text-dark"}>User's Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label className={"text-dark"}>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 my-3">
            <button type="submit" className="btn btn-primary" onClick={updateDetails}>
              Update Details
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home