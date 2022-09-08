import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

// Create the login function in the login Component
const Login = () => {
    const navigate = useNavigate(); //hook which gives access to navigation object
    const [username, setusername] = useState("");//create the empty state for username and create the setter
    const [password, setpassword] = useState("");//create the empty state for password and create the setter

    const users = [
        { username: "admin@user.com", password: "admin" },
        { username: "admin2@user.com", password: "admin2" }
    ]; // creating the users array

    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username); //finding the relevent user details
        if (account && account.password === password) { //if condition to check the password
            navigate("/dashboard");//navigate to the dashboard
        }
    };

    return (
        <div className="body">
            <div className="bodyitems">
                <div className="Loginform">
                     {/* Calling the handleSubmit function */}
                    <form className="form" onSubmit={handleSubmit}>
                       
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="Username"
                                value={username}
                                // set the values to the username 
                                onChange={(e) => setusername(e.target.value)}
                                placeholder="admin@email.com" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="Password"
                                // set the values to the password 
                                onChange={(e) => setpassword(e.target.value)}
                                placeholder="*********"
                            />
                        </div>
                        <button className="primary" value="Submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;