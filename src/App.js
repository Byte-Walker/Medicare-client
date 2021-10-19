import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import TopBar from './components/Home/TopBar/TopBar';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ServicePage from './components/ServicePage/ServicePage';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Home/Footer/Footer'
import { createContext } from 'react';
import useFirebase from './hooks/useFirebase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FindConsultant from './components/FindConsultant/FindConsultant';
import Appointment from './components/Appointment/Appointment';

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
                    <PrivateRoute exact path="/doctors">
                        <FindConsultant />
                    </PrivateRoute>
                    <PrivateRoute exact path="/appointment">
                        <Appointment />
                    </PrivateRoute>
                    {/* <Route exact path="/service/:serviceName">
                        <ServicePage />
                    </Route> */}
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </AuthContext.Provider>
        </Router>
    );
}

export default App;
