import { FC, useState } from 'react';

interface HeadProps{
    rating: number
}

const StarRating:FC <HeadProps> = ({rating}) => {
    
  const [stars, setStars] = useState(Array.from({ length: 5 }, (_, index) => index < rating));

  const handleHover = (index: number) => {
    const updatedStars = stars.map((_, i) => i <= index);
    setStars(updatedStars);
  };

  return (
    <div>
      {stars.map((filled, index) => (
        <span
        key={index}
        // onMouseEnter={() => handleHover(index)}
        // onMouseLeave={() => setStars(Array.from({ length: 5 }, (_, i) => i < rating))}
        className='text-amber-500 text-2xl font-Poppins font-bold'
        >
          {filled ? '★' : ''}
        </span>
      ))}
    </div>
  );
};

export default StarRating;