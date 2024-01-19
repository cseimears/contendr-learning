import React, { useState } from "react";
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // fetch("http://localhost:5000/quizzes", {
    //   method: "POST",
    //   body: JSON.stringify({
        
    //   })
    // })
  }

  return (
    <div className="App"> 
      <form onSubmit={handleSubmit}>
        <h2  className="loginGreeting">Welcome to Contendr Learning!</h2>
        <p className="appDescription">A place to compete with your peers to see who knows their stuff.</p>
        <p className="compete">Win to take home the 🏆</p>
        <p className="signinPrompt">Login or register to get started</p>
        <input
          className="usernameInput" 
          id="username"
          value={username}
          placeholder="Username"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
          />
        <input 
          className="passwordInput"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          />
          <div className="LoginRegisterButtons"><button className="LoginButton">Login</button><button className="RegisterButton">Register</button></div>
      </form>
    </div>
  );
}

export default App
