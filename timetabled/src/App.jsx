import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>New Weekly Habits</h1>
      <h2>Adopt some new weekly habits by following this schedule!</h2>
      <Calendar />
    </div>
  )
}

export default App