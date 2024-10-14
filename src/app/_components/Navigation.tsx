import Link from 'next/link';
import React from 'react'

const Navigation = () => {
  return (
    <nav className='w-100 py-4'>
      <ul className='flex flex-col md:flex-row justify-start items-center gap-x-3 max-w-sm mx-auto'>
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

export default Navigation
