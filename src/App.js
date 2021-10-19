import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation,
} from 'react-router-dom';
import TopBar from './components/Home/TopBar/TopBar';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ServicePage from './components/ServicePage/ServicePage';
import NotFound from './components/NotFound/NotFound';
import { createContext } from 'react';
import useFirebase from './hooks/useFirebase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const AuthContext = createContext();

function App() {
    const { user } = useFirebase();
    return (
        <Router>
            <AuthContext.Provider value={user}>
                <TopBar />
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/signup">
                        {user.email ? <Redirect to="/" /> : <Signup />}
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute exact path="/service/:serviceName">
                        <ServicePage />
                    </PrivateRoute>
                    {/* <Route exact path="/service/:serviceName">
                        <ServicePage />
                    </Route> */}
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </AuthContext.Provider>
        </Router>
    );
}

export default App;
