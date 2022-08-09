import React from 'react'
import s from './Home.module.css'
import arrow1 from '../../assets/Arrow1.svg'
import arrow2 from '../../assets/Arrow2.svg'

export const Home = () => {
    return (
        <main className={s.container}>
            <section className={s.carousel}>
                <button>
                    <img src={arrow1} alt="" style={{ paddingLeft: '40px' }} />
                </button>
                <div className={s.images}>
                    <img src="" alt="" />
                    <div>
                        {/*  */}
                        <p>a</p>
                    </div>
                </div>
                <button>
                    <img src={arrow2} alt="" style={{ paddingRight: '40px' }} />
                </button>
            </section>
        </main>
    )
}
