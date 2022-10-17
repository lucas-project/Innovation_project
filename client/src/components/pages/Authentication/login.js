import React, { useState } from "react";
import { useNavigate } from "react-router";
import registerPage from "./registration";
import { Link } from "react-router-dom";
import Card from "../../Card";
import composerP from "../../img/composerP.jpg";
import Footer from "../../Footer";

const titleStyle = {
    width:'40%',
    height:'50px',
    display:'flex',
    justifyContent:'center',
    margin:'auto'
}
const wrapper = {
    width:'40%',
    height:'100px',
    display:'flex',
    justifyContent:'center',
    margin: 'auto'
}
export default function Create() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [tokens, setTokens]=useState();
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
        let responseToken = "";
        let responseEmail = "";
        // alert(JSON.stringify(newPerson))
        const responses = await fetch("http://localhost:3000/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            // .then((response) => response.json())
            // .then((result)=>{
            //     if(result.ok){
            //         alert(result)
            //     } else {
            //         alert("Please check your login information-1.");
            //     }
            // })
        //
        // setForm({ email: "", password: ""});
            .then(response => response.json())
            // .then(data => setTokens(data.token))
            .then(data => responseToken=data.token)
            // .then(data => alert("data "+JSON.stringify(data)))
            // .then(data => responseEmail=data.result)
            // .then(data => alert(JSON.stringify(data.email)))
            .catch(error => {
                window.alert(error);
                return;
            });

        setTokens(responseToken);
        sessionStorage.setItem("tokens", responseToken);
        // alert(sessionStorage.getItem("tokens"));
        // alert(responseEmail);
        alert("Successfully login as "+sessionStorage.getItem("tokens"))
        setForm({ email: "", password: ""});
        navigate("/");
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <br/><br/><br/><br/>
            <div style={titleStyle}>
            <h3>Login</h3>
            </div>
            <div style={wrapper}>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        value={form.password}
                        onChange={(e) => updateForm({ password: e.target.value })}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <input
                        type="submit"
                        value="login"
                        className="btn btn-primary"
                    />
                </div>
            </form>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <div style={titleStyle}><p>Don't have an account?</p>
                <Link
                    to={{pathname:`/api/users`}}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <div>register here</div>
                </Link>
                </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}