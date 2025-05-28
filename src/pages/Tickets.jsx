import React from 'react';
import { getBookings } from '../services/BookingService';
import { movies } from '../data/movies'; // 🔹 додай імпорт фільмів
import './Tickets.css';

const Tickets = () => {
  const bookings = getBookings();

  return (
    <div className="tickets-container">
      <h2>Ваші квитки</h2>
      {bookings.length === 0 ? (
        <p>Немає заброньованих квитків.</p>
      ) : (
        <div className="tickets-list">
          {bookings.map((b, index) => {
            const movie = movies.find((m) => m.title === b.movieTitle); // 🔹 знайти фільм
            return (
              <div key={index} className="ticket-card">
                <div className="ticket-left">
                  <h3>🎬 Квиток на фільм</h3>
                  <p><strong>Назва фільму:</strong> {b.movieTitle}</p>
                  <p><strong>Ім’я:</strong> {b.name}</p>
                  <p><strong>Email:</strong> {b.email}</p>
                </div>
                <div className="ticket-right">
                  <p><strong>Місця:</strong> {b.seats.join(', ')}</p>
                  <p><strong>Ціна:</strong> {b.price} грн</p>
                  <p><strong>Дата та час:</strong> {movie ? movie.time : 'Невідомо'}</p> {/* 🔹 виправлено */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Tickets;
