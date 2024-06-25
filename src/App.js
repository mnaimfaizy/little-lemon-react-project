import './App.css';
import { Header } from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container mx-auto px-4'>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
