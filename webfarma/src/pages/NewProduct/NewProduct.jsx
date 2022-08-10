import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Fieldset } from '../../components/Fieldset/Fieldset'
import { postNewProduct } from '../../services/api'
import s from './NewProduct.module.css'

export const NewProduct = () => {
    const [band, setBand] = useState()
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
                <select name="bands" id="bands" onChange={({ target }) => HandleRadio(target)} required>
                    <option value=''>-</option>
                    <option value="blackBand">Preta</option>
                    <option value="redBand">Vermelha</option>
                    <option value="yellowBand">Amarela</option>
                </select>
            </fieldset>

            <button
                onClick={() => {
                    if (info.blackBand == 0 && info.redBand == 0 && info.yellowBand == 0) setBand(true)
                    else {
                        postNewProduct(info)
                        setBand()
                    }
                    console.log(info)
                }}
            >Clique</button>

            <div>
                {
                    !!band && <p className={s.errorMsg}>Favor preencher todos os campos</p>
                }
            </div>
        </main>
    )
}
