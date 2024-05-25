import { FC, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type Interface = {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: any;
  id: string;
  errors: any;
  touched: any;
};

const InputComponent: FC<Interface> = ({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
  errors,
  touched,
}) => {
  const [show, setShow] = useState(false);

  const isPasswordInput = type === "password";

  return (
    <>
      <div className="my-4">
        <div className="relative">
          <p className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white ">
            {label}
          </p>

          <input
            placeholder={placeholder}
            type={
              isPasswordInput ? (!show ? "password" : "text") : type || "text"
            }
            value={value}
            id={id}
            onChange={onChange}
            className={`${errors && touched && "border-red-500"}
                      border text-black   
                      font-poppins text-md font-semibold                        
                      placeholder-gray-400 
                      focus:outline-none 
                      focus:border-primary w-full 
                      px-4 py-4 my-0 mt-0 
                      text-base block bg-white
                      border-gray-300 rounded-lg `}
          />

          {isPasswordInput &&
            (!show ? (
              <AiOutlineEyeInvisible
                className="absolute bottom-3 right-2 z-1 cursor-pointer text-black"
                size={20}
                onClick={() => setShow(true)}
              />
            ) : (
              <AiOutlineEye
                className="absolute bottom-3 right-2 z-1 cursor-pointer text-black "
                size={20}
                onClick={() => setShow(false)}
              />
            ))}
        </div>
      </div>
      {errors && touched && (
        <span
          className="text-red-500 pt-2 block font-Poppins text-base"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          {errors}
        </span>
      )}
    </>
  );
};

export default InputComponent;
