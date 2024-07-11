const MoreDetails = ({ recipe, onClose }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50'>
      <div className='bg-white h-3/4 overflow-scroll p-6 rounded-lg shadow-md max-w-lg'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold mb-4'>{recipe.strMeal}</h2>
          <button
            className='bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600'
            onClick={onClose}
          >
            X
          </button>
        </div>
        <p className='mb-2'>Category: {recipe.strCategory}</p>
        <p className='mb-2'>Area: {recipe.strArea}</p>
        <p className='mb-2'>Tags: {recipe.strTags || 'N/A'}</p>
        <p className='mb-4'>
          <a
            href={recipe.strYoutube}
            target='_blank'
            className='mr-3 underline'
          >
            Video
          </a>
          <a href={recipe.strSource} target='_blank' className='underline'>
            source
          </a>
        </p>
        <p>{recipe.strInstructions}</p>
        <div className='mt-4 flex justify-end'>
          <button
            className='bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600'
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
