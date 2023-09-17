'use client' // Error components must be Client Components
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='errorPage'>
            <div className='container'>
                <h2>Bir şeyler ters gitti!</h2>
                <p>Hata: {error.message}</p>
                <button onClick={() => reset()}>Sayfayı Yenile</button>
            </div>
        </div>
    )
}