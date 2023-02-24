import { IBookingCard } from "../interfaces/IBookingCard";

export const BookingCard: React.FC<IBookingCard> = ({
  id,
  guests,
  date,
  trip: { title },
  totalPrice,
  onClick,
}) => {
  return (
    <li data-test-id="booking" className="booking">
      <h3 data-test-id="booking-title" className="booking__title">
        {title}
      </h3>
      <span data-test-id="booking-guests" className="booking__guests">
        {guests} guests
      </span>
      <span data-test-id="booking-date" className="booking__date">
        {date.match(/\d\d\d\d-\d\d-\d\d/)}
      </span>
      <span data-test-id="booking-total" className="booking__total">
        {totalPrice} $
      </span>
      <button
        data-test-id="booking-cancel"
        className="booking__cancel"
        title="Cancel booking"
        onClick={() => onClick(id)}
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
};
