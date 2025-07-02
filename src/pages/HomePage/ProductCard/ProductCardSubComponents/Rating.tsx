const Rating = ({ rating }: { rating: number }) => {
  return (
    (rating === 0 && <p>☆☆☆☆☆</p>) ||
    (rating === 1 && (
      <p>
        <span className="text-yellow-400 text-lg md:text-xl lg:text-2xl">
          ★
        </span>
        ☆☆☆☆
      </p>
    )) ||
    (rating === 2 && (
      <p>
        <span className="text-yellow-400 text-lg md:text-xl lg:text-2xl">
          ★★
        </span>
        ☆☆☆
      </p>
    )) ||
    (rating === 3 && (
      <p>
        <span className="text-yellow-400 text-lg md:text-xl lg:text-2xl">
          ★★★
        </span>
        ☆☆
      </p>
    )) ||
    (rating === 4 && (
      <p>
        <span className="text-yellow-400 text-lg md:text-xl lg:text-2xl">
          ★★★★
        </span>
        ☆
      </p>
    )) ||
    (rating === 5 && (
      <p className="text-yellow-400 text-lg md:text-xl lg:text-2xl">★★★★★</p>
    ))
  );
};

export default Rating;
