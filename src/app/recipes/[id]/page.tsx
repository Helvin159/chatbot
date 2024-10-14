import Image from 'next/image';
import React from 'react';

const Recipe = async ({ params }: any) => {
  const { id } = params;

  const data = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_REACT_APP_SPOONACULAR_API_KEY}`
  ).then((res) => res.json());

  return (
    <>
      <section className='w-full'>
        <Image src={data.image} alt={data.title} className='h-72 w-full object-cover object-center' width='600' height='600' />
      </section>
      <section className='p-4'>
        <div className='p-4 text-center'>
          <h1 className='text-3xl font-semibold'>{data.title}</h1>
          <ul className='flex flex-row gap-x-4 justify-center items-center'>
            <li>Ready in {data.readyInMinutes} minutes</li>
            <li>Large enough for {data.servings} serving{data.servings > 1 && 's'}</li>
            <li>Health Score: {data.healthScore} of 100</li>
          </ul>
        </div>
        <div>

          <div className='py-4'>
            <h2 className='text-2xl font-semibold'>Ingredients</h2>
            <ul>
              {data.extendedIngredients.map((i: any, k: any) => (
                <li className='capitalize' key={k}>
                  {i.name}
                </li>
              ))}
            </ul>
          </div>

          <div className='py-4'>
            <h2 className='text-2xl font-semibold'>Summary</h2>
            <div dangerouslySetInnerHTML={{ __html: data.summary }} />
          </div>
          <div className='py-4'>
            <h2 className='text-2xl font-semibold'>Instructions</h2>
            <div className='recipe-instructions' dangerouslySetInnerHTML={{ __html: data.instructions }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;
