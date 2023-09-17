'use client'
import Image from 'next/image'
import React from 'react'
import styles from './Products.module.css'
import Link from 'next/link'
import { productsStore } from '@/stores/index'

function Product({ title, fiyat, image, hakkinda, url, id }) {
    const { addProduct } = productsStore()
    const timeStamp = new Date().valueOf();

    const productDetails = { title, fiyat, image, hakkinda, url, id, timeStamp }
    const addProduc = (productDetails) => {
        addProduct(productDetails)
        alert(title + ' sepete eklendi')
    }

    return (
        <article className={styles.product}>
            <Link href={'/' + url}>
                <div className={styles.zoomLimit}>
                    <Image
                        src={image}
                        alt={title}
                        width={180}
                        height={280}
                        placeholder='blur'
                        blurDataURL='../../images/blur.jpg'
                    />
                </div>
                <h3>{title}</h3>
                <p>{hakkinda.slice(0, 70)}...</p>
            </Link>
            <div>
                <span>{fiyat} ₺</span>
                <button onClick={() => (addProduc(productDetails))}>Sepete ekle </button>
            </div>
        </article>
    )
}

export default Product