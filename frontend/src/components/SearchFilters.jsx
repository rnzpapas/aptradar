import { useState } from "react";
import Text from "./Text"
import TextField from "./TextField";

function SearchFilters() {
    const [bedroomCount, setBedroomCount] = useState(0);
    const [bathroomCount, setBathroomCount] = useState(0);
    const [kitchenCount, setKitchenCount] = useState(0);
    const [parkingCount, setParkingCount] = useState(0);

    const handleAmenityCounter = (process, amenity) => {
        if(process == 'add'){
           switch(amenity){
                case 'bedroom':
                    setBedroomCount(prevState => prevState + 1)
                    break;
                case 'bathroom':
                    setBathroomCount(prevState => prevState + 1)
                    break;
                case 'kitchen':
                    setKitchenCount(prevState => prevState + 1)
                    break;
                case 'parking':
                    setParkingCount(prevState => prevState + 1)
                    break;
                default:
                    break;
           }
        }
        
        if(process == 'sub'){
            switch(amenity){
                case 'bedroom':
                    setBedroomCount(prevState => prevState - 1)
                    break;
                case 'bathroom':
                    setBathroomCount(prevState => prevState - 1)
                    break;
                case 'kitchen':
                    setKitchenCount(prevState => prevState - 1)
                    break;
                case 'parking':
                    setParkingCount(prevState => prevState - 1)
                    break;
                default:
                    break;
           }
        }
    }

    return (
        <section className="overflow-hidden">
            <section className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray w-[16px]">
                    <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/>
                </svg>
                <p className="font-primary cursor-pointer hover:underline">Search Filter</p>
            </section>
            <section className="absolute w-[300px] -translate-x-200">
                <section className="flex flex-col gap-4 bg-white">
                    {/* bedrooms */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Bedrooms"} txtStyles={"font-semibold"}/>
                        {/* counter */}
                        <section className="flex items-center gap-2">
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${bedroomCount > 0 ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityCounter('sub', 'bedroom')}>
                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </span>
                            <p className="font-primary">{bedroomCount}</p>
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${bedroomCount < 5  ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityCounter('add', 'bedroom')}>
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
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${bathroomCount > 0 ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityCounter('sub', 'bathroom')}>
                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </span>
                            <p className="font-primary">{bathroomCount}</p>
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${bathroomCount < 5  ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityCounter('add', 'bathroom')}>
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
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${kitchenCount > 0 ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityCounter('sub', 'kitchen')}>
                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </span>
                            <p className="font-primary">{kitchenCount}</p>
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${kitchenCount < 5  ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityCounter('add', 'kitchen')}>
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
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${parkingCount > 0 ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityCounter('sub', 'parking')}>
                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                </svg>
                            </span>
                            <p className="font-primary">{parkingCount}</p>
                            <span className={`rounded-full border-2 border-light-gray text-black w-[24px] h-[24px] flex items-center justify-center font-bold text-lg cursor-pointer group hover:border-gray ${parkingCount < 5  ? 'pointer-events-auto' : 'pointer-events-none' }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
                                className="fill-light-gray h-[12px] group group-hover:fill-gray"
                                onClick={() => handleAmenityCounter('add', 'parking')}>
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                </svg>
                            </span>
                        </section>
                    </section>
                    {/* pricing */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Pricing"} txtStyles={"font-semibold"}/>
                        <section className="flex w-full items-center justify-between">
                            <section>
                                <Text txtContent={"Minimum"}/>
                                <section className="flex gap-1">
                                    <Text txtContent={"₱"} txtStyles={"font-primary font-bold text-gray"}/>
                                    <TextField fieldPlaceholder="0"/>
                                </section>
                            </section>
                            <span className="h-[2px] w-[100px] bg-gray"></span>
                            <section>
                                <Text txtContent={"Maximum"}/>
                                <section className="flex gap-1">
                                    <Text txtContent={"₱"} txtStyles={"font-primary font-bold text-gray"}/>
                                    <TextField fieldPlaceholder="0"/>
                                </section>
                            </section>
                        </section>
                    </section>
                    {/* rating */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Rating"} txtStyles={"font-semibold"}/>
                        <section className="flex flex-col gap-2">
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className="flex gap-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                </label>
                            </section>
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className="flex gap-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                </label>
                            </section>
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className="flex gap-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                </label>
                            </section>
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className="flex gap-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                </label>
                            </section>
                            <section className="flex gap-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className="flex gap-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-[12px] fill-yelloworange">
                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                </label>
                            </section>
                        </section>
                    </section>
                    {/* mode of payment */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Mode Of Payment"} txtStyles={"font-semibold"}/>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className="font-primary"> Bank Transfer (E.g. BPI, BDO) </label>
                        </section>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className="font-primary"> E-Wallet (E.g. GCash, Maya) </label>
                        </section>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className="font-primary"> Post Dated Check (PDC) </label>
                        </section>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className="font-primary"> Cash </label>
                        </section>
                    </section>
                    {/* availability */}
                    <section className="flex flex-col gap-2">
                        <Text txtContent={"Availability"} txtStyles={"font-semibold"}/>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className="font-primary"> Available </label>
                        </section>
                        <section className="flex gap-2">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className="font-primary"> Unavailable </label>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default SearchFilters