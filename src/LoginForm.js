import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as MyStyle from './Style';
import "./LoginForm.css";

function LoginForm() {
    const [signIn, toggle] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const adminUser = {
        email: "admin@example.com",
        password: "admin123"
    }

    const Login = (event) => {
        event.preventDefault();

        if (email === adminUser.email && password === adminUser.password) {
            console.log("Logged in");
            navigate("/dashboard");
        } else {
            console.log("Details do not match!");
        }
    }

    return(
        <MyStyle.Container>
            <MyStyle.SignUpContainer signinIn={signIn}>
                <MyStyle.Form onSubmit={Login}>
                    <MyStyle.Title id="signin">Create Account</MyStyle.Title>
                    <MyStyle.Input type='text' placeholder='Name' required/>
                    <MyStyle.Input type='email' placeholder='Email' required onChange={e => setEmail(e.target.value)}/>
                    <MyStyle.Input type='password' placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
                    <MyStyle.Button type="submit">Sign Up</MyStyle.Button>
                </MyStyle.Form>
            </MyStyle.SignUpContainer>

            <MyStyle.SignInContainer signinIn={signIn}>
                <MyStyle.Form onSubmit={Login}>
                    <MyStyle.Title id="signin">Sign In</MyStyle.Title>
                    <MyStyle.Input type='email' placeholder='Email' required onChange={e => setEmail(e.target.value)}/>
                    <MyStyle.Input type='password' placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
                    <MyStyle.Anchor href='#'>Forgot your password?</MyStyle.Anchor>
                    <MyStyle.Button type="submit">Sign In</MyStyle.Button>
                </MyStyle.Form>
            </MyStyle.SignInContainer>

            <MyStyle.OverlayContainer signinIn={signIn}>
                <MyStyle.Overlay signinIn={signIn}>

                <MyStyle.LeftOverlayPanel signinIn={signIn}>
                    <MyStyle.Title>Welcome Back!</MyStyle.Title>
                    <MyStyle.Paragraph>
                        To keep connected with us please login with your personal info
                    </MyStyle.Paragraph>
                    <MyStyle.GhostButton onClick={() => toggle(true)}>
                        Sign In
                    </MyStyle.GhostButton>
                    </MyStyle.LeftOverlayPanel>

                    <MyStyle.RightOverlayPanel signinIn={signIn}>
                      <MyStyle.Title>Hello, Friend!</MyStyle.Title>
                      <MyStyle.Paragraph>
                          Enter Your personal details and start journey with us
                      </MyStyle.Paragraph>
                          <MyStyle.GhostButton onClick={() => toggle(false)}>
                              Sign Up
                          </MyStyle.GhostButton> 
                    </MyStyle.RightOverlayPanel>

                </MyStyle.Overlay>
            </MyStyle.OverlayContainer>

        </MyStyle.Container>
    )
}

export default LoginForm;
