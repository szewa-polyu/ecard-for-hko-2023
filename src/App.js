import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <img
        src='https://knmi-scatterometer-website-prd.s3-eu-west-1.amazonaws.com/tile_prod/products/hy_2d_20230901_16_116_flag.png'
        alt='Girl in a jacket'
        width='500'
        height='600'
      />
    </div>
  );
}

export default App;
