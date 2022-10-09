import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages'

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/login" render={() => <h1>登录页面</h1>}></Route>
          <Route path="*" render={() => <h1>404</h1>}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
