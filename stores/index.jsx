import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const productsStore = create(
    persist(
        (set) => ({
            products: [],
            addProduct: (id) => set((state) => ({ products: [...state.products, id] })),
            deleteProduct: (product) => set(({ products: product })),
        }),
        {
            name: 'products', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)