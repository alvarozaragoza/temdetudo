import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index.js';
import NotFound from './pages/NotFound/index.js';
import SignIn from './pages/SignIn/index.js';
import Produto from './pages/Produto/index.js';
import Vendas from './pages/Vendas/index.js';
import Venda from './pages/Venda/index.js';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/signin">
                <SignIn />
            </Route>
            <Route path="/prod/:id">
                <Produto />
            </Route>
            <Route exact path="/vendas">
                <Vendas />
            </Route>
            <Route path="/venda/:id">
                <Venda />
            </Route>
            
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}