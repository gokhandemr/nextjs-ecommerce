import React from 'react'
import products from '@/data/products.json'
import styles from './BooksPage.module.css'
import Product from '@/components/products/Product'

export const metadata = {
    title: 'Kitaplar Sayfası',
    description: 'Kitaplar Est aute esse adipisicing nulla ad enim id.',
}

function BooksPage() {
    return (
        <div className={styles.booksPage}>
            <div className='container'>
                {products &&
                    products.map((item, index) => (
                        <Product key={index} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default BooksPage