import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { TimeSpanProvider } from './hooks/useTimeSpan';
import ConfirmationPage from './ConfirmationPage';

function App() {
  

  return (
    <div className='w-full'>
        <Header />
        <main>
        <TimeSpanProvider>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/booking' element={<BookingPage />} />
            <Route path='/confirmation' element={<ConfirmationPage />} />
        </Routes>
        </TimeSpanProvider>
        </main>

        <Footer />
    </div>
  );
}

export default App;
