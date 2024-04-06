import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from './AuthProvider';

const Register = () => {
  useEffect(()=>{
    const time = setInterval(() => {
      console.log("observer");
    }, 1000);

    return()=>{
      clearInterval(time);
    }
  }, [])

    const {registerUser, setRegUser} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(password.length<6){
            setError("Insert at least 6 charecters");
            return;
        }
        if(password!=confirmPassword){
            setError("Passwords didn't match");
            return;
        }
        // if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<.test>,.?/~\-]).*$/.test(password)){
        //     setError("Password should contain an uppercase, a lowercase , a digit and a special charecter");
        //     return;
        // }
        if(!/@gmail\.com$/.test(email)){
            setError("Not a valid email");
            return;
        }
        setError("")
        registerUser(email, password)
        .then(res=>{
            setRegUser(res.user);
        })
        .catch(err=>setError(err.message))

        // console.log(name, email, password, confirmPassword);
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-success">Register</button>
              </div>
              <div>
                {
                    error && <span className="text-red-600">{error}</span>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
