import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './LoginForm';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
            </Routes>
        </Router>
    )
}

export default App;
