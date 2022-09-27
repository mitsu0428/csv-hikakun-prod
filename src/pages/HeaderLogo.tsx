import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
function HeaderLogo() {
  return (
    <div>
        <Image src="/images/csvhikakun_logo_ver0.2.png" width={75} height={75} alt="csvhikrakunのロゴ" />
    </div>
    
  )
}

export default HeaderLogo
