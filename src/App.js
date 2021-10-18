import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './components/Home/TopBar/TopBar';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ServicePage from './components/ServicePage/ServicePage';

function App() {
    return (
        <Router>
            <TopBar />
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/service/:serviceName">
                    <ServicePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
