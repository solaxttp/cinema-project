import { useParams } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import BookingForm from '../components/BookingForm';
import { getBookedSeatsForMovie } from '../services/BookingService';
import { useState, useEffect } from 'react';
import { movies } from '../data/movies';
import { toast } from 'react-toastify';

const Booking = () => {
  const { id } = useParams();
  const movieId = parseInt(id);
  const movie = movies.find(m => m.id === movieId);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setBookedSeats(getBookedSeatsForMovie(movieId));
  }, [movieId]);
  

  const handleSeatToggle = (seatId) => {
    setSelectedSeats(prev =>
      prev.includes(seatId) ? prev.filter(s => s !== seatId) : [...prev, seatId]
    );
  };

  const handleBuy = () => {
    if (selectedSeats.length > 0) {
      setShowForm(true);
    } else {
      toast.error('Будь ласка, виберіть місця перед покупкою.');
    }
  };

  return (
    <div>
      <h1>Бронювання: {movie?.title}</h1>
      <CinemaHall
        bookedSeats={bookedSeats}
        selectedSeats={selectedSeats}
        onSeatToggle={handleSeatToggle}
      />
      {!showForm && (
        <button
          className="buy-bt"
          onClick={handleBuy}
          disabled={selectedSeats.length === 0}
        >
          Придбати
        </button>
      )}
      {showForm && (
        <BookingForm
          movieTitle={movie.title}
          movieTime={movie.time}
          seats={selectedSeats}
          onSuccess={() => {
            setSelectedSeats([]);
            setShowForm(false);
            setBookedSeats(getBookedSeatsForMovie(movieId));
          }}
        />
      )}
    </div>
  );
};

export default Booking;
