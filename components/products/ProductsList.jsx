'use client'
import React, { useEffect, useState } from 'react'
import productsData from '@/data/products.json'
import Product from './Product'
import styles from './Products.module.css'
import Categories from '../categories/Categories'

function ArticleList() {
    const [categories, setCategories] = useState('all')
    const [products, setProducts] = useState(productsData)

    useEffect(() => {
        if (categories === 'all') {
            setProducts(productsData)
        } else {
            let filtered = productsData.filter(item => item.kategori === categories)
            setProducts(filtered)
        }
    }, [categories])

    return (
        <>
            <Categories setCategories={setCategories} />
            <div className={styles.productsList}>
                <div className='container'>
                    {products &&
                        products.map((item, index) => (
                            <Product key={index} {...item} />
                        ))}
                </div>
            </div>
        </>

    )
}

export default ArticleList