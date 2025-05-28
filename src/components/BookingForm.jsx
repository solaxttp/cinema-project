import { useState } from 'react';
import { saveBooking } from '../services/BookingService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = ({ movieTitle,
     movieTime, seats, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error('Будь ласка, заповніть усі поля!');
      return;
    }

   
    const booking = {
     movieTitle,
     movieTime,
     seats,
     name: formData.name,
     email: formData.email,
     price: seats.length * 120,
       };


    saveBooking(booking);
    toast.success('Бронювання успішно здійснено!');
    onSuccess();
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Ваші дані</h3>
      <input
        type="text"
        name="name"
        placeholder="Імʼя та прізвище"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button className="buy-btn" type="submit">Підтвердити бронювання</button>
    </form>
  );
};

export default BookingForm;
