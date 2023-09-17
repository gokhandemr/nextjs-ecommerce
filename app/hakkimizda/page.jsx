import React from 'react'
import styles from './AboutPage.module.css'
import Image from 'next/image'
import AboutImage from './about-image.jpg'

export const metadata = {
    title: 'Hakkımızda Sayfası',
    description: 'Hakkımızda Est aute esse adipisicing nulla ad enim id.',
}

function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <div className='container'>
                <div className={styles.AboutImg}>
                    <Image
                        src={AboutImage}
                        alt='kitaplar.com'
                        placeholder='blur'
                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
                        width={0}
                        height={0}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div>
                    <h2>Hakkımızda</h2>
                    <p>Ad tempor eu qui laboris minim ipsum id ad laboris cupidatat Lorem excepteur qui. Dolor culpa ipsum excepteur deserunt do dolor sunt deserunt nisi ea qui in anim non. Fugiat deserunt cupidatat sit aliquip magna ea ex amet consequat minim irure cupidatat.</p>
                    <p>Ad tempor eu qui laboris minim ipsum id ad laboris cupidatat Lorem excepteur qui. Dolor culpa ipsum excepteur deserunt do dolor sunt deserunt nisi ea qui in anim non. Fugiat deserunt cupidatat sit aliquip magna ea ex amet consequat minim irure cupidatat. Amet commodo aute commodo tempor nostrud adipisicing ex exercitation sit. Commodo occaecat sint commodo mollit deserunt ea officia et. Ipsum id quis deserunt laboris ut nisi dolore laborum.</p>
                    <p>Minim culpa ut laborum est qui. Cupidatat irure consectetur ea cupidatat et eu. Incididunt culpa sit nulla esse veniam occaecat. Nisi ad deserunt cillum non incididunt nisi reprehenderit ea qui culpa do pariatur eiusmod consectetur. Commodo proident sint aute aliquip do enim et veniam elit ipsum irure dolor.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage