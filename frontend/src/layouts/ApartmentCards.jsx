import Text from "@/components/Text";
import Bed from "@/assets/bed.svg";
import Shower from "@/assets/shower.svg";
import Parking from "@/assets/parking.svg";
import Stars from "@/components/Stars";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

function ApartmentCards({cardId = "A", cardImg, cardTitle, cardPrice = 0, cardRating = 0, cardReviewsCount = 0, bedroomCount = 0, bathRoomCount = 0, parkingCount = 0}) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState("");

  const onClickViewDetails = () => navigate(`/user/unit/${cardId}`);

  useEffect(() => {setImgSrc(cardImg)}, [cardImg])
  
  return (
      <section id={cardId} className="w-[360px] h-[420px] shadow-default rounded-md">
        <section className="h-[50%]">
          <img src={`/assets/listing/${imgSrc}`} alt="unit-img" className="w-full h-full aspect-square rounded-t-md"/>
        </section>
        <section className="p-4">
          <section className="flex mb-2">
            <section className="flex flex-col gap-2">
              <Text txtContent={cardTitle}/>
              <Text txtContent={`₱ ${cardPrice}`} txtStyles={'font-bold text-black text-xl'}/>
              <section className="flex gap-2">
                <section className="flex items-center gap-1">
                  <img src={Bed} alt="card-icon" className="h-4"/>
                  <Text txtContent={bedroomCount}/>
                </section>
                <section className="flex items-center gap-1">
                  <img src={Shower} alt="card-icon" className="h-4"/>
                  <Text txtContent={bathRoomCount}/>
                </section>
                <section className="flex items-center gap-1">
                  <img src={Parking} alt="card-icon" className="h-4"/>
                  <Text txtContent={parkingCount}/>
                </section>
              </section>
            </section>
            <section>
              <section className="flex">
                <Stars starCount={1} starHeight="medium" />
                <div className="flex items-center gap-1">
                  <Text txtContent={cardRating}/>
                  <Text txtContent={"/5.0"} txtStyles={'text-xtrasm'}/>
                </div>
              </section>
              <Text txtContent={`${cardReviewsCount} reviews`} txtStyles={'hover:undeline'}/>
            </section>
          </section>
          <Button txtContent={"view details"} btnStyles={'w-full'} btnClickFunc={onClickViewDetails}/>
        </section>
      </section>
  )
}

export default ApartmentCards