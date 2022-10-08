import styles from './App.module.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HomePage } from './pages';


function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Route path="/" component={HomePage} exact></Route>
      </Router>
    </div>
  )
}

export default App
