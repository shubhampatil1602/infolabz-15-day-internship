import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies';

const App = () => {
  return (
    <div>
      <h1 className='p-2 m-4 text-center'>Movies</h1>
      <Movies />
    </div>
  );
};

export default App;
