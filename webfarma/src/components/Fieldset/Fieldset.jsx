import React from 'react'

export const Fieldset = ({ name, label, type, value, keyState, func }) => {
    return (
        <fieldset>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={({ target }) => func(target, keyState)} />
        </fieldset>
    )
}
