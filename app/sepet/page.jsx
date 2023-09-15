import React from 'react'
import styles from './ShoppingCartPage.module.css'
import ShoppingCartList from './ShoppingCartList';
import ShoppingCartSummary from './ShoppingCartSummary';

export const metadata = {
    title: 'Sepetim Sayfası',
    description: 'Sepetim Est aute esse adipisicing nulla ad enim id.',
}

function ShoppingCartPage() {
    return (
        <div className={styles.cartPage}>
            <div className='container'>
                <div>
                    <h2>Sepetim</h2>
                    <ShoppingCartList />
                </div>
                <ShoppingCartSummary />
            </div>
        </div>
    )
}

export default ShoppingCartPage