'use client'
import React from 'react'
import styles from './Categories.module.css'

function Categories({ setCategories }) {

    return (
        <section className={styles.categories} id='books'>
            <div className='container'>
                <nav>
                    <button className={styles.tharThree} onClick={() => (setCategories('all'))}>Tümü</button>
                    <button className={styles.tharThree} onClick={() => (setCategories('Tarih'))}>Tarih</button>
                    <button className={styles.tharThree} onClick={() => (setCategories('Kişisel Gelişim'))}>Kişisel Gelişim</button>
                    <button className={styles.tharThree} onClick={() => (setCategories('Gezi'))}>Gezi</button>
                    <button className={styles.tharThree} onClick={() => (setCategories('Fantastik'))}>Fantastik</button>
                    <button className={styles.tharThree} onClick={() => (setCategories('Polisiye'))}>Polisiye</button>
                </nav>
            </div>
        </section>
    )
}

export default Categories