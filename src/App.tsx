

import './App.css';

function App() {
  let name = "Esme"
  console.log("App has updated!")
  console.log("name", name)
  return (
    <div className="App">
      <header className="App-header">
        Name changer!
      </header>
      <div className="name-display">
        Name: {name}
      </div>
      <div>
        Change name to:
        <button onClick={() => name = "Esme"}>Esme</button>
        <button onClick={() => name = "Olivia"}>Olivia</button>
        <button onClick={() => name = "India"}>India</button>
      </div>
      <button onClick={()=>console.log(name)}>Log name</button>

    </div>

  );
}

export default App;
