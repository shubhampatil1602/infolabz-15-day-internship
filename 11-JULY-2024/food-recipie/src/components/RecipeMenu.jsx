import { useEffect, useState } from 'react';

const RecipeMenu = () => {
  const [recipeName, setRecipeName] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      const data = await response.json();
      setRecipeName(data?.meals);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className='flex flex-wrap gap-3 w-3/4 mx-auto'>
      {recipeName?.map((recipe) => (
        <div key={recipe.idMeal}>
          <h2 className='border w-28 text-center py-2 rounded-md bg-gray-50'>
            {recipe.strMeal}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default RecipeMenu;
