import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Authentication = () => {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState("signin")
  const [name, setName] = useState("")
  const [email, setemail] = useState("")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }   


  const signUpApiCall = async () => {
    try {
      const res = await fetch("http://localhost:4000/auth/signup", {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      })
      const data = await res.json();
      setName("")
      setemail("")
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
          window.location.href = "/"
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const loginApiCall = async () => {
    try {
      const res = await fetch("http://localhost:4000/auth/login", {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({ email })
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
      console.log(error);
    }
  }

  if (authMode === "signin") {
    return (
      <>
        <NavBar />
        <ToastContainer autoClose={1000} />
        <div className={"Auth-form card-light mx-auto mt-5"}>
          <div className="Auth-form-content">
            <h3 className={"card-title text-center mb-2 text-dark"}>Sign In</h3>
            <div className="text-center">
              Not registered yet?
              <span className={"link-primary ms-2"} onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label className={"text-dark"}>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter Email "
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-danger" onClick={loginApiCall}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot  <Link to="/forgetPass" className={'link-primary'} style={{ textDecoration: "none" }}>password</Link>
            </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <NavBar />
      <ToastContainer autoClose={1000} />
      <div className={"Auth-form card-light mx-auto mt-5"}>
        <div className="Auth-form-content">
          <h3 className={"card-title text-center mb-2 text-dark"}>Sign Up</h3>
          <div className="text-center">
            Already registered ?
            <span className={"link-primary ms-2"} onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label className={"text-dark"}>User's Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-danger" onClick={signUpApiCall}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot  <Link to="#" className={'link-primary'} style={{ textDecoration: "none" }}>password</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Authentication