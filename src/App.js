import './App.css';
import Nav from './components/navbar/nav';
import Typing from './components/Typing';
function App() {
  return (
    <div className="App">
      <Nav />
      <Typing
        text = {[
          "Software Developer",
          "Web Developer",
          "Mobile Developer",
          "Game Developer",
        ]}
        typingSpeed = {100}
        deletingSpeed = {50}
      />
    </div>
  );
}

export default App;