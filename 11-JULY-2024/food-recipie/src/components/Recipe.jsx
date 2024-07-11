import { useState } from 'react';
import useRecipe from '../hooks/useRecipe';
import RecipeMenu from './RecipeMenu';
import Welcome from './Welcome';
import MoreDetails from './MoreDetails';

const Recipe = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const { query, setQuery, recipes } = useRecipe();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const findRecipe = recipes.filter((r) => {
      return r.strMeal.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredRecipes(findRecipe);
    setQuery('');
    setSelectedRecipe(null);
  };

  const handleShowDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <Welcome />
      <RecipeMenu />

      <div className='flex justify-center my-10'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search from the above recipes...'
          className='w-3/5 border border-gray-300 p-2 rounded-md'
        />
        <button className='p-2 border' onClick={handleSubmit}>
          Search
        </button>
      </div>

      {filteredRecipes && (
        <h1 className='text-3xl text-center font-bold mb-4'>
          Total Results: {filteredRecipes.length}
        </h1>
      )}
      <div className='flex flex-wrap gap-4 justify-center'>
        {filteredRecipes?.map((recipe) => (
          <div
            key={recipe.idMeal}
            className='border border-gray-300 rounded-lg p-4 mb-4 w-[314px]'
          >
            <h2 className='text-lg font-semibold mb-2'>{recipe.strMeal}</h2>
            <p className='mb-2'>Category: {recipe.strCategory}</p>
            <p className='mb-2'>Area: {recipe.strArea}</p>
            <p className='mb-2'>Tags: {recipe.strTags || 'N/A'}</p>

            <a href={recipe.strYoutube} target='_blank' className='block mb-4'>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className='w-[300px] rounded-lg shadow-md cursor-pointer'
              />
            </a>
            <button
              className='bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600'
              onClick={() => handleShowDetails(recipe)}
            >
              Show Details
            </button>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <MoreDetails
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};

export default Recipe;
