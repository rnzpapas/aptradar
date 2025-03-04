import { useState } from "react";
import Text from "@/components/Text";
import Footer from "@/layouts/Footer";
import UserNav from "@/layouts/navbars/UserNav";
import RentalCards from "@/layouts/RentalCards";
import RentalHistorySample from "@/data/samplerentalhistory.json";

function UserRentals() {
  const [currentUnit, setCurrentUnit] = useState();
  return (
    <>
      <UserNav activeLink={1} />
      <section className="h-dvh p-4 flex flex-col gap-4 overflow-x-hidden">
        <section>
          <Text txtContent={"Current Rental"} txtStyles={'text-lg font-bold text-black'}/>
          {
            currentUnit ? (
              <div>a</div>
            ) : (
              <Text txtContent={'No Ongoing Rental.'} txtStyles={'italic'}/>
            )
          }
        </section>
        <section className="h-fit overflow-hidden">
          <Text txtContent={"Rental History"} txtStyles={'text-lg font-bold text-black'}/>
          <section className="flex flex-col gap-3 max-h-[400px] overflow-y-auto p-2">
            {
              RentalHistorySample && (
                RentalHistorySample.map(apt => (
                  <RentalCards 
                  cardImg={apt.img}
                  cardTitle={apt.title}
                  cardContract={apt.contract}
                  cardStartDate={apt.start}
                  cardCloseDate={apt.end}
                  />
                ))
              )
            }
          </section>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default UserRentals