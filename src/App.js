import React from "react";
import "./App.css";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";

function App() {
	return (
		<div className="App">
			{/* <div className="loginCard">
				<h2>Login/Sign In</h2>
				<small>
					<b>Enter user ID and passwrod to login</b>
				</small>
				<LoginForm />
			</div> */}
			<div className="home_wrapper">
				<Home />
			</div>
		</div>
	);
}

export default App;
