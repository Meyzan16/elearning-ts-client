import { FC, useState, useEffect } from "react";

interface HeadProps {
  promo: number;
}

const Promo: FC<HeadProps> = ({ promo }) => {
  const [blinkPromo, setBlinkPromo] = useState(false);

  useEffect(() => {
    //  akan menjalankan fungsi callback setiap 500 milidetik 
    const interval = setInterval(() => {
      setBlinkPromo(prevState => !prevState);
    }, 500); // Ubah nilai ini untuk mengatur interval (dalam milidetik)

    return () => {
      clearInterval(interval);
    };
  }, []); //dijalankan sekali setelah render pertama.

  return (
    <>
      <span
        className={`promo text-red-600 pr-3 line-through font-[500] ${
          blinkPromo ? 'opacity-0 transition-opacity duration-100 ease-out' : 'ease-in opacity-100 transition-opacity duration-100'
        }`}
      >
        Rp. {promo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
    </>
  );
};

export default Promo;
