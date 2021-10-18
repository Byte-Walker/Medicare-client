import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './components/Home/TopBar/TopBar';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';

function App() {
    return (
        <Router>
            <TopBar />
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
