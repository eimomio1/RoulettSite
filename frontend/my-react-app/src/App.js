import './App.css';
import Header from './Header';
import Footer from './Footer';
import RandomQuote from './RandomQuote';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <RandomQuote />
        <Calculator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
