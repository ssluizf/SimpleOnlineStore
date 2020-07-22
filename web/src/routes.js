import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact render={() => <Navbar><Home></Home></Navbar>} />
            <Route path="/cart" render={() => <Navbar><Cart></Cart></Navbar>} />
        </BrowserRouter>
    )
}

export default Routes;