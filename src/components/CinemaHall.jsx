// src/components/CinemaHall.jsx
import React, { useState } from 'react';
import './CinemaHall.css';

const ROWS = 6;
const COLUMNS = 10;
const PRICE_PER_SEAT = 120; 


const occupied = new Set([
  '1-1', '1-4',
  '3-7',
  '4-8','5-7','5-8',
]);

export default function CinemaHall() {
  const [selected, setSelected] = useState(new Set());

  const toggle = (r, c) => {
    const id = `${r}-${c}`;
    if (occupied.has(id)) return;
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const total = selected.size * PRICE_PER_SEAT;

  return (
    <div className="wrapper">
      <h2>Оберіть місця на сеанс</h2>
      <div className="screen">ЕКРАН</div>

      <div className="hall">
        {/* нумерація колонок */}
        <div className="row header">
          <div className="cell label" />
          {Array.from({ length: COLUMNS }).map((_, c) =>
            <div key={c} className="cell number">{c+1}</div>
          )}
        </div>

        {/* ряди зі місцями */}
        {Array.from({ length: ROWS }).map((_, r) => (
          <div key={r} className="row">
            <div className="cell label">{r+1}</div>
            {Array.from({ length: COLUMNS }).map((_, c) => {
              const id = `${r+1}-${c+1}`;
              const state = occupied.has(id)
                ? 'occupied'
                : selected.has(id)
                ? 'selected'
                : 'available';
              return (
                <div
                  key={id}
                  className={`cell seat ${state}`}
                  onClick={() => toggle(r+1, c+1)}
                  aria-label={`Ряд ${r+1} місце ${c+1} — ${state}`}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* легенда */}
      <div className="legend">
        <div><div className="seat available"></div> Доступні</div>
        <div><div className="seat selected"></div> Вибрані</div>
        <div><div className="seat occupied"></div> Зайняті</div>
      </div>

      {/* інфо */}
      <div className="info">
        <div>Вибрані місця: {selected.size}</div>
        <div>Загальна вартість: ${total}.00</div>
      </div>

      <button className="buy-btn" disabled={selected.size === 0}>
        Придбати
      </button>
    </div>
);
}
