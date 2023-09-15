'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { productsStore } from '@/stores/index'
import styles from './ShoppingCartPage.module.css'

function ShoppingCartList() {
    const { products, deleteProduct } = productsStore()
    const [isWindow, setIsWindow] = useState(false)

    useEffect(() => {
        setIsWindow(true)
    }, [])

    const deleteFunction = (id, timeStamp) => {
        if (confirm('Ürünü sepetinizden çıkartmak istediğinize emin misiniz?')) {
            let filtered = products.filter(item => item.id !== id || item.timeStamp !== timeStamp)
            deleteProduct(filtered)
            alert('Ürün çıkartıldı.')
        }
    }

    return (
        <ul>
            {isWindow && products.length > 0 ? products.map((item, index) => (
                <li key={index}>
                    <Link href={'/' + item.url}>
                        <Image
                            src={item.image}
                            placeholder='blur'
                            blurDataURL={'../../images/blur.jpg'}
                            alt={item.title}
                            width={70}
                            height={100} />
                    </Link>
                    <div>
                        <h4>{item.title}</h4>
                        <p>Fiyat: {item.fiyat} ₺</p>
                        <button className={styles.deleteButton} onClick={() => deleteFunction(item.id, item.timeStamp)}><span className="material-symbols-outlined">delete_forever</span></button>
                    </div>
                </li>
            )) : <p style={{ textAlign: 'center' }}>Sepetiniz Boş.</p>}
        </ul>
    )
}

export default ShoppingCartList
