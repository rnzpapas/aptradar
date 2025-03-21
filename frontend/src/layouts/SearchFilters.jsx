import { useState } from "react";
import Text from "@/components/Text"
import NumberField from "@/components/NumberField";
import Button from "@/components/Button";
import Stars from "@/components/Stars";

function SearchFilters({onSubmitFunc}) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        bedrooms: 0,
        bathrooms: 0,
        kitchens: 0,
        parking: 0,
        minPrice: 0,
        maxPrice: 0,
        ratings: [],
        modeOfPayment: "",
        isAvailable: ""
    });

    const handleAmenityFilter = (action, type) => {
        setFilters((prevFilters) => {
            let newValue = prevFilters[type];
        
            if (action === 'add' && newValue < 5) {
              newValue += 1;
            } else if (action === 'sub' && newValue > 0) {
              newValue -= 1;
            }
        
            return { ...prevFilters, [type]: newValue };
          });
    }

    const handlePriceChange = (e, type) => {
        const value = e.target.value.replace(/\D/g, ""); 
        setFilters((prevFilters) => ({
          ...prevFilters,
          [type]: value ? parseInt(value) : 0,
        }));
    };

    const handleRatingChange = (rating) => {
        setFilters((prevFilters) => {
          const updatedRatings = prevFilters.ratings.includes(rating)
            ? prevFilters.ratings.filter((r) => r !== rating)
            : [...prevFilters.ratings, rating];
      
          return { ...prevFilters, ratings: updatedRatings };
        });
    };

    const handleFieldChange = (val, type) => {
        setFilters((prevFilters) => {
          const updatedVal = prevFilters[type].includes(val)
            ? prevFilters[type].filter((r) => r !== val)
            : [...prevFilters[type], val];
      
          return { ...prevFilters, [type]: updatedVal };
        });
    };

    const toggleFilterSection = () => setIsFilterOpen(!isFilterOpen);

    const onSubmitFilters = () => {
        onSubmitFunc(filters)
    }

    return (
        <section className="overflow-hidden">
            <section className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray w-[16px]">
                    <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/>
                </svg>
                <p className="font-primary cursor-pointer hover:underline" onClick={toggleFilterSection}>Search Filter</p>
            </section>
            {/* filters */}
            <section className={`absolute w-[350px] ${isFilterOpen ? 'opacity-100' : 'opacity-0'} right-10`}>
                <section className="flex flex-col gap-4 bg-white p-4 shadow-default">
                    {/* bedrooms */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Bedrooms"} txtStyles={"font-semibold"}/>
                        {/* counter */}
                        <section className="flex items-center gap-2">
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${filters.bedrooms > 0 ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityFilter('sub', 'bedrooms')}>
                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </span>
                            <p className="font-primary">{filters.bedrooms}</p>
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${filters.bedrooms < 5  ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityFilter('add', 'bedrooms')}>
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                </svg>
                            </span>
                        </section>
                    </section>
                    {/* bathrooms */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Bathrooms"} txtStyles={"font-semibold"}/>
                        {/* counter */}
                        <section className="flex items-center gap-2">
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${filters.bathrooms > 0 ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityFilter('sub', 'bathrooms')}>
                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </span>
                            <p className="font-primary">{filters.bathrooms}</p>
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${filters.bathrooms < 5  ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityFilter('add', 'bathrooms')}>
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                </svg>
                            </span>
                        </section>
                    </section>
                    {/* kitchen */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Kitchen"} txtStyles={"font-semibold"}/>
                        {/* counter */}
                        <section className="flex items-center gap-2">
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${filters.kitchens > 0 ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityFilter('sub', 'kitchens')}>
                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </span>
                            <p className="font-primary">{filters.kitchens}</p>
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${filters.kitchens < 5  ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityFilter('add', 'kitchens')}>
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                </svg>
                            </span>
                        </section>
                    </section>
                    {/* parking */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Parking"} txtStyles={"font-semibold"}/>
                        {/* counter */}
                        <section className="flex items-center gap-2">
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${filters.parking > 0 ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityFilter('sub', 'parking')}>
                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </span>
                            <p className="font-primary">{filters.parking}</p>
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${filters.parking < 5  ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityFilter('add', 'parking')}>
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                </svg>
                            </span>
                        </section>
                    </section>
                    {/* pricing */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Pricing"} txtStyles={"font-semibold"}/>
                        <section className="flex w-full items-center justify-center gap-2">
                            <section className="max-w-[40%]">
                                <Text txtContent={"Minimum"}/>
                                <section className="flex items-center">
                                    <Text txtContent={"₱"} txtStyles={"font-primary font-bold text-gray"}/>
                                    <NumberField fieldPlaceholder="0" fieldStyles={"w-full border p-2"} onChangeFunc={(e) => handlePriceChange(e, "minPrice")}/>
                                </section>
                            </section>
                            <div className="block h-[2px] w-[20%] bg-light-gray translate-y-2"></div>
                            <section className="max-w-[40%]">
                                <Text txtContent={"Maximum"}/>
                                <section className="flex items-center">
                                    <Text txtContent={"₱"} txtStyles={"font-primary font-bold text-gray"}/>
                                    <NumberField fieldPlaceholder="0" fieldStyles={"w-full border p-2"} onChangeFunc={(e) => handlePriceChange(e, "maxPrice")}/>
                                </section>
                            </section>
                        </section>
                    </section>
                    {/* rating */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Rating"} txtStyles={"font-semibold"}/>
                        <section className="flex flex-col gap-2">
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" onChange={() => handleRatingChange('5')} />
                                <label htmlFor="" className="flex gap-0.5">
                                    <Stars starCount={5} starHeight={'small'}/>
                                </label>
                            </section>
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" onChange={() => handleRatingChange('4')} />
                                <label htmlFor="" className="flex gap-0.5">
                                    <Stars starCount={4} starHeight={'small'} />
                                </label>
                            </section>
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" onChange={() => handleRatingChange('3')} />
                                <label htmlFor="" className="flex gap-0.5">
                                    <Stars starCount={3} starHeight={'small'}/>
                                </label>
                            </section>
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" onChange={() => handleRatingChange('2')} />
                                <label htmlFor="" className="flex gap-0.5">
                                    <Stars starCount={2} starHeight={'small'}/>
                                </label>
                            </section>
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" onChange={() => handleRatingChange('1')} />
                                <label htmlFor="" className="flex gap-0.5">
                                    <Stars starCount={1} starHeight={'small'}/>
                                </label>
                            </section>
                        </section>
                    </section>
                    {/* mode of payment */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Mode Of Payment"} txtStyles={"font-semibold"}/>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" onChange={(e) => handleFieldChange(e.target.value, "modeOfPayment")}/>
                            <label htmlFor="" className="font-primary"> Bank Transfer (E.g. BPI, BDO) </label>
                        </section>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" onChange={(e) => handleFieldChange(e.target.value, "modeOfPayment")}/>
                            <label htmlFor="" className="font-primary"> E-Wallet (E.g. GCash, Maya) </label>
                        </section>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" onChange={(e) => handleFieldChange(e.target.value, "modeOfPayment")}/>
                            <label htmlFor="" className="font-primary"> Post Dated Check (PDC) </label>
                        </section>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" onChange={(e) => handleFieldChange(e.target.value, "modeOfPayment")}/>
                            <label htmlFor="" className="font-primary"> Cash </label>
                        </section>
                    </section>
                    {/* availability */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Availability"} txtStyles={"font-semibold"}/>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" onChange={(e) => handleFieldChange(e.target.value, "isAvailable")}/>
                            <label htmlFor="" className="font-primary"> Available </label>
                        </section>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" onChange={(e) => handleFieldChange(e.target.value, "isAvailable")}/>
                            <label htmlFor="" className="font-primary"> Unavailable </label>
                        </section>
                    </section>
                    <Button txtContent={"submit"} btnClickFunc={onSubmitFilters}/>
                </section>
            </section>
        </section>
    )
}

export default SearchFilters