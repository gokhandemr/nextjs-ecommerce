import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Banner.module.css'
import bannerIMG from './images/banner.jpg'
import bannerIMGBottom from './images/banner-bottom.png'

function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerIMG} style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <Image
                    src={bannerIMG}
                    placeholder='blur'
                    blurDataURL='../../images/blur.jpg'
                    style={{ position: 'absolute' }}
                    fill
                    alt='bookstore' />
                <div className={styles.bannerIMGBottom}>
                    <Image
                        src={bannerIMGBottom}
                        alt='bookstore-bottom'
                        fill
                        placeholder='blur'
                        blurDataURL='../../images/blur.jpg'
                    />
                </div>
            </div>

            <div className={`container ${styles.bannerContainer}`}>
                <h2>Sitemize Hoşgeldiniz</h2>
                <p>Ut nostrud adipisicing ullamco cupidatat minim tempor sint cillum. Ad cupidatat mollit aute duis in commodo fugiat in sint labore sint magna amet.</p>
            </div>
            <Link href={'#books'}>
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                Kitaplara Göz At
            </Link>
        </section>
    )
}

export default Banner