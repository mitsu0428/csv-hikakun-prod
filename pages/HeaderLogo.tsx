import React from 'react'
import Image from 'next/image'

function HeaderLogo() {
  return (
    <div>
        <Image src="/images/csvhikakun_logo_ver0.1.png" width={75} height={75} alt="csvhikrakunのロゴ" />
    </div>
  )
}

export default HeaderLogo