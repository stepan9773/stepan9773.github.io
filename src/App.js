
import React from 'react' ;

import Main from './pages/main.js';
import Info from './pages/info.js'
import Nav  from "./pages/Nav";
import List_of_user from "./pages/list_of_user";
import Product from "./pages/product";
import Login from "./pages/login";
import Signup from "./pages/signup";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

    return (

        <Router>
            <Nav  />
            <Switch>
                <Route path='/' exact component={Main}></Route>
                <Route path='/info' exact component={Info}></Route>
                <Route path='/list' exact component={List_of_user}></Route>
                <Route path='/product' exact component={Product}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/signup' exact component={Signup}></Route>
            </Switch>


        </Router>

    );
}

export default App;
