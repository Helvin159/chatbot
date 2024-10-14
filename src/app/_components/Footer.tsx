import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='text-center py-4'>
      <p>Simple Recipe Finder by <Link className='underline decoration-dotted underline-offset-4' href="https://helvinrymer.com" target='_blank'>Helvin Rymer</Link></p>
    </footer>
  )
}

export default Footer
