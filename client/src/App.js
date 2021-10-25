import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD Apllication</h1>

      <div className="form">
        <label>Movie Name</label>
        <input type="text" name="movieName" />
        <label>Review</label>
        <input type="text" name="review" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
