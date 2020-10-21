
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";



function SigninScreen (props) {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const userSignin = useSelector(state=>state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
        
        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }



    return  <div className="form">
    <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h2>Sign-In</h2>
            </li>
            <li>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
            </li>
            <li>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} >
                    </input>
            </li>
            <li>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)}>
                </input>
            </li>
            <li>
                <button type="submit" className="button primary">SignIn</button>
            </li>
            <li>
                New User?
            </li>
            <li>
                <Link to="/register" className="button button-secondary text-center">Create your account</Link>
            </li>
        </ul>
    </form>
    </div>
}

export default SigninScreen;