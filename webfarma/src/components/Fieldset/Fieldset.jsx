import React from 'react'
import s from './Fieldset.module.css'

export const Fieldset = ({ name, label, type, value, keyState, func }) => {
    return (
        <fieldset className={s.fieldset}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={({ target }) => func(target, keyState)} />
        </fieldset>
    )
}
