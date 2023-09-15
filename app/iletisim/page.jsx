import Image from 'next/image'
import React from 'react'
import ContactImage from './contact-image.jpg'
import styles from './ContactPage.module.css'
import ContactPageForm from './ContactPageForm'

export const metadata = {
    title: 'İletişim Sayfası',
    description: 'İletişim Enim ad sit id pariatur cillum nulla.',
}

function ContactPage() {


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
                <ContactPageForm />
            </div>
        </div>
    )
}

export default ContactPage