import logo from './logo.svg';
import './App.css';
import Header from './biography/Header';
import Body from './biography/Body';
import Footer from './biography/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
