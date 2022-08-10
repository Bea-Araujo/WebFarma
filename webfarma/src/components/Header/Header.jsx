import React from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={s.container}>
            <Link to='/'>WebFarma</Link>
            <nav className={s.nav}>
                <Link to='/products'>Medicamentos</Link>
                <Link to='/'>Categorias</Link>
                <Link to='/'>Farmacêuticos</Link>
                <Link to='/'>Log-in</Link>
            </nav>
        </header>
    )
}
