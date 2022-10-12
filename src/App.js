import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, DetailPage, CounterPage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="/counter" element={<CounterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/detail/:id/:other" element={<DetailPage />}></Route>
          <Route path="*" element={<h1>404 not found</h1>} exact></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
