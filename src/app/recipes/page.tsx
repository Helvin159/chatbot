import RecipeChatComponent from '../_components/RecipeChatComponent';

const Recipes = () => {


  return (
    <section className='max-w-4xl mx-auto'>
      <h1 className='text-3xl'>Recipes</h1>
      <div>
        <RecipeChatComponent />
      </div>
    </section>
  );
};

export default Recipes;
