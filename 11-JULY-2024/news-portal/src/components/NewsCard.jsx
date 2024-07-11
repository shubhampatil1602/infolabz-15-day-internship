const NewsCard = ({ article }) => {
  return (
    <div className='border border-gray-300 rounded-lg p-4 mb-4 w-80'>
      <div className='h-40'>
        <h2 className='text-lg font-semibold mb-2'>{article.title}</h2>
        <p className='text-sm text-gray-600 mb-2'>By {article.author}</p>
        <p className='text-sm text-gray-600 mb-2'>
          {article.date} | {article.time}
        </p>
      </div>
      <img
        src={article.imageUrl}
        alt={article.title}
        className='w-full h-48 object-cover rounded-lg mb-4'
      />
      <p className='text-gray-700'>{article.content.slice(0, 275)}...</p>
      <div className='mt-4 flex justify-end'>
        <a
          href={article.readMoreUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
