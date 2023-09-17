import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import HeaderShoppingBag from './HeaderShoppingBag'
//icons
import logoIcon from '../../app/icon.png'

function Header() {
    return (
        <header className={styles.header} id='header'>
            <div className={`container ${styles.headerContainer}`}>
                <Link href={'/'}>
                    <div className='logo'>
                        <Image src={logoIcon} alt='asda' width={24} height={24} />
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