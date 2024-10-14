'use client'
import Link from 'next/link';
import React from 'react'

const Nav = () => {
  return (
    <nav className='w-100 py-4'>
      <ul className='flex flex-col md:flex-row justify-center items-center gap-x-2'>
        <li className='text-lg'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='text-lg'>
          <Link href={'/recipes'}>Recipes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
