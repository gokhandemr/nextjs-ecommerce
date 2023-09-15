import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div>
                    <span className="material-symbols-outlined">auto_stories</span>
                    <h4>kitap mağazası</h4>
                </div>
                <p>2023 - Gökhan Demir</p>
                <Link href={'#header'} >yukarı çık </Link>
            </div>
        </footer>
    )
}

export default Footer