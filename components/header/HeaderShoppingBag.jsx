'use client'
import { productsStore } from '@/stores/index'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function HeaderShoppingBag() {
    const { products } = productsStore()
    const [isWindow, setIsWındow] = useState(false)
    useEffect(() => {
        setIsWındow(true)
    }, [])
    return (
        <Link href={'/sepet'}>
            <span className="material-symbols-outlined">shopping_bag</span>
            ({isWindow && products.length})
        </Link>
    )
}

export default HeaderShoppingBag
