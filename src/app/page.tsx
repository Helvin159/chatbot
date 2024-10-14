import Link from 'next/link'

export default function Home() {
  return (
    <section className='text-center'>
      <h1 className='text-3xl my-4'>Welcome to Recipe Finder by <Link className='underline decoration-dotted underline-offset-4' href="https://helvinrymer.com" target='_blank'>Helvin Rymer</Link></h1>
      <p className='text-balance max-w-2xl mx-auto leading-7'>
        Welcome to our recipe search platform! With the power of ChatGPT, you can effortlessly find delicious recipes by simply entering the ingredients you have at home. Whether you&apos;re seeking a quick dinner or something more elaborate, our tool provides tailored recipe suggestions, complete with detailed cooking instructions, preparation time, and a full list of ingredients. Perfect for both beginners and seasoned home cooks, this site helps you turn what’s in your kitchen into a delicious meal, taking the guesswork out of cooking and meal planning. Discover new flavors and get cooking today!
      </p>
      <div className='w-full py-4'>
        <Link href={'/recipes'} className='block w-44 py-3 mx-auto bg-black text-white rounded'>
          Search for Recipes?
        </Link>
      </div>
    </section>
  );
}
