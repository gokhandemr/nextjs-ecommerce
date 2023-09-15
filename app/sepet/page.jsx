'use client'
import React, { useEffect, useState } from 'react'
import styles from './ShoppingCartPage.module.css'
import { productsStore } from '@/stores/index'
import Image from 'next/image'
import Link from 'next/link'

function ShoppingCartPage() {
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

    const deleteFunction = (id, timeStamp) => {
        if (confirm('Ürünü sepetinizden çıkartmak istediğinize emin misiniz?')) {
            let filtered = products.filter(item => item.id !== id || item.timeStamp !== timeStamp)
            deleteProduct(filtered)
            alert('Ürün çıkartıldı.')
        }
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
        <div className={styles.cartPage}>
            <div className='container'>
                <div>
                    <h2>Sepetim</h2>
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
                </div>

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
            </div>
        </div>
    )
}

export default ShoppingCartPage