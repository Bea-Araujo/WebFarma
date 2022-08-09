import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { getProducts } from '../../services/api'
import s from './Products.module.css'

export const Products = () => {

    const [products, setProducts] = useState([])

    async function req() {
        const resp = await getProducts()
        setProducts(resp)
    }

    useEffect(() => {
        console.log('a')
        req()
        console.log(products)
    }, [])

    return (
        <main className={s.container}>

            <h1>Medicamentos</h1>

            <div className={s.upperSection}>
                <div className={s.searchSection}>
                    <input type='text' />
                    <button>Pesquisar</button>
                </div>
                <Link to='/new-product'>Novo Produto</Link>
            </div>

            <div className={s.fields}>
                <p className={s.name}>Nome</p>
                <p className={s.brand}>Marca</p>
                <p className={s.quantity}>Quantidade</p>
                <p className={s.band}>Tarja</p>
                <p className={s.btn}></p>
            </div>

            <div className={s.gridContainer}>

                {
                    !!products && products.map((el, i) => {
                        return (<ProductCard key={i} data={el} />)
                    })
                }
            </div>
        </main>
    )
}
