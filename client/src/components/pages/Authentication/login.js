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

        await fetch("http://localhost:3000/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(newPerson),
            body: JSON.stringify({
                email: "this.state.idValue",
                password: "this.state.pwValue"
            }),
        })

         .then((response) => response.json())
            .then((result)=>{
                if(result.status){
                    alert(result.status);
                    navigate("/");
                } else {
                    alert("Please check your login information.");
                }
            });

        setForm({ email: "", password: ""});

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