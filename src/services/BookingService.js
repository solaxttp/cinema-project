const STORAGE_KEY = 'cinemaBookings';

export const saveBooking = (booking) => {
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  bookings.push(booking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
};

export const getBookedSeatsForMovie = (movieId) => {
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return bookings
    .filter(b => b.movieId === movieId)
    .flatMap(b => b.seats);
};

export const getBookings = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const getAllBookings = () => {
  const bookings = localStorage.getItem('bookings');
  return bookings ? JSON.parse(bookings) : [];
};


