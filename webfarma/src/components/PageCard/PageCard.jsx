import React from 'react'
import { Link } from 'react-router-dom'
import s from './PageCard.module.css'

export const PageCard = ({ img, title, path }) => {
    return (
        <div className={s.container}>
            <picture>
                <img src={img} />
            </picture>
            <p className={s.title}>{title}</p>
            <Link to={path}>Conheça</Link>
        </div>
    )
}
