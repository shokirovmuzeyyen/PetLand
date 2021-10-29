import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD Application</h1>

      <div className="form">
        <label>Movie Name</label>
        <input type="text" name="movieName" />
        <label>Review</label>
        <input type="text" name="review" />

        <button>Submit</button>
      </div>

      <h1>SIGN IN</h1>
      <div className="form">
        <label>E-mail address</label>
        <input type="text" name="mail" />
        <label>Password</label>
        <input type="text" name="password" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
