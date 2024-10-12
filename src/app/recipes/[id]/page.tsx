import Image from 'next/image';
import React from 'react';

const Recipe = async ({ params }: any) => {
  const { id } = params;

  const data = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_REACT_APP_SPOONACULAR_API_KEY}`
  ).then((res) => res.json());

  return (
    <div className='max-w-5xl mx-auto p-4'>
      <h1 className='text-3xl font-semibold'>{data.title}</h1>
      <Image src={data.image} alt={data.title} width='300' height='300' />
      <div>
        <p>Ready in {data.readyInMinutes} minutes</p>
        <p>Large enough for {data.servings} servings</p>
        <p>A high Health Score of: {data.healthScore}</p>

        <div className='py-4'>
          <h2 className='text-2xl font-semibold'>Ingredients</h2>
          <ul>
            {data.extendedIngredients.map((i: any, k: any) => (
              <li className='capitalize' key={k}>{i.name}</li>
            ))}
          </ul>
        </div>

        <div className='py-4'>
          <h2 className='text-2xl font-semibold'>Summary</h2>
          <p dangerouslySetInnerHTML={{ __html: data.summary }} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
