import React from 'react'
import s from './Product.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Fieldset } from '../../components/Fieldset/Fieldset'
import { deleteProduct, getProductById, putProduct } from '../../services/api'
import Button from '../../components/Button/Button'

export const Product = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        name: '',
        brand: '',
        quantity: 0,
        value: 0,
        blackBand: 0,
        redBand: 0,
        yellowBand: 0
    })

    const [initialBand, setInitialBand] = useState('')

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

    // console.log(info)

    async function req() {
        const resp = await getProductById(params.id);
        setInfo(resp);
    }

    useEffect(() => {
        req()
        setInitialBand(info.blackBand ? 'blackBand' : info.redBand ? 'redBand' : 'yellowBand')
        console.log(info.blackBand ? 'blackBand' : info.redBand ? 'redBand' : 'yellowBand')
    }, [])

    const HandleDelete = () => {
        deleteProduct(params.id)
        navigate('/products')
    }

    const HandleUpdate = () => { putProduct(params.id, info) }

    return (
        <main className={s.container}>

            <form className={s.form}>
                <h1 style={{ textAlign: 'center' }}>Product {params.id}</h1>

                <Fieldset name='name' label='Nome' type='text' value={info.name} keyState='name' func={HandleInput} />
                <Fieldset name='brand' label='Marca' type='text' value={info.brand} keyState='brand' func={HandleInput} />
                <Fieldset name='quantity' label='Quantidade' type='number' value={info.quantity} keyState='quantity' func={HandleInput} />
                <Fieldset name='value' label='Valor' type='number' value={info.value} keyState='value' func={HandleInput} />

                <div className={s.select}>

                    <p>Tarja:</p>

                    <select name="bands" id="bands" onChange={({ target }) => HandleRadio(target)}
                        defaultValue={initialBand}>

                        <option value="blackBand">Preta</option>
                        <option value="redBand">Vermelha</option>
                        <option value="yellowBand">Amarela</option>
                    </select>

                    <div className={s.buttonContainer}>
                        <Button
                            text='Atualizar'
                            onClick={HandleUpdate}
                        />

                        <Button
                            text='Excluir'
                            onClick={HandleDelete}
                        />
                    </div>
                </div>

            </form>

        </main>
    )
}
