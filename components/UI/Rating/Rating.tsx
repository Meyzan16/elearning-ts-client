import { FC, useState } from 'react';

interface HeadProps{
    rating: number
}

const StarRating:FC <HeadProps> = ({rating}) => {
    
  // membuat array baru dengan panjang 5, karena parameter pertama Array.from adalah objek dengan properti length: 5.
  // fungsi callback yang akan dijalankan untuk setiap elemen dalam array baru yang dibuat. 
  // index < rating akan menghasilkan nilai boolean (true atau false). 
  const [stars, setStars] = useState(Array.from({ length: 5 }, (_, index) => index < rating));
  // console.log(stars);
  //output 
  //Jadi, ini membuat array baru dengan panjang 5 dan mengisi nilai-nilai awalnya dengan true atau false 


  return (
    <div>
      {stars.map((filled, index) => (
        <span
        key={index}
        className='text-amber-500 text-2xl font-Poppins font-bold'
        >
          {filled ? '★' : ''}
        </span>
      ))}
    </div>
  );
};

export default StarRating;