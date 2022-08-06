import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Products } from './pages/Products/Products'


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
            </Switch>
        </BrowserRouter>
    )
}
