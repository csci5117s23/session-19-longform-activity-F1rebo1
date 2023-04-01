import logo from './logo.svg';
import './App.css';
import Flashcard from './flashcard';

function App() {
  const QUESTIONS = [{front: "question1", back:"answer1"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Flashcard></Flashcard>

    </div>
  );
}

export default App;
