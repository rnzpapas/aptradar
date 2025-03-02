import { useState } from "react"

function SelectField({selectLabel = "", selectPlaceholder = "", choices = [], required = false}) {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(choices);
  const [isOptionsDpOpen, setIsOptionsDpOpen] = useState(false);

  const onInputChange = (evt) => {
    let { value } = evt.target;
    setInputValue(value);
    value  = value.trim().toLowerCase();
    if(value.length > 0){
      let filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(value) 
      );
      setOptions(filteredOptions);
    }else{
      setOptions(choices)
    }
  }

  const openOptions = () => setIsOptionsDpOpen(true);

  const closeOptions = () => setTimeout(() => setIsOptionsDpOpen(false), 200);

  const onOptionClick = (value) => {
    setInputValue(value);
    setIsOptionsDpOpen(false);
  }

  return (
    <section className="relative border-2 border-light-gray w-[250px] p-2 rounded-md">
      <p className={`font-primary font-bold text-xtrasm ${required ? 'after:content-["*"] after:text-red-500 after:absolute after:translate-x-1' : '' }`}>{selectLabel}</p>
      <section>
        <section className="flex">
          <input 
          type="text" 
          id={selectLabel}
          placeholder={selectPlaceholder} 
          className="font-primary text-lg placeholder:text-light-gray placeholder:font-semibold outline-0"
          value={inputValue}
          onChange={(e) => onInputChange(e)}
          onFocus={openOptions}
          onBlur={closeOptions}
          />
        </section>
        {/* Dropdown */}
        {isOptionsDpOpen && options.length > 0 && (
          <section className="absolute shadow-default w-full -translate-x-2 translate-y-2.5 bg-white max-h-[300px] overflow-auto">
            <p className="font-primary p-2 hover:bg-light-gray cursor-pointer"  onMouseDown={() => onOptionClick("All")}>All</p>
            {options.map((choice, index) => (
              <p
                key={index}
                className="font-primary p-2 hover:bg-light-gray cursor-pointer"
                onMouseDown={() => onOptionClick(choice)} // Use onMouseDown to prevent onBlur issue
              >
                {choice}
              </p>
            ))}
          </section>
        )}
      </section>
    </section>
  )
}

export default SelectField