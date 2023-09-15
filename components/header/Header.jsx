import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import HeaderShoppingBag from './HeaderShoppingBag'

function Header() {
    return (
        <header className={styles.header} id='header'>
            <div className={`container ${styles.headerContainer}`}>
                <Link href={'/'}>
                    <div className='logo'>
                        <span className="material-symbols-outlined">auto_stories</span>
                        <h1>kitap<span>mgzsı</span></h1>
                    </div>
                </Link>
                <nav>
                    <Link href={'/'}>
                        <span className="material-symbols-outlined">home</span>
                    </Link>
                    <Link href={'/kitaplar'}>Kitaplar</Link>
                    <Link href={'/hakkimizda'}>Hakkımızda</Link>
                    <Link href={'/iletisim'}>İletişim</Link>
                    <HeaderShoppingBag />
                </nav>
            </div>
        </header>
    )
}

export default Header