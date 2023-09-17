import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation';
import products from '@/data/products.json'
import styles from './SinglePage.module.css'
import SinglePageButton from './SinglePageButton';

export async function generateMetadata({ params }) {
    const filterProducts = products.filter(item => item.url === params.slug.toString())
    if (filterProducts.length <= 0) { notFound() }

    return {
        title: filterProducts[0].title,
        description: filterProducts[0].hakkinda,
    };
}

function SinglePage({ params }) {
    const filterProducts = products.filter(item => item.url === params.slug.toString())
    if (filterProducts.length <= 0) { notFound() }
    const { fiyat, yazar, title, hakkinda, image, id } = filterProducts[0]

    return (
        <div className='container'>
            <div className={styles.bookSingle}>
                {
                    <>
                        <div className={styles.bookIMG}>
                            <Image
                                placeholder='blur'
                                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
                                src={image}
                                alt={title}
                                width={202}
                                height={270}

                            />
                        </div>
                        <div className={styles.bookDetails}>
                            <h2>{title}</h2>
                            <p>Yazar: {yazar}</p>
                            <p>Açıklama: {hakkinda}</p>
                            <div className={styles.priceArea}>
                                <p>{fiyat} ₺</p>
                                <SinglePageButton {...filterProducts[0]} />
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default SinglePage