'use client'
import React, { useEffect, useState } from 'react'
import styles from './ShoppingCartPage.module.css'
import { productsStore } from '@/stores/index'

function ShoppingCartSummary() {
    const { products, deleteProduct } = productsStore()
    const [isWindow, setIsWindow] = useState(false)

    useEffect(() => {
        setIsWindow(true)
    }, [])

    const totalPrice = () => {
        let price = 0;
        for (let index = 0; index < products.length; index++) {
            price += Number(products[index].fiyat);
        }
        return price;
    }


    const allDeleteFunction = () => {
        if (confirm('Sepetinizdeki tüm ürünler çıkarılacak onaylıyor musunuz ?')) {
            deleteProduct([])
            alert('Ürünler çıkartıldı.')
        }
    }
    const completedFunction = () => {
        if (products.length <= 0) {
            alert('Hata: Sepetiniz boş olamaz.')
        } else {
            if (confirm('Alışveriş tamamlanacak, onaylıyor musunuz?')) {
                alert('Tebrikler Siparişiniz Başarıyla Oluşturuldu.')
                deleteProduct([])
                window.location = '/';
            }
        }
    }
    return (
        <div>
            {isWindow &&
                <>
                    <h3>Sipariş Özeti</h3>
                    <p>Ürün Adeti: <span>{products.length}</span></p>
                    <p>Sipariş Tutarı: <span>{totalPrice()} ₺</span></p>
                    <p>Kargo Ücreti: <span>25 ₺</span></p>
                    <p>Toplam Tutar: <span>{totalPrice() === 0 ? 0 : totalPrice() + 25} ₺</span></p>

                    <button className={styles.completedButton} onClick={() => completedFunction()}>Alışverişi Tamamla</button>
                    <div className={styles.allDeleteButton}>
                        <button onClick={() => allDeleteFunction()}>Sepeti Boşalt</button>
                    </div>
                </>
            }
        </div>
    )
}

export default ShoppingCartSummary