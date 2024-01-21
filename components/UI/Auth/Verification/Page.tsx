import React, { FC, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";

type Props = {
  setRoute: (route: string) => void;
};

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

const Verification: FC<Props> = (props: Props) => {
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const VerificationHandler = async () => {
    setInvalidError(true)
  };
  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };
  return (
    <div className="py-8 px-4">
      <h1 className="title">Verification Your Account</h1>

      <div className="w-full flex items-center justify-center my-6">
        <div className="w-[80px] h-[80px] rounded-full bg-primary flex items-center justify-center">
          <VscWorkspaceTrusted size={40} />
        </div>
      </div>

      <div className=" m-auto flex items-center justify-around">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="number"
            key={key}
            ref={inputRefs[index]}
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center
            text-black font-Poppins justify-center text-[18px] outline-none text-center
            ${invalidError ? "shake border-red-600" : "border-stone-950"}`}
            placeholder=""
            maxLength={1}
            value={verifyNumber[key as keyof VerifyNumber]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>

      <div className="w-full">
          <button
          className="mt-8 btnSubmit"
          onClick={VerificationHandler}
          >
            Verify OTP
          </button>
      </div>


    </div>
  );
};

export default Verification;
