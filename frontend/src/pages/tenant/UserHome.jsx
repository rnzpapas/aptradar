import Footer from "@/layouts/Footer";
import UserNav from "@/layouts/navbars/UserNav";
import BgImage from '@/assets/hero.jpg';
import Text from "@/components/Text";

function UserHome() {
  return (
    <section className="overflow-hidden">
        <UserNav activeLink={0}/>
        {/* hero */}
        <section className="flex items-center justify-center h-[500px]">
            <img src={BgImage} className="mt-[70px] md:mt-[80px] lg:mt-[90px] xl:mt-[100px] w-full h-auto"/>
            <div className="w-full h-full absolute top-0 left-0 bg-black/25 mt-[70px] md:mt-[80px] lg:mt-[90px] xl:mt-[100px]"></div>
            <section className="absolute flex flex-col items-center mt-20 gap-2">
              <h5 className="font-secondary text-white text-5xl font-black">Discover your new home</h5>
              <Text txtContent={"Find Comfort, Find Home, Find Your Future."} txtStyles={"text-white text-xl"}/>
            </section>
        </section>
        <section className={"h-dvh"}>
          <section className="">
          </section>
        </section>
        <Footer />
    </section>
  )
}

export default UserHome