import { useEffect, useState } from 'react';

const useRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data?.meals);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  return {
    query,
    setQuery,
    recipes,
  };
};

export default useRecipe;
