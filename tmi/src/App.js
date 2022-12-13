import './App.css';
import TeacherHomePage from './Components/TeacherHomePage';
import StudentHomePage from './Components/StudentHomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <TeacherHomePage/> */}
          <StudentHomePage/>
      </header>
    </div>
  );
}

export default App;
