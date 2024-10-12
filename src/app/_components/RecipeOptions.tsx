'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const RecipeOptions = (recipe:any) => {
  console.log(recipe)
  return (
    <div className='basis-1/3 shrink-0 text-center shadow-xl rounded-xl'>
      <Image
        src={recipe.image}
        alt={`Take a look at the ${recipe.title} recipe.`}
        className='max-w-full mx-auto'
        width={312}
        height={231}
      />
      <Link href={`/recipes/${recipe.id}`} className='text-xl block py-4'>
        {recipe.title}
      </Link>
    </div>
  );
}

export default RecipeOptions
