import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, DetailPage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/detail/:id" component={DetailPage}></Route>
          <Route path="*" render={() => <h1>404</h1>}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
