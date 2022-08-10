import React from 'react'
import s from './Home.module.css'
import farma1 from '../../assets/img-farma.jpg'
import farmaceuticos from '../../assets/farmaceuticos.png'
import Medicamentos from '../../assets/Medicamentos.png'
import categoria from '../../assets/categoria.png'

import { PageCard } from '../../components/PageCard/PageCard'

export const Home = () => {
    return (
        <main className={s.container}>
            <section className={s.intro}>
                <article>
                    <h2>Welcome to WebFarma,</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, reprehenderit? Ut consequuntur repellat adipisci odit dolores, saepe dolorem quidem laboriosam delectus rerum autem quibusdam maiores, nulla incidunt ipsum illum perferendis.</p>
                </article>
                <picture>
                    <img src={farma1} alt="" />
                </picture>
            </section>

            <section className={s.pageSection}>
                <PageCard img={categoria} title='Medicamentos' path='/products' />
                <PageCard img={Medicamentos} title='Categoria' path='/' />
                <PageCard img={farmaceuticos} title='Farmacêuticos' path='/' />
            </section>

        </main>
    )
}
