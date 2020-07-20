import React from 'react'
import { Route, BrowserRouter} from 'react-router-dom';

import Home from './components/template/Home'
import Cart from './components/template/Cart'
import Navbar from './components/template/Navbar'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact render={() => <Navbar><Home></Home></Navbar>} />
            <Route path="/cart" render={() => <Navbar><Cart></Cart></Navbar>} />
        </BrowserRouter>
    )
}

export default Routes;