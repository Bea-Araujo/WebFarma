import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Fieldset } from '../../components/Fieldset/Fieldset'
import { getProducts, getProductById, postNewProduct } from '../../services/api'

export const NewProduct = () => {

    const [lastId, setLastId] = useState(0)

    const [info, setInfo] = useState({
        name: '',
        brand: '',
        quantity: 0,
        value: 0,
        blackBand: 0,
        redBand: 0,
        yellowBand: 0
    })

    function HandleInput(target, key) {
        const value = target.value;
        setInfo({ ...info, [key]: value });
    }

    function HandleRadio(target) {
        const value = target.value
        switch (value) {
            case 'blackBand':
                setInfo({ ...info, blackBand: 1, redBand: 0, yellowBand: 0 });
                break;
            case 'redBand':
                setInfo({ ...info, blackBand: 0, redBand: 1, yellowBand: 0 });
                break;
            case 'yellowBand':
                setInfo({ ...info, blackBand: 0, redBand: 0, yellowBand: 1 });
                break;
        }
    }

    useEffect(() => {

    }, [])

    return (
        <main>
            <h1>Product</h1>
            <Fieldset name='name' label='Nome' type='text' value={info.name} keyState='name' func={HandleInput} />
            <Fieldset name='brand' label='Marca' type='text' value={info.brand} keyState='brand' func={HandleInput} />
            <Fieldset name='quantity' label='Quantidade' type='number' value={info.quantity} keyState='quantity' func={HandleInput} />
            <Fieldset name='value' label='Valor' type='number' value={info.value} keyState='value' func={HandleInput} />

            <p>Tarja:</p>

            <fieldset>
                <select name="bands" id="bands" onChange={({ target }) => HandleRadio(target)}>

                    <option value="blackBand">Preta</option>
                    <option value="redBand">Vermelha</option>
                    <option value="YellowBand">Amarela</option>
                </select>
            </fieldset>

            <button
                onClick={() => {
                    postNewProduct(info)
                    console.log(info)
                }}
            >Clique</button>

        </main>
    )
}
