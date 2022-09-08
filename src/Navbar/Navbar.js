import { Component } from "react";
import { Link } from "react-router-dom"; //react rouder dom is  used to create links here
import './Nav.css';//importing Navbar css file

// Creating Navbar functional Component
const Navbar = () => {
    return (

        <ul className="ul">
            <li className="link"><Link to="/dashboard" style={{ padding: "10px", color:"white"}}>
                Dashboard
            </Link></li>
            <li className="link"><Link  to="/Pughmatrix" style={{ padding: "10px",color:"white" }}>
                Pugh Matrix Analysis
            </Link></li>
            <li className="link"><Link to="/SurveyResults" style={{ padding: "10px",color:"white" }}>
                SurveyResults
            </Link></li>
            
            <li className="link"><Link to="/detailedpughmatrix" style={{ padding: "10px",color:"white" }}>
                Detailed Pugh Matrics Analysis
            </Link></li>
            <li className="linklogout"><Link to="/" style={{ padding: "10px",color:"white" }}>
                Log Out
            </Link></li>
        </ul>


    );
};
export default Navbar;