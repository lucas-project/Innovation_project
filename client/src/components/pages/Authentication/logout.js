import React from "react";
import {Link, useNavigate} from "react-router-dom";
import HomeFooterJoinUs from "../../home-footer-joinUs";
import Footer from "../../Footer";

const Logout = () => {
    const navigate = useNavigate();
    sessionStorage.clear()

    const containerS = {
        width:"100%",
        height:"auto",
        justifyContent:"center"
    }
    const wordS = {
        width: "40%",
        height: "20rem",
        justifyContent: "center",
        background:"#ff3453",
        margin:"auto"
    }
    const titleS = {
        marginLeft:"30%"
    }

    return (
        <div style={containerS}>
            <br/><br/><br/>
            <div style={wordS}>
                <br/><br/>
                <h4 style={titleS}>You have logged out.</h4>
            </div>
            <div>
                <Link
                    to={{pathname:'/api/auth'}}
                ><p>Login in here</p></Link>
                <Link
                    to={{pathname:'/'}}
                ><p>Return to homepage</p></Link>
            </div>

            <footer>
                <HomeFooterJoinUs />
                <Footer />
            </footer>
        </div>
    );
};

export default Logout;