import React from 'react'
import { Link } from 'react-router-dom'
import s from './ProductCard.module.css'
import editBtn from '../../assets/BUTTON-EDIT.svg'

export const ProductCard = ({ data }) => {
    const { id, name, brand, quantity, value, blackBand, redBand, yellowBand } = data

    const createBand = (blackBand, redBand, yellowBand) => {
        return blackBand ? ('Tarja preta')
            : redBand ? ('Tarja vermelha')
                : yellowBand ? ('Tarja amarela') : ('NA')
    }
    return (
        <div className={s.container}>

            <p className={s.name}>{name}</p>
            <p className={s.brand}>{brand}</p>
            <p className={s.quantity}>{quantity}</p>
            <p className={s.value}>{value}</p>
            <p className={s.band}>
                {
                    createBand(blackBand, redBand, yellowBand)
                }
            </p>
            <Link to={`/product/id/${id}`}>
                <img src={editBtn} alt="" />
            </Link>

        </div>
    )
}
