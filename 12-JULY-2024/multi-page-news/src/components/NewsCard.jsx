import { useContext } from 'react';
import { NewsContext } from '../context/newsContext';

const NewsCard = () => {
  const { news } = useContext(NewsContext);

  return !news ? (
    <div className='text-2xl font-bold'>Fetching latest news for you..</div>
  ) : (
    <div className='flex flex-wrap justify-evenly w-full p-4 gap-y-4 bg-slate-50'>
      {news?.data?.map((data) => (
        <div
          key={data.id}
          className='border p-3 w-[360px] h-[590px] rounded-md shadow-sm bg-white'
        >
          <a href={data.url} target='_blank'>
            <img
              src={data.imageUrl}
              className='w-[350px] h-[250px] object-cover rounded-md shadow-md'
              alt={data.title}
            />
          </a>
          <h4 className='font-semibold my-3'>{data.title}</h4>
          <p className='text-sm font-medium my-1 italic'>
            {data.date} {data.time}
          </p>
          <p className='font-normal text-sm mt-1 tracking-tight text-justify h-[150px]'>
            {data.content.slice(0, 300)}...
          </p>
          <p className='font-bold text-base italic mb-2'>
            ~ Author: {data.author}
          </p>

          <button className='px-3 py-1.5 border-none rounded-md bg-blue-500 hover:opacity-80 text-white'>
            <a href={data.readMoreUrl} target='_blank'>
              Read more
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
