'use client'
import React, { useState } from 'react'

function ContactPageForm() {
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
        <form onSubmit={(e) => (submitFunction(e))}>
            <h2>İletişim</h2>
            <p>Tempor ipsum pariatur ut occaecat cupidatat in sint pariatur.</p>
            <input value={nameValue} onChange={(e) => (setNameValue(e.target.value))} type='text' placeholder='adınız' />
            <input value={mailValue} onChange={(e) => (setMailValue(e.target.value))} type='email' placeholder='e mail adresiniz' />
            <textarea value={message} onChange={(e) => (setMessage(e.target.value))} placeholder='mesajınız' />
            <button>Gönder</button>
        </form>
    )
}

export default ContactPageForm