'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ContactImage from './contact-image.jpg'
import styles from './ContactPage.module.css'

export const metadata = {
    title: 'İletişim Sayfası',
    description: 'İletişim Enim ad sit id pariatur cillum nulla.',
}

function ContactPage() {
    const [nameValue, setNameValue] = useState('')
    const [mailValue, setMailValue] = useState('')
    const [message, setMessage] = useState('')

    const submitFunction = (e) => {
        e.preventDefault()
        let nameFilter = nameValue.replace(/[</>\\*'-_!$½%{&}=|"`~¨´]/g, '')
        let messageFilter = message.replace(/[</>\\*'_!$½%{&}=|"`~¨´]/g, '')

        if (nameFilter !== '' && mailValue !== '' && messageFilter !== '') {
            alert('Mesajınız başarıyla gönderildi')
        } else {
            alert('Hata: Doldurulması zorunlu alanlar boş bırakılamaz!')
        }
    }

    return (
        <div className={styles.contactPage}>
            <div className='container'>
                <div>
                    <Image
                        src={ContactImage}
                        alt='contact-page'
                        style={{ width: '100%', height: 'auto' }}
                        placeholder='blur'
                        blurDataURL='../../images/blur.jpg' />
                </div>
                <form onSubmit={(e) => (submitFunction(e))}>
                    <h2>İletişim</h2>
                    <p>Tempor ipsum pariatur ut occaecat cupidatat in sint pariatur.</p>
                    <input value={nameValue} onChange={(e) => (setNameValue(e.target.value))} type='text' placeholder='adınız' />
                    <input value={mailValue} onChange={(e) => (setMailValue(e.target.value))} type='email' placeholder='e mail adresiniz' />
                    <textarea value={message} onChange={(e) => (setMessage(e.target.value))} placeholder='mesajınız' />
                    <button>Gönder</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage