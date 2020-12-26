import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AppLogin from './Components/AppLogin';
import EmployeeList from './Components/EmployeeList'

function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={AppLogin} />
                
                <Route path="/employeeList" exact strict component={EmployeeList} />
                
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
