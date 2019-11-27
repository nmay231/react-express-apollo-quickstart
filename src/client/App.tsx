/** @format */

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                    path="*"
                    component={() => (
                        <h1 className="mt-5">404! Page not found</h1>
                    )}
                />
            </Switch>
        </Router>
    )
}

export default App
