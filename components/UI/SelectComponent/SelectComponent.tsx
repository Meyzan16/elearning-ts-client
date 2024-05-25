import { FC } from "react";

type OptionItem = {
  id: string;
  label: string;
};

type InterfaceSelect = {
  label: string
  value: any
  onChange: any
  options: OptionItem[];
}

const SelectComponent:FC <InterfaceSelect> = ({ label, value, onChange, options = [] }) => {
  return (
    <div className="relative">
      <p className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
        {label}
      </p>
      <select
        value={value}
        onChange={onChange}
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full px-4 py-4 my-0 mt-0 text-base block bg-white border-gray-300 rounded-lg"
      >
        {options && options.length ? (
          options.map((optionItem) => (
            <option
              id={optionItem.id}
              value={optionItem.id}
              key={optionItem.id}
            >
              {optionItem.label}
            </option>
          ))
        ) : (
          <option id="" value={""} >Select</option>
        )
        }
      </select>
    </div>
  );
};

export default SelectComponent;
