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
        <h1>Teacher Login</h1>
        <label htmlFor="username-label">Username</label>
        <input 
          id="username-label"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
          />
        <label htmlFor="password-label">Password</label>
        <input 
          id="password-label"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          />
          <button>Login</button>
      </form>
    </div>
  );
}

export default App
