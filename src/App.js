import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import { UserList } from './components/user/UserList'
import { UserListLazyLoad } from './components/user/UserListLazyLoad'
import UserInfo from './components/user/UserInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Graph-QL Samples</h1>
        <ul className="main-menu">
          <li>
            <Link to="/" exact>Home</Link>
          </li>
          <li>
            <Link to="/user-list" exact>User List</Link>
          </li>
          <li>
            <Link to="/user-list-lazy" exact>User List - Lazy Load</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user-list" exact component={UserList} />
          <Route path="/user-list-lazy" exact component={UserListLazyLoad} />
          <Route path="/user/:id" component={UserInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
