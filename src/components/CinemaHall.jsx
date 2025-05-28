// src/components/CinemaHall.jsx
import React from 'react';
import './CinemaHall.css';

const ROWS = 6;
const COLUMNS = 10;

const occupied = new Set([
  '6-4','6-5', 
]);

export default function CinemaHall({ bookedSeats = [], selectedSeats = [], onSeatToggle }) {
  return (
    <div className="wrapper">
      <h2>Оберіть місця на сеанс</h2>
      <div className="screen">ЕКРАН</div>

      <div className="hall">
        {/* Нумерація колонок */}
        <div className="row header">
          <div className="cell label" />
          {Array.from({ length: COLUMNS }).map((_, c) => (
            <div key={c} className="cell number">{c + 1}</div>
          ))}
        </div>

        {/* Ряди зі місцями */}
        {Array.from({ length: ROWS }).map((_, r) => (
          <div key={r} className="row">
            <div className="cell label">{r + 1}</div>
            {Array.from({ length: COLUMNS }).map((_, c) => {
              const id = `${r + 1}-${c + 1}`;
              const isBooked = bookedSeats.includes(id) || occupied.has(id);
              const isSelected = selectedSeats.includes(id);
              const state = isBooked
                ? 'occupied'
                : isSelected
                ? 'selected'
                : 'available';
              return (
                <div
                  key={id}
                  className={`cell seat ${state}`}
                  onClick={() => {
                    if (!isBooked) onSeatToggle(id);
                  }}
                  aria-label={`Ряд ${r + 1} місце ${c + 1} — ${state}`}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Легенда */}
      <div className="legend">
        <div><div className="seat available"></div> Доступні</div>
        <div><div className="seat selected"></div> Вибрані</div>
        <div><div className="seat occupied"></div> Зайняті</div>
      </div>
    </div>
  );
}
