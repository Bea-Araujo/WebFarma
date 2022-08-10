import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Product } from './pages/Product/Product'
import { Products } from './pages/Products/Products'
import { NewProduct } from './pages/NewProduct/NewProduct'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/product/id/:id' element={<Product />} />
                <Route path='/new-product' element={<NewProduct />} />
            </Switch>
        </BrowserRouter>
    )
}
