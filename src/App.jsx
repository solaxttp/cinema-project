import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Tickets from './pages/Tickets';
import Account from './pages/Account';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
