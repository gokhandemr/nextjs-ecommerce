'use client'
import React from 'react'
import { productsStore } from '@/stores'

function SinglePageButton({ fiyat, urlAdresi, title, hakkinda, image, id }) {
    const { addProduct } = productsStore()
    const timeStamp = new Date().valueOf();

    const addFunction = (id) => {
        alert(title + ' sepete eklendi.')
        addProduct({ fiyat, urlAdresi, title, hakkinda, image, id, timeStamp });
    }

    return (
        <button onClick={() => (addFunction(id))}>
            <span className="material-symbols-outlined">add_shopping_cart</span>
            Sepete Ekle
        </button>
    )
}

export default SinglePageButton