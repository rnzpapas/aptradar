import Footer from "@/layouts/Footer";
import UserNav from "@/layouts/navbars/UserNav";
import BgImage from '@/assets/hero.jpg';
import Text from "@/components/Text";
import SelectField from "@/components/SelectField";
import SearchFilters from "@/layouts/SearchFilters";
import propertyTypes from "@/data/properties.json";
import baranggayList from "@/data/baranggay.json";

function UserHome() {
  return (
    <section className="overflow-hidden">
        <UserNav activeLink={0}/>
        {/* hero */}
        <section className="flex items-center justify-center h-fit relative">
            <img src={BgImage} className="w-full h-auto"/>
            <div className="w-full h-full absolute top-0 left-0 bg-black/25"></div>
            <section className="absolute flex flex-col items-center md:gap-2">
              <h5 className="font-secondary text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black">Discover your new home</h5>
              <Text txtContent={"Find Comfort, Find Home, Find Your Future."} txtStyles={"text-white text-sm md:text-md lg:text-lg xl:text-xl"}/>
            </section>
        </section>
        <section className={"h-dvh"}>
          <section className="p-4 flex items-center justify-between">
            <section className="grid grid-cols-2 gap-2">
              <SelectField  
                selectLabel="Baranggay"
                selectPlaceholder="Where?"
                choices={baranggayList}
                required={true}
              />
              <SelectField  
                selectLabel="Property Type"
                selectPlaceholder="What?"
                choices={propertyTypes}
                required={true}
              />
            </section>
            <SearchFilters />
          </section>
        </section>
        <Footer />
    </section>
  )
}

export default UserHome