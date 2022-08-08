import React from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={s.container}>
            <Link to='/'>WebFarma</Link>
            <nav className={s.nav}>
                <Link to='/products'>Medicamentos</Link>
                <Link to='/products'>Categorias</Link>
                <Link to='/products'>Farmacêuticos</Link>
                <Link to='/products'>Log-in</Link>
            </nav>
        </header>
    )
}
