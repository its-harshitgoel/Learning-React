import './App.css';
import Nav from './components/navbar/nav';
import Title from './components/Tile/Tile';
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
      <Title
        header = "Welcome to my portfolio"
        subHeader = "I am a software developer"
        img = {"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
        text = "I am a software developer with experience in web, mobile, and game development."
        link = "#"
        linkText = "Learn more"
        position = "img-right"
        bgColor = "red"
      />

    </div>
  );
}

export default App;