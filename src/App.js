import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    )
}

export default App;