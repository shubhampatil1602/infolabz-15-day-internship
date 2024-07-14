import { useContext } from 'react';
import { NewsContext } from '../context/newsContext';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const { toggle, setToggle } = useContext(NewsContext);
  console.log(toggle);
  return (
    <nav className='p-6 border-b sticky top-0 bg-white shadow-sm flex'>
      <div
        className='sm:hidden flex justify-center items-center'
        onClick={() => setToggle(!toggle)}
      >
        <GiHamburgerMenu size={25} />
      </div>
      <h1 className='text-center font-semibold text-xl w-full'>
        Welcome to News App!
      </h1>
    </nav>
  );
};

export default Navbar;
