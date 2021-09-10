import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
           <footer className="footer">
                    <a
                    href="https://github.com/antonio1998abril"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Powered by{' '}
                    <span  className="logo">
                        <Image src="/logo.png" alt="Vercel Logo" width={65} height={65} />
                    </span>
                    </a>
            </footer> 


        
    )
}

export default Footer
