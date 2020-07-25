import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact render={() => <Navbar></Navbar>} />
            <Route path="/cart" render={() => <Navbar></Navbar>} />
        </BrowserRouter>
    )
}

export default Routes;